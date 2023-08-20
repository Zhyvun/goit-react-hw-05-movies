// import { Link } from 'react-router-dom' // створення навігаційних посилань усередині програми без перезавантаження сторінки
import { useLocation } from 'react-router-dom' // хук - інформація про поточну URL-адресу.
import PropTypes from 'prop-types';

import { List, Item, MovieLink } from './MoviesList.styled';


const MoviesList = ({ movies }) => {
  const location = useLocation(); // використовуємо хук для для отримання інформації про поточний URL

  return (
    <List> 
      {movies.length > 0 && 
      movies.map(({ id, title }) => {
        return (
          <Item key={id}>
            <MovieLink to={`/movies/${id}`} state={{ from: location }}>
            {title}
            </MovieLink>
          </Item>
        );
      })}
    </List>

//   <List>
//   {movies.map(movie => (
//     <Item key={movie.id}>
//       <MovieLink to={`/movies/${movie.id}`} state={{ from: location }}>
//         {movie.title}
//       </MovieLink>
//     </Item>
//   ))}
// </List>
  );
};

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
};

export default MoviesList;

//*#info - відображення списку фільмів у вигляді посилань для отримання дод. інформації
/*
<ul>  - список для відображення фільмів
{movies.length > 0 && ...} - чи є фільми у списку. Якщо так, через 'map' відображаємо список.
movies.map(movie => { ... }) - Ітерація за списком фільмів і створення списку для кожного фільму.
  
return (
<li key={movie.id}> - Створення списку з ключем, з унікальною ідентифікацією кожного фільма.

<Link to={/movies/${movie.id}} state={{ from: location }}> Створюємо посилання за допомогою компонента Link. 
'to' вказує на URL-адресу фільму з його ідентифікатором {movie.id}. 
У параметр state передаємо об'єкт з інформацією звідки було виконано перехід на цей фільм.

{movie.title} -  Відображаємо назву фільму як гіперпосилання.
)
</ul>

*/