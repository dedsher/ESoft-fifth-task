import { FilmDetails } from "interfaces";
import { createContext, useContext } from "react";

export const FilmContext = createContext<FilmDetails | undefined>(undefined);

export const useFilm = () => {
  const context = useContext(FilmContext);
  if (context === undefined) {
    throw new Error("useFilm must be used within a FilmProvider");
  }
  return context;
};
