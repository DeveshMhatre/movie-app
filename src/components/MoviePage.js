import React from 'react';

import { useEffect, useState } from 'react';

import { useLocation } from 'react-router-dom';

import apiTrigger from '../utils/apiTrigger';

import Header from './Header';

const MoviePage = props => {
  const [isLoading, setIsLoading] = useState(true);
  const [movieData, setMovieData] = useState(null);

  const location = useLocation();

  useEffect(() => {

    const fetchData = async () => {
      const data = await apiTrigger(location.state.query);
      if (data.Response === 'True') {
        setMovieData(data);
        setIsLoading(false);
      }
      else {
        props.history.push('/movie-not-found');
      }
    }

    fetchData()
  }, [props.history, location]);

  if (isLoading) {
    return (
      <>
        <Header isSearch={false} />
        <article className="results-loading">
          <div className="results-loading__spinner"></div>
        </article>
      </>
    );
  }
  else {
    return (
      <>
        <Header isSearch={false} />
        <article className="results">
          <h1>{movieData.Title}</h1>
        </article>
      </>
    )
  }
};

export default MoviePage;
