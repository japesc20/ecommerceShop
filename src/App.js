import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/header/header.component'
import HomePage from './pages/homepage.components'
import ShopPage from './pages/shop/shop.component'
import SignIn from './pages/signin/signin.component';
import Register from './pages/register/register.component';
import { auth } from './firebase/firebase.utils'

import './App.css';


function App() {

  const [state, setState] = useState({
    currentUser: null
  })

  let unsubsribeFromAuth = null;

  useEffect(() => {
    unsubsribeFromAuth = auth.onAuthStateChanged(user => {
      setState({ currentUser: user });

      // console.log(user);

      return () => {
        unsubsribeFromAuth();
      };
    });
  }, [])

  console.log(state.currentUser)


  return (
    <div className='app-container'>
      <Header currentUser={state.currentUser} />
      <Routes>
        <Route exact path='/' element={<HomePage />} />
        <Route exact path='/shop' element={<ShopPage />} />
        <Route exact path='/signIn' element={<SignIn />} />
        <Route exact path='/register' element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
