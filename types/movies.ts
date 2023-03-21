type ID = {
  timestamp: number;
  date: string;
};

export type Movie = {
  id: ID;
  imdbID: string;
  title: string;
  releaseDate: string;
  trailerLink: string;
  poster: string;
  genres: string[];
  backdrops: string[];
  reviewIds: string[];
};
