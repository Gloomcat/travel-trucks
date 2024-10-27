import css from './LoadMore.module.css';

import { useDispatch } from 'react-redux';

import { incrementCurrentPage } from '../../redux/paginationSlice';

const LoadMore = () => {
  const dispatch = useDispatch();

  return (
    <>
      <button
        type="button"
        className={css['load-more-button']}
        onClick={() => {
          dispatch(incrementCurrentPage());
        }}
      >
        Load More
      </button>
    </>
  );
};

export default LoadMore;
