import css from './CamperDetailsPage.module.css';

import { useEffect, useState } from 'react';

import { useParams } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';

import { fetchCamperById } from '../../redux/campersOperations';
import { selectActiveCamper, selectError } from '../../redux/campersSlice';

import Icon from '../../components/Icon/Icon';
import VehicleDetails from '../../components/VehicleDetails/VehicleDetails';
import VehicleReviews from '../../components/VehicleReviews/VehicleReviews';
import ReserveForm from '../../components/ReserveFrom/ReserveForm';

import toast from 'react-hot-toast';

const CamperDetailsPage = () => {
  const { id } = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    if (!id) {
      return;
    }
    dispatch(fetchCamperById(id));
  }, [dispatch, id]);

  const camper = useSelector(selectActiveCamper);
  const error = useSelector(selectError);

  useEffect(() => {
    if (!error) {
      return;
    }

    toast.error(error);
  }, [error]);

  const [detailsActive, setDetailsActive] = useState(true);

  return (
    camper && (
      <main>
        <section>
          <div className={css.container}>
            <div className={css.header}>
              <h2 className={css.title}>{camper.name}</h2>
              <div className={css.meta}>
                <div className={css.rating}>
                  <Icon
                    className={css['rating-icon']}
                    name="icon-star"
                    width={16}
                    height={16}
                  />
                  <a
                    className={css['meta-link']}
                    href="#reviews"
                    onClick={() => {
                      setDetailsActive(false);
                    }}
                  >
                    {camper.rating} ({camper.reviews && camper.reviews.length}{' '}
                    Reviews)
                  </a>
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
              <p className={css.price}>
                &#8364;{camper.price && camper.price.toFixed(2)}
              </p>
            </div>
            <ul className={css.gallery}>
              {camper.gallery &&
                camper.gallery.map(item => (
                  <li key={camper.gallery.indexOf(item)}>
                    <img
                      src={item.thumb}
                      alt={camper.name}
                      className={css.image}
                    />
                  </li>
                ))}
            </ul>
            <p className={css.description}>{camper.description}</p>
            <ul className={css.info}>
              <li>
                <a
                  href="#details"
                  className={`${css['info-link']} ${
                    detailsActive ? css.selected : ''
                  }`}
                  onClick={() => {
                    setDetailsActive(true);
                  }}
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="#reviews"
                  className={`${css['info-link']} ${
                    !detailsActive ? css.selected : ''
                  }`}
                  onClick={() => {
                    setDetailsActive(false);
                  }}
                >
                  Reviews
                </a>
              </li>
            </ul>
            <div className={css['info-container']}>
              {detailsActive ? (
                <VehicleDetails camper={camper} id={'details'} />
              ) : (
                <VehicleReviews reviews={camper.reviews} id={'reviews'} />
              )}
              <ReserveForm camperName={camper.name} />
            </div>
          </div>
        </section>
      </main>
    )
  );
};

export default CamperDetailsPage;
