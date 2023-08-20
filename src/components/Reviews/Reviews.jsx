import { useState, useEffect } from 'react'; // імпорт хуків
import { useParams } from 'react-router-dom';// параметри URL
import { format } from 'date-fns'
import { fetchReviews } from 'services/services';//ф-я fetchReviews з модуля services

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    fetchReviews(movieId)
      .then(results => setReviews(results))
      .catch(error => {
        console.error(error.message);
        setReviews([]);
      });
  }, [movieId]);

  //було
  // function formatDate(dateString) {
  //   const date = new Date(dateString);
  //   const formatDate = `${date.getFullYear()}
  //   - ${(date.getMonth() + 1).toString().padStart(2, '0')}
  //   - ${date.getDate().toString().padStart(2, '0')}
  //   (${date.getHours().toString().padStart(2, '0')}
  //   : ${date.getMinutes().toString().padStart(2, '0')}
  //   : ${date.getSeconds().toString().padStart(2, '0')}) `;
  //   return formatDate;

    //стало
    function formatDate(dateString) {
      const date = new Date(dateString);
      const formatDate = format(date, "yyyy-MM-dd (HH:mm:ss)")
      return formatDate;

  }

  return (
    <>
      {reviews.length > 0 ? (
        <ul>
          {reviews.map(review => (
            <li key={review.id}>
              <h3>Author: {review.author}</h3>
              <p>Date of create: {formatDate(review.created_at)}</p>
              <p>{review.content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>SORRY! But We don't have any revies for this movie</p>
      )}
    </>
  );
};

export default Reviews;

//* info - Reviews відображає список відгуків для певного фільму
/*
import { useParams } from 'react-router-dom' - дозволяє отримвуати параметри URL.
useState -створення стану reviews, для зберігаєння списку відгуків.
useParams - отримання movieId з параметрів URL, ID фільму, для якого відображення відгуків.
useEffect - викликаємо функції fetchReviews при завантаженні компонента. 
Те що отримали пишемо в стан reviews, інакше помилка встановлюємо пустий список.
formatDate -  рядок з датою форматуємо у формат РРРР - ММ - ДД ГГ:ХХ:СС року, місяця, дня, години, хвилини та секунди.

*/