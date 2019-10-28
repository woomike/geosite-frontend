import React from 'react';
import './App.css';
import GeositeNavBar from './components/GeositeNavBar'
import Navigation from './components/Navigation'
import Map from './components/Map'

function App() {
  return (
    <div className="App">
      <GeositeNavBar />
      <div className="main-container">
        <Map />
      </div>
    </div>
  );
}

export default App
