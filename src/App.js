import React from 'react';

import './App.css';
import InfoPanel from './Components/InfoPanel/InfoPanel';
import Photo from './Components/InfoPanel/MissionDetails/Photo/Photo';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <div className="App">
      <Photo />
      <InfoPanel />
      <div className="nasa-logo">
        <img src="./assets/images/nasa.png" alt=""/>
      </div>
    </div>
  );
}

export default App;
