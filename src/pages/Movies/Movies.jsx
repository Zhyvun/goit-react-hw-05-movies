import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { DebounceInput } from 'react-debounce-input';
import { fetchSearchResult } from 'services/services';
import MoviesList from 'components/MoviesList/MoviesList';
import { MoviesBox } from './Movies.styled';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';

  useEffect(() => {
    if (query === '') {
      setMovies([]);
      return;
    }

    fetchSearchResult(query)
      .then(foundedMovies => {
        setMovies(foundedMovies);
      })
      .catch(error => {
        console.error(error.message);
        setMovies([]);
      });
  }, [query]);

  const handleInputChange = event => {
    if (event.target.value === '') {
      return setSearchParams({});
    }
    setSearchParams({ query: event.target.value });
  };

  return (
    <MoviesBox>
      <DebounceInput // затримка введення тексту
        minLength={3} // мінумум 3 символа
        debounceTimeout={300} // 300 мілісекунд
        type="text"
        value={query} // якщо заданий запит → виведеться заголовок "Found movies"
        placeholder="Enter movie's title..."
        onChange={handleInputChange}
      />
      {query && <h1>Found movies</h1>}
      {!!movies.length && <MoviesList movies={movies} />}
    </MoviesBox>
  );
};

export default Movies;

//*#info - Пошук фільмів по назві з використанням параметрів URL і виводу результату на сторінці

/*
const [movies, setMovies] = useState([]); - хук стану useState, змінна стану movies - зберігає [список] фільмів, функція setMovies - оновлення списку
const [searchParams, setSearchParams] = useSearchParams() - кастомний хук для роботи з параметрами URL - отримання парметру запиту 'query' URL.
const query = searchParams.get('query') ?? ''; - Отримуємо значення, якщо нічого немає → пуста стрічка

useEffect(() => { ... }, [query]) - хук useEffect - { заантаження списку фільмів }, тільки при зміні парметра [query] 
if(query === '') { // якщо query пустий очисти список > інакше викличи ф-ю fetchSearchResult(query) - шукаємо фільми
setMovies([]); - знайдені фільми запиши в movies
catch(error => {...}) - якщо помилка виведи повідомлення в консоль, очисти список

const handleInputChange = event => { ... } - обробник події зміни введення тексту. 
Якщо значення введення (event.target.value) порожнє → параметри пошуку (searchParams) → встанови пустий об'єкт. 
Інакше 'query' → значення введення.

return (...) - повертаємо розмітку
DebounceInput - затримка введення тексту

{!!movies.length && <MoviesList movies={movies}/>} } - виводимо список фільмів якщо його довжина > 0, (передаються як властивість до компонента MoviesList) 

*/
