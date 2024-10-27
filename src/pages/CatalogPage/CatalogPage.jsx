import css from './CatalogPage.module.css';

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import toast from 'react-hot-toast';

import { fetchCampers, CAMPERS_LIMIT } from '../../redux/campersOperations';
import {
  resetCampers,
  selectIsLoading,
  selectTotal,
  selectError,
} from '../../redux/campersSlice';
import {
  resetPagination,
  selectCurrentPage,
} from '../../redux/paginationSlice';

import CamperList from '../../components/CamperList/CamperList';
import LoadMore from '../../components/LoadMore/LoadMore';
import Loader from '../../components/Loader/Loader';

const CatalogPage = () => {
  const loading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const total = useSelector(selectTotal);
  const current = useSelector(selectCurrentPage);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(resetCampers());
    dispatch(resetPagination());
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchCampers(current));
  }, [dispatch, current]);

  useEffect(() => {
    if (error) {
      toast.error(error);
    }
  }, [error]);

  return (
    <main>
      <section>
        <div className={css.container}>
          <div className={css.campers}>
            <CamperList />
            {loading && current > 1 && <Loader />}
            {current * CAMPERS_LIMIT < total && !loading && <LoadMore />}
          </div>
        </div>
      </section>
    </main>
  );
};

export default CatalogPage;
