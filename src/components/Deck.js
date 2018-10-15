import React from 'react';

import Card from './Card';

const handleCardClick = e => {
  console.log(`Clicked image ${e.target.src}`);
};

const Deck = ({ cards }) => {
  return (
    <div className="cards">
      {cards.map((card, idx) => (
        <Card
          key={idx}
          handleClick={handleCardClick}
          url={card.url}
        />
      ))}
    </div>
  );
};

export default Deck;
