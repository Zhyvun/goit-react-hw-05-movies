import { useEffect, useState } from 'react' // імпорт хуків 
import { fetchTrending } from 'services/services'; // ф-я запиту про популярні фільми на поточний день
import { HomeBox, HomeTitle } from './Home.styled'; // стилізовані компоненти
import MoviesList from 'components/MoviesList/MoviesList'; //список фільмів

const Home = () => {
const [movies, setMovies] = useState ([]);

useEffect(() => {
  fetchTrending ()
  .then(answer => {setMovies(answer)
  })
  .catch(error => console.error(error.message));
}, []);

return (
  <HomeBox>
    <HomeTitle>Trending movies</HomeTitle>
    {!!movies.length && <MoviesList movies={movies}/>}
  </HomeBox>
);
};

export default Home;

//*#info - відображення списку популярних фільмів (хук useEffect)
/*
const [movies, setMovies] = useState([]); - хук стану useState, змінна стану movies - зберігає [список] фільмів, функція setMovies - оновлення списку

useEffect(() => { ... }, []) - хук для запиту до API - "популярні фільми", [] - запит один раз, бо пустий масив
fetchTrending().then(...) - ф-я отримання популярних фільмів
{setMovies(answer)} - функція оновлення списку
{!!movies.length && <MoviesList movies={movies}/>} } - виводимо список фільмів якщо його довжина > 0, (передаються як властивість до компонента MoviesList) 

*/