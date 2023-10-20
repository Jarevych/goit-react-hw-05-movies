import { Suspense } from 'react';
import {
  StyledMovieInfo,
  StyledButtonLink,
  StyledMenu,
  StyledMenuItem,
  StyledMenuLink,
} from './MovieDetailsStyled';
import { Outlet, useParams, useLocation } from 'react-router-dom';
import { fetchMovieDetails } from '../api';
import { useEffect, useState, useRef } from 'react';
import { Dna } from 'react-loader-spinner';

export default function MovieDetails() {
  const { movieId } = useParams();
  const [movieData, setMovieData] = useState(null);
  const location = useLocation();
  const goBackTo = useRef(location.state?.from ?? '/');
  console.log('Before navigation:', goBackTo);

  const defaultImg =
    'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';

  useEffect(() => {
    fetchMovieDetails(movieId)
      .then(response => {
        setMovieData(response);
      })
      .catch(error => {
        console.log('помилка запиту');
      });
  }, [movieId]);

  if (movieData === null) {
    return (
      <div className="centered">
        <Dna
          visible={true}
          height="80"
          width="80"
          ariaLabel="dna-loading"
          wrapperStyle={{}}
          wrapperClass="dna-wrapper"
        />
      </div>
    );
  }
  return (
    <div>
      <StyledButtonLink to={goBackTo.current}>Go Back </StyledButtonLink>
      <StyledMovieInfo>
        <div className="detail-img">
          <img
            src={
              movieData.poster_path
                ? `https://image.tmdb.org/t/p/w500${movieData.poster_path}`
                : defaultImg
            }
            alt={movieData.title}
          />
        </div>
        <div className="detail-data">
          <h3>{movieData.title || movieData.name}</h3>
          <p className="details-info">User Score</p>
          <p className="details-name">Owerview</p>
          <p className="details-info">{movieData.overview}</p>
          <p className="details-name">Genres</p>
          <p className="details-info">
            {movieData.genres.map(genre => genre.name).join(', ')}
          </p>
        </div>
      </StyledMovieInfo>
      <div>
        <p className="details-info"></p>
        <StyledMenu>
          <StyledMenuItem>
            <StyledMenuLink to={`${goBackTo}/cast`} >Cast</StyledMenuLink>
          </StyledMenuItem>
          <StyledMenuItem>
            <StyledMenuLink to={"./reviews"}>Reviews</StyledMenuLink>
          </StyledMenuItem>
        </StyledMenu>
        <Suspense
          fallback={
            <div className="centered">
              <Dna
                visible={true}
                height="80"
                width="80"
                ariaLabel="dna-loading"
                wrapperStyle={{}}
                wrapperClass="dna-wrapper"
              />
            </div>
          }
        >
          <Outlet />
        </Suspense>
      </div>
    </div>
  );
}
