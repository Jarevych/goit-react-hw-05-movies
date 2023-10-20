import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchSearchMovie } from '../api';
import { StyledAppContainer } from './MoviesStyled';

export default function Movies() {
  const [searchParams, setSearchParams] = useSearchParams();
  const inputValue = searchParams.get("input");
  const location = useLocation();
  const defaultImg = 'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';
  const [searchResult, setSearchResult] = useState([]);

  const handleSubmit = e => {
    e.preventDefault();
    const input = e.currentTarget.elements.keyword.value;
    const query = input !== "" ? { input } : {};
    setSearchParams(query);
    e.currentTarget.reset();
  };

  useEffect (()=> {
    if(!inputValue) return;
    const Search = async () => {
      try {
        const response = await fetchSearchMovie(inputValue);
        setSearchResult(response.results);
      
        if (response.total_results === 0) {
          alert('there are no results');
        }
      } catch (error) {
        console.log('помилка запиту');
      } 
    };
    Search()
  },[inputValue]);

  return (
    <StyledAppContainer>
      <form className="form" onSubmit={handleSubmit}>
        <input
          className="input"
          type="text"
          autoComplete="off"
          autoFocus
          name="keyword"
          placeholder="Enter movie name"
        />
        <button type="submit" className="searchbutton">
          Search
        </button>
      </form>
      <ul className="movielist">
      {Array.isArray(searchResult) &&
          searchResult.map(searchitem => (
            <Link state={{ from: location }} to={`/movies/${searchitem.id}`}  key={searchitem.id}>
              <li className="movieitem">
                <h3 className="movietitle">
                  {searchitem.title || searchitem.name || 'movie'}
                </h3>
                <img
                  src={
                    searchitem.poster_path
                      ? `https://image.tmdb.org/t/p/w500/${searchitem.poster_path}`
                      : defaultImg
                  }
                  width={250}
                  alt={searchitem.title ? searchitem.name : 'poster'}
                />
              </li>
            </Link>
          ))}
      </ul>
    </StyledAppContainer>
  );
}