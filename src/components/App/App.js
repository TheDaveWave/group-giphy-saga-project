import React from 'react';
import FavoriteView from './FavoriteView/FavoriteView';
import SearchView from './SearchView/SearchView';

function App(props) {
  return (
    <div>
      <h1>Giphy Search!</h1>
      <SearchView />
      <FavoriteView />
    </div>
  );
}

export default App;
