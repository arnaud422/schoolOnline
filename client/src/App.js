import React from 'react'
import Routes from './components/routes/'
import {BrowserRouter} from 'react-router-dom'

function App() {
  return (  
    <BrowserRouter>
      <Routes/>
    </BrowserRouter>
  );
}

export default App;
