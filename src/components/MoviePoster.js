import React from 'react';

import { ReactComponent as Poster } from '../images/poster.svg';

const MoviePoster = props => {
  if (props.poster !== 'N/A') {
    return (
      <img
        src={props.poster}
        alt={`Poster for the movie ${props.Title}`}
        className="results__poster" />
    );
  }
  else {
    return (<Poster className="results__poster" />);
  }
}

export default MoviePoster;
