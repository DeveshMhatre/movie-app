import React from 'react';

import { Link } from 'react-router-dom';

import { ReactComponent as Logo } from '../images/logo.svg';
import { ReactComponent as Back } from '../images/back.svg';

const Header = props => {
  if (props.isSearch) {
    return (
      <header className="header">
        <Logo className="header__logo" />
      </header>
    );
  }

  else {
    return (
      <header className="header-back">
        <Link to='/'>
          <Back className="header-back__back" />
        </Link>
        <Logo className="header-back__logo" />
        <div className="header-bakc__blank"></div>
      </header>
    );
  }
};

export default Header;
