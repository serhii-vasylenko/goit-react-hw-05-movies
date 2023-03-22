import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: '0a5061ab0f3f7e359a07b52243a53d24',
  },
});

export const getTrending = async () => {
  const response = await api.get('trending/movie/day');
  return response.data;
};

export const getMovieByQuery = async query => {
  const response = await api.get(
    `/search/movie?query=${encodeURIComponent(query)}`
  );
  return response.data;
};

export const getMovieById = async id => {
  const response = await api.get(`/movie/${id}`);
  return response.data;
};

export const getMovieCast = async id => {
  const response = await api.get(`/movie/${id}/credits`);
  return response.data;
};

export const getMovieReviews = async id => {
  const response = await api.get(`/movie/${id}/reviews`);
  return response.data;
};
