import css from './Filters.module.css';

import { useDispatch, useSelector } from 'react-redux';

import {
  toggleFeature,
  toggleVehicleType,
  selectFeatures,
  selectVehicleTypes,
  selectChosenFeatures,
  selectChosenVehicleType,
} from '../../redux/filtersSlice';
import {
  toggleFavoritesEnabled,
  selectFavoritesEnabled,
} from '../../redux/favoritesSlice';

import Icon from '../Icon/Icon';

const Filters = () => {
  const features = useSelector(selectFeatures);
  const vehicleTypes = useSelector(selectVehicleTypes);
  const selectedFeatures = useSelector(selectChosenFeatures);
  const selectedVehicleType = useSelector(selectChosenVehicleType);

  const isFavoritesEnabled = useSelector(selectFavoritesEnabled);

  const dispatch = useDispatch();

  const handleFeatureClick = featureName => {
    if (!isFavoritesEnabled) {
      dispatch(toggleFeature(featureName));
    }
  };

  const handleVehicleTypeClick = typeName => {
    if (!isFavoritesEnabled) {
      dispatch(toggleVehicleType(typeName));
    }
  };

  const handleFavoritesClick = () => {
    dispatch(toggleFavoritesEnabled());
  };

  return (
    <div className={css.container}>
      <p className={css.label}>Filters</p>
      <h3 className={css.header}>Favorites</h3>
      <div
        onClick={() => handleFavoritesClick()}
        className={`${css.filter} ${css.favorites} ${
          isFavoritesEnabled ? css.selected : ''
        }`}
      >
        <Icon className={css.icon} name={'icon-heart'} width={32} height={32} />
      </div>
      <h3 className={css.header}>Vehicle Equipment</h3>
      <ul className={css.filters}>
        {features.map(feature => (
          <li
            key={features.indexOf(feature)}
            onClick={() => handleFeatureClick(feature.name)}
            className={`${css.filter} ${
              selectedFeatures.includes(feature.name) && !isFavoritesEnabled
                ? css.selected
                : ''
            }`}
          >
            <Icon
              className={css.icon}
              name={feature.icon}
              width={32}
              height={32}
            />
            <p>{feature.name}</p>
          </li>
        ))}
      </ul>
      <h3 className={css.header}>Vehicle type</h3>
      <ul className={css.filters}>
        {vehicleTypes.map(vehicleType => (
          <li
            key={vehicleTypes.indexOf(vehicleType)}
            onClick={() => handleVehicleTypeClick(vehicleType.name)}
            className={`${css.filter} ${
              selectedVehicleType === vehicleType.name && !isFavoritesEnabled
                ? css.selected
                : ''
            }`}
          >
            <Icon
              className={css.icon}
              name={vehicleType.icon}
              width={32}
              height={32}
            />
            <p>{vehicleType.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Filters;
