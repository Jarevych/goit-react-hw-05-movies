import axios from 'axios';

const API_KEY = '9d5899cc0470980530f09016862b9ba9';



async function fetchMovies(searchQuery) {
  try {
    const response = await axios.get('https://api.themoviedb.org/3/trending/all/day', {
      params: {
        // q: searchQuery,
        // page: page,
        api_key: API_KEY,
        // image_type: 'photo',
        // orientation: 'horizontal',
        // per_page: 12,
      },
    }
    );
    console.log(response.data);

    if (response.status !== 200) {
      throw new Error('There is now result for your query');

    }
    return response.data;
  } catch (error) {
    throw new Error('There is no result for your query');
  }
}
export { fetchMovies };