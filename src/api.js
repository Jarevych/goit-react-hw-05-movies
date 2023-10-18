import axios from 'axios';

const API_KEY = '9d5899cc0470980530f09016862b9ba9';

export async function fetchMovies() {
  try {
    const response = await axios.get(
      'https://api.themoviedb.org/3/trending/all/day',
      {
        params: {
          api_key: API_KEY,
        },
      }
    );

    if (response.status !== 200) {
      throw new Error('There is now result for your query');
    }
    return response.data;
  } catch (error) {
    throw new Error('There is no result for your query');
  }
}

export async function fetchMovieDetails(movieId) {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}`,
      {
        params: {
          api_key: API_KEY,
        },
      }
    );

    if (response.status !== 200) {
      throw new Error('There is now result for your query');
    }
    return response.data;
  } catch (error) {}
}

export async function fetchSearchMovie(inputValue) {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/search/movie`,
      {
        params: {
          query: inputValue,
          api_key: API_KEY,
        },
      }
    );

    if (response.status !== 200) {
      throw new Error('There is now result for your query');
    }
    return response.data;
  } catch (error) {}
}
export async function fetchMovieCast(movieId) {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}/credits`,
      {
        params: {
          api_key: API_KEY,
        },
      }
    );

    if (response.status !== 200) {
      throw new Error('There is now result for your query');
    }
    return response.data;
  } catch (error) {}
}
export async function fetchMovieReview(movieId) {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}/reviews`,
      {
        params: {
          api_key: API_KEY,
        },
      }
    );

    if (response.status !== 200) {
      throw new Error('There is now result for your query');
    }
    return response.data;
  } catch (error) {}
}
