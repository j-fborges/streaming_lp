export type MovieList = {
  results: Movie[];
};

export type Movie = {
  title: string;
  poster_path: string;
  backdrop_path: string;
};