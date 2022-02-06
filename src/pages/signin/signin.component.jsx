import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import FormInput from '../../components/form-input/form-input.component'
import CustomButton from '../../components/custom-button/custom-button.component';
import { signInWithGoogle } from '../../firebase/firebase.utils'

import "./signin.styles.scss"

const SignIn = () => {

  const [state, setState] = useState({
    email: "",
    password: ""
  })

const handleChange = e => {
  setState({
    ...state,
    [e.target.name]: e.target.value
  });
};

  return ( 
    <div className='sign-in'>
      <h1>Login to your account</h1>
      <span>Sign in with your email and password</span>

      <form>

        <FormInput 
          name="email" 
          type="email" 
          value={state.email} 
          handleChange={handleChange}
          label="Email"
          required />

        <FormInput 
          name="password" 
          type="password" 
          value={state.password} 
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

export default SignIn;
