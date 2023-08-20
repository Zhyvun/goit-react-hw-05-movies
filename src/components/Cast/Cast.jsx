import { useState, useEffect } from 'react'; // хуки з бібліотеки react
import { useParams } from 'react-router-dom'; // хук з бібліотеки react-router-dom
import { fetchCast } from 'services/services'; // ф-я запиту про акторськи склад
// import imgnf from '../../pages/img/imgnf.jpeg'
import { CastInfo, CastItem } from './Cast.styled'; // стилізація


const Cast = () => {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    fetchCast(movieId)
      .then(credits => setCast(credits.cast))
      .catch(error => {
        console.error(error.message);
        setCast([]);
      });
  }, [movieId]);

  // const imageUrl = 'https://image.tmdb.org/t/p/w300'; //https://developer.themoviedb.org/reference/person-images
// const defaultImg = 'img';
  return (
    <ul>
      {cast.map(({ id, profile_path, original_name, name, character }) => (
        <CastItem key={id}>
          {profile_path && (
            <img
              // src={profile_path 
              //   ? `${imageUrl}${profile_path}`
              //   : imgnf}
                
                src={
                  profile_path
                    ? `https://image.tmdb.org/t/p/w300${profile_path}`
                    : `https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg`
                }
              alt={original_name}
              width="120"
            />
          )}
          <CastInfo>
            <p>
              <b>Name:</b> {name}
            </p>
            <p>
            <b>Character:</b> {character}
            </p>
          </CastInfo>
        </CastItem>
      ))}
    </ul>
  );
};
export default Cast;

//*#info - відображення інформації про акторський склад фільму
/*
const Cast = () => { ... } - оголошуємо фукнціональний компонент "Cast"
const [cast, setCast] = useState([]); - хук стану useState, cast - зберігає інформацію про актрів, setCast - оновлення стану - setCast([]) - 1 раз
const { movieId } = useParams() - хук useParams() для отримання параметрів ідентифікатору фільму { movieId } з URL

useEffect(() => { ... }, [movieId]); - використання хука useEffect для запиту до API для отримання інформації про акторський склад, 
запит здійснюється тіьки тоді коли зміниться [movieId]

fetchCast(movieId).then(credits => setCast(credits.cast)).catch(error => {...} - ф-я з пропсом (movieId) для отримання інформації про акторський склад
коли результати отримані оновлюється "cast". Якщо помилка - виведи повідомлення в консоль

const imageUrl = - URL для зображення акторів

Повертаємо розмітку:
{cast.map(actor => ( ... ))} - map для ітерації по масиву 
<CastItem key={actor.id}> ... </CastItem> - елемент списку з ключем для ідентифікації актора
{actor.profile_path && ( ... )} - перевіряємо URL чи є зображення актора

<img src={${imageUrl}${actor.profile_path}} alt={actor.name} width="120" /> - Виведення зображення актора
URL- змінна imageUrl. 
Ширина зображення - 120 пікселів.

<CastInfo> ... </CastInfo> - інформаціія про актора

*/