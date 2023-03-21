import { faCirclePlay } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Paper } from '@mui/material';
import Carousel from 'react-material-ui-carousel';
import { Link, useNavigate } from 'react-router-dom';
import { Movie } from '../../../types/movies';
import Button from '../button/Button';
import './Hero.css';

interface HeroProps {
  movies: Movie[];
}

export default function Hero({ movies }: HeroProps) {
  const navigate = useNavigate();

  function navigateToReviews(movieId: string) {
    navigate('/Reviews/' + movieId);
  }

  return (
    <div className='w-full bg-black'>
      <Carousel>
        {movies.map((movie, index) => (
          <Paper key={index}>
            <div className='h-[550px] bg-black'>
              {/* @ts-ignore */}
              <div className='movie-card' style={{ '--img': `url(${movie.backdrops[0]})` }}>
                <div className='absolute flex flex-col justify-evenly w-full md:flex-row items-center md:items-stretch top-5 md:top-[200px]'>
                  <div className='h-[300px] border border-yellow-400 rounded-[10px] overflow-hidden'>
                    <img className='w-full h-full' src={movie.poster} alt={movie.title + ' poster'} />
                  </div>
                  <div className='flex items-center text-white'>
                    <h4>{movie.title}</h4>
                  </div>
                  <div className='flex justify-between items-center w-[300px]'>
                    <div className='mx-auto mt-4 md:m-0 md:p-0 md:w-[150px] flex flex-col items-center gap-5'>
                      <Link to={`/Trailer/${movie.trailerLink.substring(movie.trailerLink.length - 11)}`}>
                        <FontAwesomeIcon
                          className='p-0 m-0 text-5xl text-yellow-400 transition-all duration-200 ease-in-out cursor-pointer hover:text-6xl hover:text-white'
                          icon={faCirclePlay}
                        />
                      </Link>

                      <div>
                        <Button text='Reviews' onClick={() => navigateToReviews(movie.imdbId)} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Paper>
        ))}
      </Carousel>
    </div>
  );
}
