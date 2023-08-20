import { useEffect, useRef, useState } from 'react'; // Імпорт хуків
import { Outlet, useLocation, useParams } from 'react-router-dom';
import { fetchOneMovie } from 'services/services'; //запит до API про конкретний фільм
import { RxArrowLeft, RxArrowRight } from 'react-icons/rx'; //імпорт іконок
import img from '../img/imgnf.jpg'
import {
  AdditionalInfo,
  AdditionalList,
  BackButton,
  DetailsContainer,
  MovieInfo,
  SubMenuLink,
} from './MovieDetails.styled'; // імпотр стилів

// const defaultImg = 'img';

const MovieDetails = () => {
  const [movie, setMovie] = useState(null);
  const location = useLocation();
  const backLinkRef = useRef(location.state?.from ?? '/');
  const { movieId } = useParams();

  useEffect(() => {
    fetchOneMovie(movieId)
      .then(chosenMovie => setMovie(chosenMovie))
      .catch(error => {
        console.error(error.message);
        setMovie({});
      });
  }, [movieId]);

  if (!movie) {
    return;
  }

  function countUserScore() {
    const average = movie.vote_average;
    const userScore = Math.round(average * 10).toFixed(0) + '%';
    return userScore;
  }

  const { genres } = movie;
  const releaseDate = new Date(movie.release_date).getFullYear();
  const imageUrl = 'https://image.tmdb.org/t/p/w300';
  const posterPath = movie.poster_path;
  const productionCountries = movie.production_countries;

  return (
    <DetailsContainer>
      <BackButton to={backLinkRef.current}>
        <RxArrowLeft />
        Go back
      </BackButton>
      <MovieInfo>
        {/* відображалась тільки картинка , яка приходила, додали ще картинку за замовчуванням
        {posterPath  && (
            <img src= { `${imageUrl}${posterPath}`} 
          alt={movie.title} />
        )} */}
        {
          <img
            src={posterPath ? `${imageUrl}${posterPath}` : img}
            alt={movie.title}
          />
        }
        <div>
          <h2>
            {movie.title} ({releaseDate ? releaseDate : movie.status})
          </h2>
          <p>
            Made in:{' '}
            {productionCountries &&
              productionCountries.map(country => country.name).join(', ')}
          </p>
          <p>User Score: {countUserScore()}</p>
          <h3>Overview</h3>
          <p>{movie.overview}</p>
          <h3>Genres</h3>
          <p>{genres && genres.map(genre => genre.name).join(' ')} </p>
        </div>
      </MovieInfo>
      <AdditionalInfo>
        <h3>Additional information</h3>
        <AdditionalList>
          <li>
            <SubMenuLink to="cast">
              <RxArrowRight />
              Cast
            </SubMenuLink>
          </li>
          <li>
            <SubMenuLink to="reviews">
              <RxArrowRight />
              Reviews
            </SubMenuLink>
          </li>
        </AdditionalList>
        <Outlet />
      </AdditionalInfo>
    </DetailsContainer>
  );
};
export default MovieDetails;

//*#info - Докладна інформація про обраний фільм (зображення, заголовок, дата випуску, країна виробництва,рейтинг користувачів, огляд, жанр)
/*
Outlet - відображення вкладених компонентів залежно від URL
const MovieDetails = () => { ... } - оголошення функціонального компонента
const [movie, setMovie] = useState({}) - хук стану useState, movie - зберігає інформацію про обраний фільм, setMovie - оновлення стану
const Location = useLocation() - хук useLocation() - для отримання стану про поточний маршрут
const backLinkRef = useRef(Location.state?.from ?? '/') - хук useRef - створення посилання з поточним маршрутом, якщо from відсутнє - використай посилання "/"
const { movieId } = useParams() - хук useParams() - отримання параметрів { movieId } - отримання інформації про фільм з URL 
useEffect(() => { ... }, [movieId]) - коли зміниться [movieId] зроби запит до API для отримання інформації про фільм
fetchOneMovie(movieId).then(chosenMovie => setMovie(chosenMovie)).catch(error => {...} - виклик ф-ї fetchOneMovie з інформацією про фільм, запиши її в "movie", інакш виведи в консоль помилку

function countUserScore() { ... } - ф-я для рорзрахунку рейтингу користувачів на основі середнього рейтингу, зберігається у змінній average 
const average = movie.vote_average - зчитуємо середній рейтинг з фільму
const userScore = Math.round(average * 10).toFixed(0) + '%' - обчислюємо рейтинг користувачів у % (кожний бал * 10 і округлюємо до найближчого цілого)

genres, releaseDate, imageUrl, posterPath, productionCountries - данні про фільм

повертаємо розмітку
...
Виведення пунктів додаткової інформації: "Cast" і "Reviews", як посилання. 


*/
