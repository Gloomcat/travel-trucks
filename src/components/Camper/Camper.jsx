import css from './Camper.module.css';

import Icon from '../Icon/Icon';

const Camper = ({ camperData }) => {
  const {
    name,
    price,
    rating,
    location,
    description,
    transmission,
    engine,
    AC,
    bathroom,
    kitchen,
    TV,
    radio,
    refrigerator,
    microwave,
    gas,
    water,
    gallery,
    reviews,
  } = camperData;

  // Prepare features based on available properties
  const features = [
    {
      name: 'Automatic',
      icon: transmission === 'automatic' ? 'icon-diagram' : null,
    },
    { name: engine, icon: 'icon-fuel' },
    { name: 'Kitchen', icon: kitchen ? 'icon-cup-hot' : null },
    { name: 'AC', icon: AC ? 'icon-wind' : null },
    { name: 'Bathroom', icon: bathroom ? 'icon-shower' : null },
    { name: 'TV', icon: TV ? 'icon-tv' : null },
    { name: 'Radio', icon: radio ? 'icon-radio' : null },
    { name: 'Refrigerator', icon: refrigerator ? 'icon-fridge' : null },
    { name: 'Microwave', icon: microwave ? 'icon-microwave' : null },
    { name: 'Gas', icon: gas ? 'icon-gas-stove' : null },
    { name: 'Water', icon: water ? 'icon-water' : null },
  ].filter(feature => feature.icon); // Filter out features without icons

  return (
    <div className={css.card}>
      <img src={gallery[0].thumb} alt={name} className={css.image} />
      <div className={css.content}>
        <div>
          <div className={css.header}>
            <h2 className={css.title}>{name}</h2>
            <p className={css.price}>&#8364;{price.toFixed(2)}</p>
            <Icon
              className={css['favorite-icon']}
              name="icon-heart"
              width={24}
              height={24}
            />
          </div>
          <div className={css.meta}>
            <div className={css.rating}>
              <Icon
                className={css['rating-icon']}
                name="icon-star"
                width={16}
                height={16}
              />
              <p className={css['meta-text']}>
                {rating} ({reviews.length} Reviews)
              </p>
            </div>
            <div className={css.location}>
              <Icon
                className={css['location-icon']}
                name="icon-location"
                width={16}
                height={16}
              />
              <p className={css['meta-text']}>{location}</p>
            </div>
          </div>
        </div>
        <p className={css.description}>{description}</p>
        <ul className={css.features}>
          {features.map(feature => (
            <li key={feature.name} className={css.feature}>
              <Icon
                className={css['feature-icon']}
                name={feature.icon}
                width={16}
                height={16}
              />
              <p>{feature.name}</p>
            </li>
          ))}
        </ul>
        <button className={css.button}>Show more</button>
      </div>
    </div>
  );
};

export default Camper;
