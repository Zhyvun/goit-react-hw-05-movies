import React, { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { ThreeDots } from 'react-loader-spinner';

const Layout = lazy(() => import('../Layout/Layout'));
const Home = lazy(() => import('pages/Home/Home'));
const Movies = lazy(() => import('pages/Movies/Movies'));
const MovieDetails = lazy(() => import('pages/MovieDetails/MovieDetails'));
const Cast = lazy(() => import('../Cast/Cast'));
const Reviews = lazy(() => import('../Reviews/Reviews'));
const NotFound = lazy(() => import('pages/NotFound/NotFound'));

 export const App = () => {
  return (
    <Suspense fallback={<ThreeDots />}>
      <Routes>
        <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
        </Route>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

//*info - налаштування маршрутів для сторінок та використання затримки завантаження
/*
В кореневому компоненті використовуємо бібліотеку react-router-dom для налаштування маршрутів та 
затримку завантаження (lazy loading) для компонентів.
Функція React.lazy() відповідає за асинхронне завантаження компонента, а "Suspense" призупиняє його 
відображення до завершення завантаження.
*/
