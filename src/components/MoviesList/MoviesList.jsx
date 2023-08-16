import { Link } from 'react-router-dom' // створення навігаційних посилань усередині програми без перезавантаження сторінки
import { useLocation } from 'react-router-dom' // хук - інформація про поточну URL-адресу.

const MoviesList = ({ movies }) => {
  const location = useLocation(); // використовуємо хук для для отримання інформації про поточний URL

  return (
    <ul> 
      {movies.length > 0 && 
      movies.map(movie => {
        return (
          <li key={movie.id}>
              <Link to={`/movies/${movie.id}`} state={{ from: location }}>
            {movie.title}
            </Link>
          </li>
        );
      })}
    </ul>
  );
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