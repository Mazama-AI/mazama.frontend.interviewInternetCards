import React, {useEffect, useState} from 'react';
import { getDataFromAPI } from './bin/get_all_items';
import './App.css';
import Navbar from './components/navbar';
import CardBody from './components/cardbody';

function App() {

  useEffect(() => {
    const getData = async () => {
      const data = await getDataFromAPI();
      console.log(data);
    }
    getData();
  }, [])

  return (
    <div className="App">
      <Navbar />
      <CardBody>
        <h2>Internet Offers</h2>
        <p>Get the best internet offers here</p>

      </CardBody>
    </div>
  );
}

export default App;
