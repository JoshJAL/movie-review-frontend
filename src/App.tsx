import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Movie } from '../types/movies';
import { Review } from '../types/reviews';
import api from './api/axiosConfig';
import Header from './components/header/Header';
import Home from './components/home/Home';
import Layout from './components/Layout';
import Reviews from './components/reviews/Reviews';
import Trailer from './components/trailer/Trailer';

function App() {
  const [movies, setMovies] = useState([]);
  const [movie, setMovie] = useState<Movie>();
  const [reviews, setReviews] = useState<Review[]>([]);

  async function getMovies() {
    try {
      const response = await api.get('/api/v1/movies');
      setMovies(response.data);
    } catch (err) {
      console.log(err);
    }
  }

  async function getMovieData(movieId: string) {
    try {
      const response = await api.get(`/api/v1/movies/${movieId}`);
      const singleMovie = response.data;
      setMovie(singleMovie);
      setReviews(singleMovie.reviewIds);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div className='flex flex-col min-h-screen overflow-hidden text-white bg-black'>
      <Header />
      <div className='w-full max-w-6xl mx-auto'>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route path='/' element={<Home movies={movies} />} />
            <Route path='/Trailer/:ytTrailerId' element={<Trailer />} />
            <Route
              path='/Reviews/:movieId'
              element={<Reviews getMovieData={getMovieData} movie={movie} reviews={reviews} setReviews={setReviews} />}
            />
          </Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
