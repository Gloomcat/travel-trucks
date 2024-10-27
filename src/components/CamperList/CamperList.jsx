import css from './CamperList.module.css';

import { useSelector } from 'react-redux';
import { selectCampers } from '../../redux/campersSlice.js';

import Camper from '../Camper/Camper.jsx';

const CamperList = () => {
  const campers = useSelector(selectCampers);

  return (
    <ul className={css['camper-list']}>
      {campers.map(camper => (
        <li key={camper.id}>
          <Camper camperData={camper} />
        </li>
      ))}
    </ul>
  );
};

export default CamperList;
