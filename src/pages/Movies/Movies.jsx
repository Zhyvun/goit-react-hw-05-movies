import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';//оновлення параметрів URL
import { fetchSearchResult } from 'services/services';
import Loader from 'components/Loader/Loader';// імпорт лоадера
import Form from 'components/Form/Form'; // імпорт форми 
import MoviesList from 'components/MoviesList/MoviesList';
import { MoviesBox } from './Movies.styled'; // стилізація компонентів

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [loading, setLoading] = useState(false);
  const [requestFall, setRequestFall] = useState(false);
  const query = searchParams.get('query') ?? '';

  useEffect(() => {
    if (query === '') {
      setMovies([]);
      return;
     }
    setLoading(true);
    const answer = fetchSearchResult(query)
      .then(foundedMovies => {
        setMovies(foundedMovies);
        setRequestFall(foundedMovies.length === 0)
      })

      .catch(error => {
        console.error(error.message);
        // setRequestFall(error.message);
        setMovies([]);
      })
      .finally(() => {
        setLoading(false);
        // setRequestFall(false);
      });
      console.log(answer)
  }, [query]);
  

  const setParams = query => {
    const params = query !== '' ? { query } : {};
    setSearchParams(params);
    // console.log(params)
  };

  return (
    <MoviesBox>
      <Form setParams={setParams} />
      {loading && <Loader />}
      {requestFall && (<h1>No movies with this request. Please, try again</h1>) }
      {(query && movies.length > 0) && <h1>Found movies</h1>}
      {!!movies.length && <MoviesList movies={movies} />}
    </MoviesBox>
  );
};

export default Movies;

//*info - Пошук фільмів по назві з використанням параметрів URL і виводу результату на сторінці
/*
-----Як стало після змін ---------
Хук useState для створення стану:
    movies: Масив фільмів.
    searchParams: Параметри пошукового запиту з URL.
    loading: Стан завантаження даних.
    requestFall: Стан, який показує, чи був хибний запит на пошук.

[searchParams, setSearchParams] = useSearchParams(); - зчитування запиту з параметрів URL,  useSearchParams - створення змінної query
useEffect, -  реагує на зміну query, якщо query обнуляються movies, завершується виконання, інакше встановлюється виконання loading - на true
fetchSearchResult - отримання результатів пошуку фільмів, 
setRequestFall(foundedMovies.length === 0) - перевіряється, чи був запит вдалим. Якщо нічого не знайдено, встановлюється requestFall в true. 
при помилці - встановлюється requestFall в true, виводиться повідомлення про помилку {requestFall && (<h1>No ...)}
setParams -  встановлення параметрів URL на основі введеного запиту. Якщо запит порожній, встановлюються порожні параметри.

return ()
<Form setParams={setParams} /> - форми для введення пошукового запитe  setParams - пропс
{loading && <Loader />} - індикатор завантаження
{requestFall && (<h1>No ...)} - повідомлення про помилку
{(query && movies.length > 0) && <h1>Found ...)} -якщо query не порожній і кількість фільмів більше 0 - відображаємо заголовок 
{!!movies.length && <MoviesList movies={movies} />} - Відображення списку фільмів

*/
