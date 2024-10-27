import css from './Location.module.css';

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getAllCities } from '../../redux/locationFilterOperations';
import {
  setFilter,
  setLocation,
  selectFilteredCities,
  selectFilter,
  selectLocation,
} from '../../redux/locationFilterSlice';

import Icon from '../Icon/Icon';

const Location = () => {
  const cities = useSelector(selectFilteredCities);
  const filter = useSelector(selectFilter);
  const location = useSelector(selectLocation);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCities());
  }, [dispatch]);

  const handleInputChange = event => {
    dispatch(setFilter(event.target.value));
  };

  const handleLocationSelect = loc => {
    dispatch(setLocation(loc));
  };

  return (
    <div className={css.container}>
      <label className={css.label}>Location</label>
      <div className={css.row}>
        <input
          className={css.input}
          type="text"
          value={filter}
          onChange={handleInputChange}
          placeholder={location === '' ? 'City' : location}
        />
        <Icon
          className={css.icon}
          name={'icon-location'}
          width={20}
          height={20}
        />
      </div>
      <ul className={css.dropdown}>
        <li
          key={'Any'}
          onMouseDown={() => handleLocationSelect('')}
          className={css['dropdown-item']}
        >
          ...
        </li>
        {cities.map(city => (
          <li
            key={cities.indexOf(city)}
            onMouseDown={() => handleLocationSelect(`Ukraine, ${city.name}`)}
            className={css['dropdown-item']}
          >
            {city.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Location;
