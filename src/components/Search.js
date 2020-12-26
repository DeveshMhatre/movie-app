import React from 'react';

import { useState } from 'react';

import Header from './Header';

import { ReactComponent as Popcorn } from '../images/popcorn.svg';
import { ReactComponent as Play } from '../images/play.svg';
import { ReactComponent as SearchBtn } from '../images/search.svg';

const Search = props => {
  const [query, setQuery] = useState('');


  // Update query state as new input is received from user
  const queryOnChange = e => {
    setQuery(e.target.value);
  }

  // Trigger this function when submit button is clicked
  const btnOnClick = async e => {
    e.preventDefault();

    // To keep the function from unnecessarily running if input field is empty
    if (query !== '') {
      // So the MoviePage component receives the user query
      props.history.push({
        pathname: '/movie-found',
        state: { query: query }
      });
      // Clear the input field at the end
      setQuery('');
    }
  }

  return (
    <>
      <Header
        isSearch={true} />

      <article
        className="search">
        <Play
          className="search__play" />

        <form
          className="search__form">
          <input
            type="text"
            className="search__form--text"
            value={query}
            onChange={queryOnChange}
            placeholder="Enter title, IMDb ID&hellip;"
            autoFocus />

          <button
            type="submit"
            className="search__form--btn"
            onClick={btnOnClick}>
            <SearchBtn />
          </button>
        </form>

        <Popcorn
          className="search__popcorn" />
      </article>
    </>
  );
};

export default Search;
