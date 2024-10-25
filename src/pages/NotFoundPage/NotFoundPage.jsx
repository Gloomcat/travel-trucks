import css from './NotFoundPage.module.css';

import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <main>
      <section>
        <div className={css.container}>
          <h3>
            {`The page doesn't exist.`}
            <Link to="/" className={css.link}>
              Return to Home.
            </Link>
          </h3>
        </div>
      </section>
    </main>
  );
};

export default NotFoundPage;
