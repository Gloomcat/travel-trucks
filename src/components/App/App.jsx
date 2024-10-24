import css from './App.module.css';

import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

const Header = lazy(() => import('../../components/Header/Header'));

const NotFoundPage = lazy(() =>
  import('../../pages/NotFoundPage/NotFoundPage')
);

const App = () => {
  return (
    <div className={css.container}>
      <Toaster position="top-right" />
      <Header />
      <Suspense fallback={<div className={css.loader}></div>}>
        <Routes>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
