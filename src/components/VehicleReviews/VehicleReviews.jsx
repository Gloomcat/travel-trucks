import css from './VehicleReviews.module.css';

import Icon from '../Icon/Icon';

const VehicleReviews = ({ reviews, id }) => {
  return (
    <ul className={css.reviews} id={id}>
      {reviews.map(review => (
        <li key={review.reviewer_name} className={css.review}>
          <div className={css.container}>
            <div className={css['logo-container']}>
              <h2 className={css.logo}>{review.reviewer_name[0]}</h2>
            </div>
            <div className={css.header}>
              <h3 className={css.name}>{review.reviewer_name}</h3>
              <ul className={css.rating}>
                {[...Array(5)].map((_, index) => (
                  <li key={index}>
                    <Icon
                      className={
                        index + 1 < review.reviewer_rating
                          ? css['fill-star']
                          : css['empty-star']
                      }
                      name="icon-star"
                      width={16}
                      height={16}
                    />
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <p className={css.comment}>{review.comment}</p>
        </li>
      ))}
    </ul>
  );
};

export default VehicleReviews;
