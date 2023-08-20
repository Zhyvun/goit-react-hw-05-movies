import axios from 'axios'; //бібліотека відправки асинхронних HTTP-запитів до API

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const API_KEY = '6cbea8cece37cf85eba0b83585dd8520';

// Список популярних фільмів на поточний день
export const fetchTrending = async () => {
  const params = {
    api_key: API_KEY,
    page: 1, // пагінація результатів
  }; 
  try {const { data } = await axios.get('/trending/movie/day', { params });
  return data.results;
} catch (error){ 
  console.error(error);
}
};

//Пошук фільмім по запиту (query)
export const fetchSearchResult = async query => {
  const params = {
    api_key: API_KEY,
    page: 1,
    query,
  };
  const { data } = await axios.get('/search/movie', { params });
  console.log(data.results)
  return data.results.filter(movie =>
    movie.title.toLowerCase().includes(query.toLowerCase())
  );
};

//Інформація про обраний фільм (movieId)
export const fetchOneMovie = async movieId => {
  const params = {
    api_key: API_KEY,
    page: 1,
  };
  const { data } = await axios.get(`/movie/${movieId}`, { params });
  // console.log(data);
  return data;
};

//Результат про акторський склад, ролі (moviedId)
export const fetchCast = async movieId => {
  const params = {
    api_key: API_KEY,
    page: 1,
    language: 'en-US',
  };
   try{  
  const { data } = await axios.get(`/movie/${movieId}/credits`, { params });
  return data;
} catch (error) {
  console.error(error.message);
  throw new Error('Failed to fetch cast');
}
};

//Результат огляду фільму (moviedId)
export const fetchReviews = async movieId => {
  const params = {
    api_key: API_KEY,
    page: 1,
    language: 'en-US',
  };
  const { data } = await axios.get(`/movie/${movieId}/reviews`, { params });
  console.log(data);
  return data.results;
  
};

//*#info - функції пошуку (асинхронні запити до API)