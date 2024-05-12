export interface FilmGenre {
  name: string;
}

interface Person {
  name: string;
}

export interface Film {
  id: number;
  name: string;
  shortDescription: string;
  poster: {
    previewUrl?: string;
  };
  rating: {
    imdb: number;
  };
  genres: FilmGenre[];
  persons: Person[];
  type: string;
}

export interface FilmDetails extends Film {
  description: string;
  year: number;
  movieLength: number;
  ageRating: number;
  countries: {
    name: string;
  }[];
  createdAt: string;
}

export interface FilmsState {
  films: Film[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

export interface SimilarFilmsState {
  similarFilms: Film[];
  similarStatus: "idle" | "loading" | "succeeded" | "failed";
  similarError: string | null;
}


export interface SearchFilmsState extends FilmsState {
  selectedGenre: string;
}

export interface FilmDetailsState {
  film: FilmDetails;
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

export interface SelectOption {
  value: "default" | "descending" | "ascending";
  label: string;
}

export interface Filter {
  value: "all" | "films" | "series" | "cartoons";
  label: string;
}

export interface onSortClick {
  (value: SelectOption["value"]): void;
}

export interface onFilterClick {
  (value: Filter["value"]): void;
}

export interface UserComment {
  id: string;
  text: string;
  time: string;
  author: string;
}
