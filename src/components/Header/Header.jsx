import css from './Header.module.css';

import Logo from '../../assets/logo.svg';

import Navigation from '../../components/Navigation/Navigation';

const Header = () => {
  return (
    <header>
      <div className={css.container}>
        <img
          className={css.logo}
          src={Logo}
          alt="TravelTrucks Logo"
          width="136"
          height="15"
        />
        <Navigation />
      </div>
    </header>
  );
};

export default Header;
