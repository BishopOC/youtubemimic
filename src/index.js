import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import API_KEY from '../secret.js';
const destination = document.querySelector('.container');

YTSearch({ key: API_KEY, term: 'surfboards' }, function (data) {
  console.log(data);
});

class App extends Component {
  render() {
    return (
    <div>
      <SearchBar />
    </div>
    );
  }
}

ReactDOM.render(<App />, destination);
