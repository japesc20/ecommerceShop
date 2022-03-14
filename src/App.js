import React, { useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect';

import { selectCurrentUser } from './redux/user/user.selectors';
import { checkUserSession } from './redux/user/user.actions';

import Header from './components/header/header.component'
import HomePage from './pages/homepage.components'
import ShopPage from './pages/shop/shop.component'
import SignIn from './pages/signin/signin.component';
import Register from './pages/register/register.component';


import './App.css';


const App = ({ checkUserSession, currentUser }) => {
  
  useEffect(() => {
    checkUserSession();
  }, [checkUserSession])



  return (
    <div className='app-container'>
      <Header />
      <Routes>
        <Route exact path='/' element={<HomePage />} />
        <Route exact path='/shop' element={<ShopPage />} />
        <Route exact path='/signIn' element={<SignIn currentUser={currentUser} />} />
        <Route exact path='/register' element={<Register />} />
      </Routes>
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
})

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
})

export default connect(
  mapStateToProps, 
  mapDispatchToProps
  )(App);
