// import { Routes, Route } from "react-router-dom";
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { fetchSearchMovie } from '../api'
import {StyledAppContainer} from './MoviesStyled'


export const Movies = () => {
  const [inputValue, setInputValue] = useState(null);
  const [searchResult, setSearchResult] = useState(null)
  const defaultImg =
    'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';

  const handleInput = e => {
    const input = e.target.value;
    setInputValue(input);
  };
  const Search = async(e) => {
    e.preventDefault();
    try {
        const response = await fetchSearchMovie(inputValue)
        setSearchResult(response.results);
        console.log(response);

    }
      catch(error) {
        console.log('помилка запиту');
      }
      finally {
        setInputValue('')
      }
  };

//   useEffect(() => {
//     fetchSearchMovie(inputValue)
//     .then(response => {
//         setSearchResult(response.data);
//         console.log(searchResult);
//       })
//       .catch(error => {
//         console.log('помилка запиту');
//       });
//   },[inputValue])
// const searchedMovies = searchResult && searchResult.results && searchResult.results.length > 0;
// console.log(searchedMovies)
  return (
    

    <StyledAppContainer>
      <form className="form" onSubmit={Search}>
        <input
          className="input"
          type="text"
          autoComplete="off"
          autoFocus
          name="keyword"
          placeholder="searchMovie"
          value={inputValue}
          onChange={handleInput}
        />
        <button type="submit" className="searchbutton">
          Search
        </button>
      </form>
    

    <ul className="movielist">
    {Array.isArray(searchResult) && searchResult.map(searchitem => (
      <Link to={`/movies/${searchitem.id}`} key={searchitem.id}>
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
};