import React from 'react';

import Header from './Header';

import { ReactComponent as FourOhFour } from '../images/404.svg';

const NotFound = () => {
  return (
    <>
      <Header isSearch={false} />
      <article className="not-found">
        <p className="not-found__msg">
          Could not find the movie you are looking for&hellip;
        </p>
        <FourOhFour className="not-found__img" />
      </article>
    </>
  );
}

export default NotFound;
