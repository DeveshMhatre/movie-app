import React from 'react';

import Header from './Header';

const NotFound = () => {
  return (
    <>
      <Header isSearch={false} />
      <article className="not-found">
        <h1>Not found</h1>
      </article>
    </>
  );
}

export default NotFound;
