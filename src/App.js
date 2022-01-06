import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/homepage.components'

import './App.css';


const HatsPage = () => {
  return (
    <div>
      <h1>Hats Page</h1>
    </div>
  )
}

const JacketsPage = () => {
  return (
    <div>
      <h1>Jackets Page</h1>
    </div>
  )
}


function App() {

  return (
    <div>
      <Routes>
        <Route exact path='/' element={<HomePage/>} />
        <Route exact path='/hats' element={<HatsPage/>} />
        <Route exact path='/jackets' element={<JacketsPage/>} />
      </Routes>
    </div>
  );
}

export default App;
