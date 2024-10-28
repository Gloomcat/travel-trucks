import css from './CatalogPage.module.css';

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchCampers, CAMPERS_LIMIT } from '../../redux/campersOperations';
import {
  resetCampers,
  selectIsLoading,
  selectTotal,
} from '../../redux/campersSlice';
import {
  resetPagination,
  selectCurrentPage,
} from '../../redux/paginationSlice';
import { selectLocation } from '../../redux/locationSlice';
import { selectChosenFeatures } from '../../redux/filtersSlice';
import { selectChosenVehicleType } from '../../redux/filtersSlice';
import { selectFavoritesEnabled } from '../../redux/favoritesSlice';

import CamperList from '../../components/CamperList/CamperList';
import LoadMoreButton from '../../components/LoadMoreButton/LoadMoreButton';
import Loader from '../../components/Loader/Loader';
import Location from '../../components/Location/Location';
import Filters from '../../components/Filters/Filters';

const CatalogPage = () => {
  const loading = useSelector(selectIsLoading);
  const total = useSelector(selectTotal);

  const current = useSelector(selectCurrentPage);

  const location = useSelector(selectLocation);

  const selectedFeatures = useSelector(selectChosenFeatures);
  const selectedVehicleType = useSelector(selectChosenVehicleType);
  const isFavoritesEnabled = useSelector(selectFavoritesEnabled);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(resetCampers());
    dispatch(resetPagination());
  }, [
    dispatch,
    location,
    selectedFeatures,
    selectedVehicleType,
    isFavoritesEnabled,
  ]);

  useEffect(() => {
    if (isFavoritesEnabled) {
      dispatch(fetchCampers({}));
    } else {
      dispatch(
        fetchCampers({
          page: current,
          limit: CAMPERS_LIMIT,
          location: location,
          features: selectedFeatures,
          vehicle: selectedVehicleType,
        })
      );
    }
  }, [
    dispatch,
    current,
    location,
    selectedFeatures,
    selectedVehicleType,
    isFavoritesEnabled,
  ]);

  return (
    <main>
      <section>
        <div className={css.container}>
          <div className={css.params}>
            <Location />
            <Filters />
          </div>
          <div className={css.campers}>
            <CamperList />
            {loading && <Loader />}
            {current * CAMPERS_LIMIT < total &&
              !isFavoritesEnabled &&
              !loading && <LoadMoreButton />}
          </div>
        </div>
      </section>
    </main>
  );
};

export default CatalogPage;
