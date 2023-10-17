import { Routes, Route } from 'react-router-dom';
import React, { Suspense, lazy } from 'react';
import { Dna } from 'react-loader-spinner';
import { CastDetails } from 'components/CastInfo';
import { ReviewDetails } from 'components/ReviewsInfo';
import { MovieDetails } from 'pages/MovieDetails';
import { Movies } from 'pages/Movies';
import { HomePage } from 'pages/HomePage';
import { SharedLayout } from 'pages/SharedLayout';

// const SharedLayout = lazy(() => import('./pages/SharedLayout'));
// const HomePage = lazy(() => import('./pages/HomePage'));
// const Movies = lazy(() => import('./pages/Movies'));
// const MovieDetails = lazy(() => import('./pages/MovieDetails'));
// const CastDetails = lazy(() => import('./components/CastInfo'));
// const ReviewDetails = lazy(() => import('./components/ReviewsInfo'));

export const App = () => {
  return (
    <div>
      <Suspense fallback={<Dna
            visible={true}
            height="80"
            width="80"
            ariaLabel="dna-loading"
            wrapperStyle={{}}
            wrapperClass="dna-wrapper"
          />}>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<CastDetails />} />
          <Route path="reviews" element={<ReviewDetails />} />
        </Route>
        </Route>

      </Routes>
      </Suspense>
    </div>
  );
};
