import React from 'react';

import { useEffect, useState } from 'react';

import { useLocation } from 'react-router-dom';

import apiTrigger from '../utils/apiTrigger';

import Header from './Header';
import MoviePoster from './MoviePoster';

const MoviePage = props => {
  const [isLoading, setIsLoading] = useState(true);
  const [movieData, setMovieData] = useState(null);

  // For the button link
  const imdbLink = 'https://imdb.com/title/';

  // To get the query passed through history.push in Search
  const location = useLocation();

  useEffect(() => {

    const fetchData = async () => {
      const data = await apiTrigger(location.state.query);
      // If the provided query is either an accurate movie title
      // or a valid IMDb Id, render the info here
      if (data.Response === 'True') {
        setMovieData(data);
        setIsLoading(false);
      }

      // Else redirect to NotFound page
      else {
        props.history.push('/movie-not-found');
      }
    }

    fetchData()
  }, [props.history, location]);

  // If isLoading is true, show the loading spinner
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

  // Else, and if data received is valid, render this
  else {
    return (
      <>
        <Header isSearch={false} />
        <article className="results">
          {/* Using a separate component because there was not workaround to placeholder svg*/}
          <MoviePoster
            poster={movieData.Poster}
            title={movieData.Title} />
          <h3 
            className="results__title">
            {movieData.Title}
          </h3>
          <p
            className="results__summary">
            Summary: {movieData.Plot}
          </p>
          {/* If director prop is N/A, render writer's name */}
          <p
            className="results__dir">
            A film by {movieData.Director !== 'N/A' ? movieData.Director : movieData.Writer}
          </p>
          <p
            className="results__cast">
            Starring: {movieData.Actors}
          </p>
          <a
            className="btn results__btn"
            href={`${imdbLink}${movieData.imdbID}`}
            target="_blank"
            rel="noreferrer">
            Visit IMDb Page
          </a>
        </article>
      </>
    )
  }
};

export default MoviePage;
