import css from './VehicleDetails.module.css';

import FeatureList from '../FeatureList/FeatureList';

const VehicleDetails = ({ camper, id }) => {
  const correctFormValue = value => {
    if (value === 'alcove') {
      return 'Alcove';
    } else if (value == 'panelTruck') {
      return 'Panel truck';
    } else if (value == 'fullyIntegrated') {
      return 'Fully integrated';
    }
  };

  const correctShapeValue = value => {
    return value.replace('m', ' m').replace('l', ' l');
  };

  // Prepare details based on available properties
  const details = [
    {
      name: 'Form',
      value: camper.form ? correctFormValue(camper.form) : null,
    },
    {
      name: 'Length',
      value: camper.length ? correctShapeValue(camper.length) : null,
    },
    {
      name: 'Width',
      value: camper.width ? correctShapeValue(camper.width) : null,
    },
    {
      name: 'Height',
      value: camper.height ? correctShapeValue(camper.height) : null,
    },
    {
      name: 'Tank',
      value: camper.tank ? correctShapeValue(camper.tank) : null,
    },
    {
      name: 'Consumption',
      value: camper.consumption ? camper.consumption : null,
    },
  ].filter(detail => detail.value); // Filter out properties without value

  return (
    <div className={css.container} id={id}>
      <FeatureList camper={camper} />
      <div>
        <h3 className={css.header}>Vehicle Details</h3>
        <ul className={css.details}>
          {details.map(detail => (
            <li key={detail.name} className={css.detail}>
              <p>{detail.name}</p>
              <p>{detail.value}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default VehicleDetails;
