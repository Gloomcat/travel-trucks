import css from './CamperList.module.css';

import { useSelector } from 'react-redux';
import {
  selectFavoriteCampers,
  selectError,
} from '../../redux/campersSlice.js';

import Camper from '../Camper/Camper.jsx';

const CamperList = () => {
  const error = useSelector(selectError);
  const campers = useSelector(selectFavoriteCampers);

  return campers.length === 0 || error ? (
    <h2 className={css.empty}>
      There is no campers for selected filters or location.
    </h2>
  ) : (
    <ul className={css['camper-list']}>
      {campers.map(camper => (
        <li key={camper.id}>
          <Camper camper={camper} />
        </li>
      ))}
    </ul>
  );
};

export default CamperList;
