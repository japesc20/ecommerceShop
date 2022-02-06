import React from 'react';
import { Link } from 'react-router-dom'
import { auth } from '../../firebase/firebase.utils'

import LogoFema from '../../assets/fema-logo.png'

import './header.styles.scss'



const Header = ({ currentUser }) => ( 
  <div className='header'>
    <Link to="/" className='logo-container'>
      <img src={LogoFema} className="logo" />
    </Link> 
    <div className="options">
      <Link to="/Shop" className='header-link'>Shop</Link>
      <Link to="/" className='header-link'>Contact</Link>
      {
        currentUser ? 
        <div className='header-link' onClick={() => auth.signOut()}>Sign Out</div>
        :
        <Link className='header-link' to='/signIn'>Sign In</Link>
      }
    </div>
  </div>
);

export default Header;
