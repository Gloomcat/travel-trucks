import css from './HomePage.module.css';

import { Link } from 'react-router-dom';

import Button from '../../components/Button/Button';

const HomePage = () => {
  return (
    <main>
      <section className={css.hero}>
        <div className={css.container}>
          <h1 className={css['hero-header-primary']}>Campers of your dreams</h1>
          <h2 className={css['hero-header-secondary']}>
            You can find everything you want in our catalog
          </h2>
          <Link to="/catalog">
            <Button text={'View Now'} />
          </Link>
        </div>
      </section>
    </main>
  );
};

export default HomePage;
