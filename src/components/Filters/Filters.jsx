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

import Icon from '../Icon/Icon';

const Filters = () => {
  const features = useSelector(selectFeatures);
  const vehicleTypes = useSelector(selectVehicleTypes);
  const selectedFeatures = useSelector(selectChosenFeatures);
  const selectedVehicleType = useSelector(selectChosenVehicleType);

  const dispatch = useDispatch();

  const handleFeatureClick = featureName => {
    dispatch(toggleFeature(featureName));
  };

  const handleVehicleTypeClick = typeName => {
    dispatch(toggleVehicleType(typeName));
  };

  return (
    <div className={css.container}>
      <p className={css.label}>Filters</p>
      <h3 className={css.header}>Vehicle Equipment</h3>
      <ul className={css.filters}>
        {features.map(feature => (
          <li
            key={features.indexOf(feature)}
            onClick={() => handleFeatureClick(feature.name)}
            className={`${css.filter} ${
              selectedFeatures.includes(feature.name) ? css.selected : ''
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
              selectedVehicleType === vehicleType.name ? css.selected : ''
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
