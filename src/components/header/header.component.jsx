import React from 'react';
import { Link } from 'react-router-dom'
import { auth } from '../../firebase/firebase.utils'
import { connect } from 'react-redux'

import LogoFema from '../../assets/fema-logo.png'

import './header.styles.scss'



const Header = ({ currentUser }) => ( 
  <div className='header'>
    <div className="logo">
      <Link to="/" className='logo-container'>
        <img src={LogoFema} className="logo" alt="Fema Shop logo" />
      </Link> 
    </div>
    <div className="options">
      <span className="new">
      <Link to="/" className='new-link'>New</Link>
      </span>
      <Link to="/Shop" className='header-link'>Men's</Link>
      <Link to="/" className='header-link'>Women's</Link>
      <Link to="/" className='header-link'>Accessories</Link>
      {
        currentUser ? 
        <div className='header-link' onClick={() => auth.signOut()}>Sign Out</div>
        :
        <Link className='header-link' to='/signIn'>Sign In</Link>
      }
    </div>
  </div>
);


const mapStateToProps = state => ({
  currentUser: state.user.currentUser
})


export default connect(mapStateToProps)(Header);
