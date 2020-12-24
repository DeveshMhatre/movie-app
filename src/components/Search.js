import React from 'react';

import Header from './Header';

import { ReactComponent as Popcorn } from '../images/popcorn.svg';
import { ReactComponent as Play } from '../images/play.svg';
import { ReactComponent as SearchBtn } from '../images/search.svg';

const Search = props => {

  const queryOnChange = () => {
    let query = document.querySelector('.search__form--text').value;
    props.onChange(query);
  }

  const btnOnClick = e => {
    e.preventDefault();
    if (props.query !== '') {
      alert(props.query);
      props.onChange('');
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
            value={props.query}
            onChange={queryOnChange}
            placeholder="Enter title, IMDb ID&hellip;"/>
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
