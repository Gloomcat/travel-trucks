import css from './NotFoundPage.module.css';

import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <main>
      <section>
        <div className={css.container}>
          <h2 className={css.text}>
            {`The page doesn't exist.`}
            <Link to="/" className={css.link}>
              Return to Home.
            </Link>
          </h2>
        </div>
      </section>
    </main>
  );
};

export default NotFoundPage;
