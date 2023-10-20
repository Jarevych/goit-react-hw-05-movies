import { Routes, Route } from 'react-router-dom';
import React, { Suspense, lazy } from 'react';
import { SharedLayout } from 'components/SharedLayout';

const HomePage = lazy(() => import('./pages/HomePage'));
const Movies = lazy(() => import('./pages/Movies'));
const MovieDetails = lazy(() => import('./pages/MovieDetails'));
const CastDetails = lazy(() => import('./components/CastInfo'));
const ReviewDetails = lazy(() => import('./components/ReviewsInfo'));

export const App = () => {
  return (
    <div>
      <Suspense>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<HomePage />} />
            <Route path="movies" element={<Movies />} />
            <Route path="movies/:movieId/*" element={<MovieDetails />}>
              <Route path="cast" element={<CastDetails />} />
              <Route path="reviews" element={<ReviewDetails />} />
            </Route>
          </Route>
        </Routes>
      </Suspense>
    </div>
  );
};
