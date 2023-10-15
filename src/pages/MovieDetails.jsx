// import { Routes, Route } from "react-router-dom";
import {StyledButtonLink} from './MovieDetailsStyled'
import { useParams } from 'react-router-dom';
import { fetchMovieDetails } from '../api';
import { useEffect, useState } from 'react';

export const MovieDetails = () => {
  const { movieId } = useParams();
  const [movieData, setMovieData] = useState(null);

  useEffect(() => {
    fetchMovieDetails(movieId)
      .then(response => {
        setMovieData(prevMovieData => response);
      })
      .catch(error => {
        console.log('помилка запиту');
      });
    console.log(movieData);
  }, [movieId]);
  

  if (movieData === null) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <StyledButtonLink to="/">Go Back </StyledButtonLink>
      <div>
       
        <img
          src={`https://image.tmdb.org/t/p/w500${movieData.poster_path}`}
          alt={movieData.title}
        />
        <h3>{movieData.title || movieData.name}</h3>
        <p className="details-info">User Score</p>
        <p className="details-name">Owerview</p>
        <p className="details-info">{movieData.overview}</p>
        <p className="details-name"></p>
        <p className="details-info"></p>
      </div>

      <p className="details-info"></p>
      <ul>
        <li>Cast</li>
        <li>Reviews</li>
      </ul>
    </div>
  );
};
