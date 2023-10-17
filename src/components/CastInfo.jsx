import { useParams } from 'react-router-dom';
import { fetchMovieCast } from '../api';
import { useEffect, useState } from 'react';

export const CastDetails = () => {
  const { movieId } = useParams();
  const [castData, setCastData] = useState(null);
  const defaultImg =
    'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';

  useEffect(() => {
    fetchMovieCast(movieId)
      .then(response => {
        setCastData(response.cast);
        console.log(castData);
      })
      .catch(error => {
        console.log('Cast details mistake');
      });
  },[]);
  const castArray = Array.isArray(castData) ? castData : [];
    console.log(castArray);
  return (
    <div>
      <ul className="movielist">
        {castArray.map(cData => (
            <li className="movieitem">
              <img
                src={
                    cData.profile_path
                    ? `https://image.tmdb.org/t/p/w500/${cData.profile_path}`
                    : defaultImg
                }
                alt={cData.name}
              />
              <p>{cData.name}</p>
            </li>
          ))}
      </ul>
    </div>
  );
};
