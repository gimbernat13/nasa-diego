import React from 'react';
import logo from './logo.svg';
import './App.css';
import InfoPanel from './Components/InfoPanel/InfoPanel';
import Photo from './Components/Photo/Photo';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <div className="App">
      <Photo />
      <InfoPanel />
    </div>
  );
}

export default App;
