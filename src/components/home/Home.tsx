import { Movie } from '../../../types/movies';
import Hero from '../hero/Hero';

interface HomeProps {
  movies: Movie[];
}

export default function Home({ movies }: HomeProps) {
  return (
    <div>
      <Hero movies={movies} />
    </div>
  );
}
