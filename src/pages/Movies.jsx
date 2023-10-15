import { useEffect, useState, useCallback } from 'react';
// import { Routes, Route } from "react-router-dom";
import { fetchMovies } from 'api';

export const Movies = () => {
  

  return (
    <div>
        <form className="form" onSubmit={getTrendMovies}>
        <input
          className="input"
          type="text"
          autoComplete="off"
          autoFocus
          name="searchImage"
          placeholder="Search images and photos"
        />
        <button type="submit" className="searchbutton">
          {/* <FontAwesomeIcon icon={faMagnifyingGlass} beat /> */}
        </button>
      </form>
        <h2>Trending today</h2>

    </div>
  );
};
