import { useEffect, useState } from 'react';
import api from '../../api/axiosConfig';
import { useParams } from 'react-router-dom';
import ReviewForm from '../reviewForm/ReviewForm';
import { Movie } from '../../../types/movies';
import { Review } from '../../../types/reviews';

interface ReviewsProps {
  getMovieData: (movieId: string) => void;
  movie: Movie | undefined;
  reviews: Review[];
  setReviews: (reviews: any) => void;
}

export default function Reviews({ getMovieData, movie, reviews, setReviews }: ReviewsProps) {
  const [revText, setRevText] = useState('');
  let params = useParams();
  const movieId = params.movieId;

  useEffect(() => {
    if (!movieId) return;
    getMovieData(movieId);
  }, []);

  function onChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
    setRevText(e.target.value);
  }

  async function addReview(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.preventDefault();

    try {
      const response = await api.post('/api/v1/reviews', { reviewBody: revText, imdbId: movieId });

      const updatedReviews = [...reviews, { body: revText }];

      setRevText('');

      setReviews(updatedReviews);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className='flex flex-col w-full gap-5 px-5 py-4 md:flex-row md:gap-10'>
      <div className='flex flex-col md:w-[50%]'>
        <h1 className='mb-3 text-xl'>Reviews for {movie?.title}</h1>
        <img src={movie?.poster} />
      </div>
      <div className='flex flex-col md:w-[50%]'>
        <ReviewForm
          defaultValue=''
          handleSubmit={addReview}
          labelText='Write a Review?'
          revText={revText as unknown as string}
          onChange={onChange}
        />
        <hr className='w-full my-4' />
        {reviews?.map((review: any, index: number) => (
          <div key={index}>
            <p>{review.body}</p>

            <hr className='w-full my-4' />
          </div>
        ))}
      </div>
    </div>
  );
}
