import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import Search from './Search';
import MoviePage from './MoviePage';
import NotFound from './NotFound';

const App = () => {
  return (
    <main id="app">
      <Router>

        <Route path="/search-results">
          <MoviePage />
        </Route>

        <Route path="/not-found">
          <NotFound />
        </Route>

        <Route exact path="/">
          <Search />
        </Route>

      </Router>
    </main>
  );
}

export default App;
