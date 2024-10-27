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
    { name: engine, class: 'fill-icon', icon: 'icon-fuel' },
    {
      name: 'Kitchen',
      class: 'fill-icon',
      icon: kitchen ? 'icon-cup-hot' : null,
    },
    { name: 'AC', class: 'fill-icon', icon: AC ? 'icon-wind' : null },
    {
      name: 'Bathroom',
      class: 'fill-icon',
      icon: bathroom ? 'icon-shower' : null,
    },
    { name: 'TV', class: 'fill-icon', icon: TV ? 'icon-tv' : null },
    { name: 'Radio', class: 'fill-icon', icon: radio ? 'icon-radio' : null },
    {
      name: 'Refrigerator',
      class: 'fill-icon',
      icon: refrigerator ? 'icon-fridge' : null,
    },
    {
      name: 'Microwave',
      class: 'stroke-icon',
      icon: microwave ? 'icon-microwave' : null,
    },
    {
      name: 'Gas',
      class: 'stroke-icon',
      icon: gas ? 'icon-gas-stove' : null,
    },
    {
      name: 'Water',
      class: 'stroke-icon',
      icon: water ? 'icon-water' : null,
    },
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
                className={css[feature.class]}
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
