import css from './App.module.css';

import { lazy, Suspense, Fragment } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

const Header = lazy(() => import('../../components/Header/Header'));

const HomePage = lazy(() => import('../../pages/HomePage/HomePage'));
const NotFoundPage = lazy(() =>
  import('../../pages/NotFoundPage/NotFoundPage')
);

const App = () => {
  return (
    <Fragment>
      <Toaster position="top-right" />
      <Header />
      <Suspense fallback={<div className={css.loader}></div>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </Fragment>
  );
};

export default App;
