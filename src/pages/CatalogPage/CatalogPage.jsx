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
import { selectLocation } from '../../redux/locationFilterSlice';

import CamperList from '../../components/CamperList/CamperList';
import LoadMore from '../../components/LoadMore/LoadMore';
import Loader from '../../components/Loader/Loader';
import Location from '../../components/Location/Location';

const CatalogPage = () => {
  const loading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const total = useSelector(selectTotal);

  const current = useSelector(selectCurrentPage);

  const location = useSelector(selectLocation);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(resetCampers());
    dispatch(resetPagination());
  }, [dispatch, location]);

  useEffect(() => {
    dispatch(
      fetchCampers({
        page: current,
        location: location,
      })
    );
  }, [dispatch, current, location]);

  return (
    <main>
      <section>
        <div className={css.container}>
          <div className={css.params}>
            <Location />
          </div>
          <div className={css.campers}>
            {error && (
              <h2 className={css.empty}>
                There is no campers for selected filters or location.
              </h2>
            )}
            <CamperList />
            {loading && <Loader />}
            {current * CAMPERS_LIMIT < total && !loading && <LoadMore />}
          </div>
        </div>
      </section>
    </main>
  );
};

export default CatalogPage;
