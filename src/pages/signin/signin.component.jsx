import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import FormInput from '../../components/form-input/form-input.component'
import CustomButton from '../../components/custom-button/custom-button.component';
import { auth, signInWithGoogle } from '../../firebase/firebase.utils'

import "./signin.styles.scss"

const SignIn = () => {

  const [values, setValues] = useState({
    email: "",
    password: ""
  })

  const handleSubmit = async e => {
    e.preventDefault();

    const { email, password } = values;

    try {
      await auth.signInWithEmailAndPassword(email, password)
      setValues({
        email: "",
        password: ""
      })

    } catch(error) {
      console.error(error)
    }
  }

  const handleChange = e => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value
    });
  };

  return ( 
    <div className='sign-in'>
      <h1>Login to your account</h1>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>

        <FormInput 
          name="email" 
          type="email" 
          value={values.email} 
          handleChange={handleChange}
          label="Email"
          required />

        <FormInput 
          name="password" 
          type="password" 
          value={values.password} 
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
