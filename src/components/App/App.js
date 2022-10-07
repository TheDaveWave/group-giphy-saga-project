import React from 'react';
import { HashRouter as Router, Route, NavLink, Switch } from 'react-router-dom';
import FavoriteView from './FavoriteView/FavoriteView';
import SearchView from './SearchView/SearchView';

function App(props) {
  return (
    <div>
      <h1>Giphy Search!</h1>
      
      <Router>
        <div id='nav'>
          <NavLink to='/'>Search</NavLink>{' '}
          <NavLink to='/favs'>Favorites</NavLink>
        </div>
        <Switch>
          <Route path='/favs'>
            <FavoriteView />
          </Route>
          <Route path='/'>
            <SearchView />
          </Route>
        </Switch>
      </Router> 
    </div>
  );
}

export default App;
