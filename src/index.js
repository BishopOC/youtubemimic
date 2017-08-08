import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';

const destination = document.querySelector('.container');
const API_KEY = 'AIzaSyA1pq60s8Z9VQZlDE2Z-I8KEcrvXFYmQyg';

const App = () => <div><SearchBar /></div>;

ReactDOM.render(<App />, destination);
