import css from './App.module.css';

import { lazy, Suspense, Fragment } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

import Header from '../Header/Header';
import Loader from '../Loader/Loader';

const HomePage = lazy(() => import('../../pages/HomePage/HomePage'));
const CatalogPage = lazy(() => import('../../pages/CatalogPage/CatalogPage'));
const NotFoundPage = lazy(() =>
  import('../../pages/NotFoundPage/NotFoundPage')
);

const App = () => {
  return (
    <Fragment>
      <Toaster position="top-right" />
      <Header />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/catalog" element={<CatalogPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </Fragment>
  );
};

export default App;
