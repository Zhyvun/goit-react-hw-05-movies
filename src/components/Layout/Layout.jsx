import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom'; // Відображення відповідного змісту в залежності від поточного шляху
import { Header, Navigation, PageLink } from './Layout.styled'; // Стилізовані компоненти
import Loader from 'components/Loader/Loader';

const Layout = () => {
  return (
    <>
      <Header>
        <Navigation>
          <PageLink to="/">Home</PageLink>
          <PageLink to="/movies">Movies</PageLink>
        </Navigation>
      </Header>
      <main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};

export default Layout;

//*#Info - основна структура сторінки (заголовок, навігація, область компонента)
/* 
<Navigation>  - компонет навігації
Посилання на головну сторінку ('/')
Посилання на сторінку Movies  (/movies)
</Navigation>
<main> - основна область компонента сторінки
    <Outlet /> - Динамічне відображення вмісту, що відповідає поточному маршруту. Вкладені маршрути та компоненти рендеряться тут.
</main>
*/
