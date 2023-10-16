import { HomePage } from 'pages/Home';
import { Routes, Route } from 'react-router-dom';
import React from 'react';
import { Movies } from 'pages/Movies';
import { Header } from 'pages/Header';
import { MovieDetails } from 'pages/MovieDetails';
import { CastDetails } from 'components/CastInfo'

// import { Routes, Route } from 'react-router-dom';

export const App = () => {
  return (
    <div>
      <Header/>
     
     <Routes>
      <Route path="/" element={<HomePage/>} />

      <Route path="/movie" element={<Movies />} />
      <Route path="/movies/:movieId" element={<MovieDetails/>} />
      <Route path="/movies/:movieId/cast" element={<CastDetails/>} />
     </Routes>
    </div>
  );
};
