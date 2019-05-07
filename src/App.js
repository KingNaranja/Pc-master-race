import React from 'react';
import logo from './logo.svg';
import './App.css';
// icons 
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faGamepad, faDesktop, faLaptop, faLaptopCode, faEnvelope, faKey, faUserEdit } from '@fortawesome/free-solid-svg-icons'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function App() {
   // build a fontaweosme icon library
  library.add(fab, faGamepad, faDesktop, faLaptop, faLaptopCode, faEnvelope, faKey, faUserEdit )

  return (
    <div className="App">
      <header className="App-header">
        
      </header>
    </div>
  );
}

export default App;
