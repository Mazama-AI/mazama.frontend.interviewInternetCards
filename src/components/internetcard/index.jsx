import './InternetCard.css'; 
import React from 'react';

const InternetCard = ({index, item}) => {
  return (
    <div className="internet-card-container" key={index}>
      Internet Card
    </div>
  );
};

export default InternetCard;