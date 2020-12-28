import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import Search from './Search';
import MoviePage from './MoviePage';
import NotFound from './NotFound';

const App = () => {

  return (
    <main id="app">
      <Router
        basename={process.env.PUBLIC_URL}>

        <Switch>
          <Route
            path="/movie-found"
            component={MoviePage} />

          <Route
            path="/movie-not-found"
            component={NotFound} />

          <Route
            exact path="/"
            component={Search} />
        </Switch>

      </Router>
    </main>
  );
}

export default App;
