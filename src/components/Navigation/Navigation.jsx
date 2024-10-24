import css from './Navigation.module.css';
import clsx from 'clsx';

import { NavLink } from 'react-router-dom';

const generateActiveClass = ({ isActive }) => {
  return clsx(css['nav-link'], isActive && css['active']);
};

const Navigation = () => {
  return (
    <nav className={css.nav}>
      <NavLink to="/" className={generateActiveClass}>
        Home
      </NavLink>
      <NavLink to="/catalog" className={generateActiveClass}>
        Catalog
      </NavLink>
    </nav>
  );
};

export default Navigation;
