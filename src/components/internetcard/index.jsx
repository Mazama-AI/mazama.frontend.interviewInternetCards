import './InternetCard.css'; 
import React from 'react';
import { useStore } from '../../context/Store';

const InternetCard = ({index, item}) => {
  const { dispatch } = useStore();
  return (
    <div className="internet-card-container" key={index}>
      <p className='internet-card-badge'>{item.badge}</p>
      <div className='internet-card-title'>
        <h2>{item.speed}</h2>
        <p className='internet-card-price'>${item.price}/mo</p>
      </div>
      <div className='internet-card-description-container'>
        <p>{item.description}</p>
      </div>
      <div className='internet-card-add-on-container'>
        <p>Call in for the below additional offers</p>
        {item['add-ons'].map((addOn, index) => {
          return (
            <div key={index} className='internet-card-add-on-item'>
              <p>{addOn.name}</p>
              <p>${addOn.price}/mo</p>
            </div>
          )
        })}
      </div>
      <button className='internet-card-button' onClick={() => {
        console.log("SELECTED ITEM:", item)
        dispatch({ type: "SELECT_ITEM", payload: item })
      }}>Select Plan</button>
    </div>
  );
};

export default InternetCard;