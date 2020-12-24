import React from 'react';

import Header from './Header';

const MoviePage = () => {
  return (
    <>
      <Header isSearch={false} />
      <article className="results">
        <h1>Results</h1>
      </article>
    </>
  );
};

export default MoviePage;
