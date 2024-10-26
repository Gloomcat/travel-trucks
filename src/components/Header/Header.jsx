import css from './Header.module.css';

import Icon from '../Icon/Icon';

import Navigation from '../Navigation/Navigation';

const Header = () => {
  return (
    <header>
      <div className={css.container}>
        <Icon className={css.logo} name={'icon-logo'} width={136} height={15} />
        <Navigation />
      </div>
    </header>
  );
};

export default Header;
