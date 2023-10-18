import { useEffect, useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { fetchMovies } from 'api';
import { StyledAppContainer } from './HomePageStyled';

export default function HomePage() {
  const [trendList, setTrendList] = useState(null);
  const defaultImg =
    'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';

  const getTrendMovies = useCallback(async () => {
    try {
      const response = await fetchMovies();
      setTrendList(response.results);
    } catch (error) {}
  }, []);

  useEffect(() => {
    getTrendMovies();
  }, [getTrendMovies]);

  const showMovies = Array.isArray(trendList) && trendList.length;
  return (
    <StyledAppContainer>
      <h2 className="page-title">Trending today</h2>

      <ul className="movielist">
        {showMovies &&
          trendList.map(trendItem => (
            <Link to={`/movies/${trendItem.id}`} key={trendItem.id}>
              <li className="movieitem" >
                <h3 className="movietitle">
                  {trendItem.title || trendItem.name || 'movie'}
                </h3>
                <img
                  src={
                    trendItem.poster_path
                      ? `https://image.tmdb.org/t/p/w500/${trendItem.poster_path}`
                      : defaultImg
                  }
                  width={250}
                  alt={trendItem.title ? trendItem.name : 'poster'}
                />
              </li>
            </Link>
          ))}
      </ul>
    </StyledAppContainer>
  );
}
