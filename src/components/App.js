import React from 'react';

import { useState } from 'react';

import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

import Search from './Search';
import MoviePage from './MoviePage';
import NotFound from './NotFound';

const App = () => {
  const [query, setQuery] = useState('');

  return (
    <main
      id="app">
      <Router>

        <Route
          path="/search-results">
          <MoviePage />
        </Route>

        <Route
          path="/not-found">
          <NotFound />
        </Route>

        <Route
          exact path="/">
          <Search 
            query={query}
            onChange={setQuery} />
        </Route>

      </Router>
    </main>
  );
}

export default App;
