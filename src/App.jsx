import { Routes, Route } from 'react-router-dom';
import React, { lazy, Suspense } from 'react';
// import { Dna } from 'react-loader-spinner';

const SharedLayout = lazy(() => import('./pages/SharedLayout'));
const HomePage = lazy(() => import('./pages/HomePage'));
const Movies = lazy(() => import('./pages/Movies'));
const MovieDetails = lazy(() => import('./pages/MovieDetails'));
const CastDetails = lazy(() => import('./components/CastInfo'));
const ReviewDetails = lazy(() => import('./components/ReviewsInfo'));
export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />
        </Route>
        <Route path="movies" element={<Movies />} />

        <Route path=":movieId" element={<MovieDetails />}>
          <Route index element={<CastDetails />} />
          <Route index element={<ReviewDetails />} />
        </Route>
      </Routes>
    </div>
  );
};
