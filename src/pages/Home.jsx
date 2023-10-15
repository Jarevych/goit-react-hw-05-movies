import { useEffect, useState, useCallback } from 'react';
// import { Routes, Route } from "react-router-dom";
import { fetchMovies } from 'api';
import * as S from './Home.Styled';

export const HomePage = () => {
  const [trendList, setTrendList] = useState(null);
  const defaultImg =
    'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';

  const getTrendMovies = useCallback(async () => {
    try {
      const response = await fetchMovies();
      //   const { results, page } = response;
      setTrendList(response.results);
      //   console.log(trendList);
    } catch (error) {}
  }, []);

  useEffect(() => {
    getTrendMovies();
  }, [getTrendMovies]);

  const showMovies = Array.isArray(trendList) && trendList.length;
  return (
    <S.StyledAppContainer>
      <ul className="movielist">
        {showMovies &&
          trendList.map(trendItem => (
            <li className='movieitem' key={trendItem.id}>
              <h3 className='movietitle'>{trendItem.title || trendItem.name || 'movie'}</h3>
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
          ))}
      </ul>
    </S.StyledAppContainer>
  );
};
