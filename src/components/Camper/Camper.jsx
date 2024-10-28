import css from './Camper.module.css';

import { Link, useLocation } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';

import { toggleFavorite, selectFavorites } from '../../redux/favoritesSlice';

import FeatureList from '../FeatureList/FeatureList';
import Icon from '../Icon/Icon';
import Button from '../Button/Button';

const Camper = ({ camper }) => {
  const favorites = useSelector(selectFavorites);

  const dispatch = useDispatch();
  const pageLocation = useLocation();

  const handleFavoriteClick = () => {
    dispatch(toggleFavorite(camper.id));
  };

  return (
    <div className={css.card}>
      <img
        src={camper.gallery[0].thumb}
        alt={camper.name}
        className={css.image}
      />
      <div className={css.content}>
        <div>
          <div className={css.header}>
            <h2 className={css.title}>{camper.name}</h2>
            <p className={css.price}>&#8364;{camper.price.toFixed(2)}</p>
            <button
              className={css['favorite-button']}
              type="button"
              onClick={() => {
                handleFavoriteClick();
              }}
            >
              <Icon
                className={`${css['favorite-icon']} ${
                  favorites.includes(camper.id) ? css.selected : ''
                }`}
                name="icon-heart"
                width={24}
                height={24}
              />
            </button>
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
                {camper.rating} ({camper.reviews.length} Reviews)
              </p>
            </div>
            <div className={css.location}>
              <Icon
                className={css['location-icon']}
                name="icon-location"
                width={16}
                height={16}
              />
              <p className={css['meta-text']}>{camper.location}</p>
            </div>
          </div>
        </div>
        <p className={css.description}>{camper.description}</p>
        <FeatureList camper={camper} />
        <Link to={`/catalog/${camper.id}`} state={pageLocation}>
          <Button text={'Show more'} />
        </Link>
      </div>
    </div>
  );
};

export default Camper;
