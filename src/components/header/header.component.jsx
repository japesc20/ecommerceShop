import React from 'react';
import { Link } from 'react-router-dom'

import { ReactComponent as Logo } from '../../assets/crown.svg'
import LogoFema from '../../assets/fema-logo.png'
import './header.styles.scss'

const Header = () => ( 
  <div className='header'>
    <Link to="/" className='logo-container'>
      <img src={LogoFema} className="logo" />
    </Link> 
    <div className="options">
      <Link to="/Shop" className='header-link'>Shop</Link>
      <Link to="/" className='header-link'>Contact</Link>
      <Link to="/Signin" className='header-link'>Sign In</Link>
    </div>
  </div>
);

export default Header;
