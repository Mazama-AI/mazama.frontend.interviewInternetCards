// src/components/Card.js

import React from 'react';
import './CardBody.css';

const CardBody = ({ children }) => {
  return (
    <div className="card">
      {children}
    </div>
  );
};

export default CardBody;
