// Packages
import React from 'react'
// Styles
import './App.css';
// Components
import Navbar from './components/navbar';
import CardBody from './components/cardbody';

function App() {

  return (
    <div className="App">
      <Navbar />
      <div className='body-container'>
        <CardBody>
          Add Cards Here
        </CardBody>
      </div>
    </div>
  );
}

export default App;
