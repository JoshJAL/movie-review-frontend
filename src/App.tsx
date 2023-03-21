import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import api from './api/axiosConfig';
import Header from './components/header/Header';
import Home from './components/home/Home';
import Layout from './components/Layout';
import Trailer from './components/trailer/Trailer';

function App() {
  const [movies, setMovies] = useState([]);

  async function getMovies() {
    try {
      const response = await api.get('/api/v1/movies');
      setMovies(response.data);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div className='flex flex-col min-h-screen text-white bg-black'>
      <Header />
      <div className='w-full max-w-6xl mx-auto'>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route path='/' element={<Home movies={movies} />} />
            <Route path='/Trailer/:ytTrailerId' element={<Trailer />} />
          </Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
