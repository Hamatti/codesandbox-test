import React from 'react';

const cardStyle = {
  width: '300px',
};
const Card = ({ url, handleClick }) => {
  return (
    <img
      src={url}
      onClick={e => handleClick(e)}
      style={cardStyle}
    />
  );
};

export default Card;
