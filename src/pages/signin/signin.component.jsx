import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import FormInput from '../../components/form-input/form-input.component'
import CustomButton from '../../components/custom-button/custom-button.component';

import { signInWithGoogle } from '../../firebase/firebase.utils'
import { connect } from 'react-redux';

import { googleSignInStart, emailSignInStart } from '../../redux/user/user.actions';

import "./signin.styles.scss"



const SignIn = ({ emailSignInStart, googleSignInStart }) => { // Destructure off this props here (this.props)
  const [userCredentials, setCredentials] = useState({
    email: '', 
    password: ''
  });

  const { email, password } = userCredentials;

  const handleSubmit = async event => {
    event.preventDefault();

    emailSignInStart(email, password);
  };

  const handleChange = event => {
    const { value, name } = event.target;

    setCredentials({...userCredentials, [name]: value });
  };

  return ( 
    <div className='sign-in'>
      <h1>Login to your account</h1>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>

        <FormInput 
          name="email" 
          type="email" 
          value={email} 
          handleChange={handleChange}
          label="Email"
          required />

        <FormInput 
          name="password" 
          type="password" 
          value={password} 
          handleChange={handleChange}
          label="Password"
          required />

          <div className="sign-in-button">
            <CustomButton className="custom-button" type="submit">Sign In</CustomButton>
            <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
              {' '}
              Sign in with Google{' '}
              </CustomButton>
          </div>

      </form>

      <div className="register">
        <h4>Not Registered Yet?</h4>
        <Link to="/register">Register</Link>
      </div>

    </div>
  )};

  const mapDispatchToProps = dispatch => ({
    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart: (email, password) => dispatch(emailSignInStart({email, password}))
  })

export default connect(null, mapDispatchToProps)(SignIn);
