import { Film } from "interfaces";

const API_URL = "https://api.kinopoisk.dev/v1.4/movie";

// 5 ключей с лимитом 200 запросов на каждом
const API_KEYS = [
  "KQ6V2Z7-CV143VR-HHD181J-Z30HG4N",
  "H82XZ9W-DDP4PGA-Q56ZZDB-QQ3JA2D",
  "TQ64SJT-8Y1M6WB-PHJFNCQ-C155V19",
  "YVCNQ7J-ZDP4S2F-M597RD6-WGEW1DA",
  "XD516HJ-A11M0JR-HW8G4QC-QY3QDW9",
];
let API_KEY = API_KEYS[1];

const OPTIONS = {
  method: "GET",
  headers: { accept: "application/json", "X-API-KEY": API_KEY },
};

// Функция для смены ключа:
export const changeKey = () => {
  console.log(`Предыдущий ключ: ${API_KEY}`);
  API_KEY =
    API_KEYS[
      (API_KEYS.findIndex((key) => key === API_KEY) + 1) % API_KEYS.length
    ];
  console.log(`Новый ключ: ${API_KEY}`);
};

// Запрос популярных фильмов
export const requestFilms = async (): Promise<unknown> => {
  const response = await fetch(
    `${API_URL}/search?page=1&limit=50&selectFields=id&selectFields=persons&selectFields=shortDescription&selectFields=type&selectFields=name&selectFields=rating&selectFields=poster&selectFields=description&selectFields=genres`,
    OPTIONS
  );
  const data = await response.json();

  if (data.message && data.message.includes("израсходовали")) {
    changeKey();
    OPTIONS.headers["X-API-KEY"] = API_KEY;
    return requestFilms();
  }

  return data.docs as Film[];
};

// Запрос фильма по id
export const requestFilm = async (filmId: number): Promise<unknown> => {
  const response = await fetch(`${API_URL}/${filmId}`, OPTIONS);
  const data = await response.json();

  if (data.message && data.message.includes("израсходовали")) {
    changeKey();
    OPTIONS.headers["X-API-KEY"] = API_KEY;
    return requestFilm(filmId);
  }

  return data as Film;
};

// Запрос похожих фильмов
export const requestSimilarFilms = async (
  genres: Film["genres"],
  currentId: Film["id"]
): Promise<unknown> => {
  const genresString = genres.reduce((acc, genre) => {
    return acc + `&genres.name=${encodeURI(genre.name)}`;
  }, "");
  const response = await fetch(
    `${API_URL}?page=1&limit=5&id=%21${currentId}${genresString}&selectFields=id&selectFields=persons&selectFields=shortDescription&selectFields=type&selectFields=name&selectFields=rating&selectFields=poster&selectFields=description&selectFields=genres`,
    OPTIONS
  );
  const data = await response.json();

  if (data.message && data.message.includes("израсходовали")) {
    changeKey();
    OPTIONS.headers["X-API-KEY"] = API_KEY;
    return requestSimilarFilms(genres, currentId);
  }

  return data.docs as Film[];
};

// Фильтрация фильмов по жанрам
const filterFilmsByGenres = (films: Film[], genres: string[]): Film[] => {
  return films.filter((film) => {
    
    const filmGenres = film.genres.map((genre) => genre.name);
    return genres.every((genre) => filmGenres.includes(genre));
  });
};

// Запрос фильмов по жанрам и названию
export const requestSearchFilms = async (
  name: Film["name"],
  genres: string[]
): Promise<Film[]> => {
  let url = `${API_URL}${name && '/search'}?page=1&limit=100`;

  // Запросы отдельно по имени и отдельно по жанрам разные
  if (name) {
    url += `&query=${encodeURI(name)}`;
  } else {
    const parsedGenres = genres.reduce((acc, genre) => {
      return acc + `&genres.name=${encodeURI(genre)}`;
    }, "");

    url += parsedGenres;
  }

  const response = await fetch(
    url,
    OPTIONS
  );
  const data = await response.json();

  if (data.message && data.message.includes("израсходовали")) {
    changeKey();
    OPTIONS.headers["X-API-KEY"] = API_KEY;
    return requestSearchFilms(name, genres);
  }

  // Если есть и имя и жанры, то фильтруем запрос по имени по жанрам
  if (name && genres.length) {
    return filterFilmsByGenres(data.docs, genres);
  }

  // Иначе просто возвращаем запрос по имени или жанрам
  return data.docs as Film[];
};
