import { useParams } from 'react-router-dom';
import { fetchMovieCast } from '../api';
import { useEffect, useState } from 'react';
import { StyledCastContainer } from './CastInfoStyled';

export default function CastDetails() {
  const { movieId } = useParams();
  const [castData, setCastData] = useState(null);
  const defaultImg =
    'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';

  useEffect(() => {
    fetchMovieCast(movieId)
      .then(response => {
        setCastData(response.cast);
      })
      .catch(error => {
        console.log('Cast details mistake');
      });
  }, [movieId]);
  const castArray = Array.isArray(castData) ? castData : [];
  return (
    <StyledCastContainer>
      <ul className="movielist">
        {castArray.map(cData => (
          <li className="movieitem" key={cData.cast_id}>
            <img
              className="cast-image"
              src={
                cData.profile_path
                  ? `https://image.tmdb.org/t/p/w500/${cData.profile_path}`
                  : defaultImg
              }
              alt={cData.name}
            />
            <p className="cast-name">{cData.name}</p>
          </li>
        ))}
      </ul>
    </StyledCastContainer>
  );
}
