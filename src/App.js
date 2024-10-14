// Packages
import React, {useEffect, useState} from 'react'
// Styles
import './App.css';
// Components
import Navbar from './components/navbar';
import CardBody from './components/cardbody';
import InternetCard from './components/internetcard';
// Context
import { StoreProvider } from './context/Store';
// Functions
import getCards from './bin/getCards';

function App() {

  const [cards, setCards] = useState([]);

  useEffect(() => {
    getCards().then(res => {
      setCards(res)
    })
  }, [])

  return (
    <div className="App">
      <StoreProvider>
      <Navbar />
      <div className='body-container'>
        <CardBody>
          {cards.map((card, index) => {
            const item = card.item;
            return <InternetCard index={index} item={item} />
          })}
        </CardBody>
      </div>
      </StoreProvider>
    </div>
  );
}

export default App;
