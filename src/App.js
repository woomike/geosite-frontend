import React from 'react';
import './App.css';
import Navigation from './components/Navigation'
import Map from './components/Map'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Geosite Frontend
      </header>
      <div className="main-container">
        <Navigation />
        <Map />
      </div>
    </div>
  );
}

export default App
