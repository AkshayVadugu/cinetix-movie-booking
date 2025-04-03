import axios from 'axios';

const API_KEY = import.meta.env.VITE_API_KEY;
const BASE_URL = 'https://api.themoviedb.org/3';

export const getMovies = async (query: string = '') => {
  try {
    const params = {
      api_key: API_KEY,
      language: 'en-US',
      include_adult: false,
      page: 1,
      query: query,
    };

    const response = await axios.get(`${BASE_URL}/search/movie`, { params });
    return response.data;
  } catch (error) {
    console.error('Error fetching movies:', error);
    throw error;
  }
};

export const getMovieDetails = async (movieId: number) => {
  try {
    const params = {
      api_key: API_KEY,
      language: 'en-US',
    };

    const response = await axios.get(`${BASE_URL}/movie/${movieId}`, { params });
    return response.data;
  } catch (error) {
    console.error('Error fetching movie details:', error);
    throw error;
  }
};

export const getImageUrl = (path: string, size: 'w500' | 'w780' = 'w500') => {
  return `https://image.tmdb.org/t/p/${size}${path}`;
};
