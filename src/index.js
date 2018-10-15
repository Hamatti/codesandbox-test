import React from 'react';
import ReactDOM from 'react-dom';

import Deck from './components/Deck';
import './styles.css';

const cards = [
  {
    url: 'https://placekitten.com/200/300',
  },
  {
    url: 'https://placekitten.com/400/300',
  },
  {
    url: 'https://placekitten.com/400/800',
  },
];

function App() {
  return (
    <div className="App">
      <Deck cards={cards} />
    </div>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
