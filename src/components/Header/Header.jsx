import css from './Header.module.css';

import Logo from '../../assets/logo.svg';

import Navigation from '../../components/Navigation/Navigation';

const Header = () => {
  return (
    <header className={css.header}>
      <img
        className={css.logo}
        src={Logo}
        alt="TravelTrucks Logo"
        width="136"
        height="15"
      />
      <Navigation />
    </header>
  );
};

export default Header;
