import { genreDTO } from "../genres/genres.model";
import { movieTheatherDTO } from "../movie-theathers/movie-theather-model";

export interface movieCreationDTO{
  title: string;
  summary: string;
  poster: File;
  inTheaters: boolean;
  releaseDate: Date;
  trailer: string;
  genresIds: number[];
  movieTheatersIds: number[];
}

export interface movieDTO{
  title: string;
  summary: string;
  poster: string;
  inTheaters: boolean;
  releaseDate: Date;
  trailer: string;
}

export interface MoviePostGetDto{
  genres : genreDTO[];
  movieTheaters: movieTheatherDTO[];
}


