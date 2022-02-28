import React, { useState } from 'react';
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils'

import FormInput from '../../components/form-input/form-input.component'
import CustomButton from '../../components/custom-button/custom-button.component'

import "./register.styles.scss"


const Register = () => {

  const [values, setValues] = useState({
    displayName: "",
    email: "",
    password: "",
    confirmPassword: ""
  })



  const handleSubmit = async e => {
    e.preventDefault();
    
    const { displayName, email, password, confirmPassword } = values;

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email, 
        password
        )

      await createUserProfileDocument(user, { displayName })
      setValues({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: ""
      })

    } catch (error) {
      console.error(error)
    }
  }

  const handleChange = e => {
    const { name, value } = e.target;

    setValues({ 
      ...values,
      [name]: value 
      })
  }




  return ( 

    <div className='register'>
      <h2>I don't have an account...</h2>
      <span>Sign up with your email and password</span>

      <form className="register-form" onSubmit={handleSubmit}>
        
        <FormInput 
          type='text' 
          name='displayName' 
          value={values.displayName}
          handleChange={handleChange}
          label='Display Name'
          required
          />
        <FormInput 
          type='email' 
          name='email' 
          value={values.email}
          handleChange={handleChange}
          label='Email'
          required
          />
        <FormInput 
          type='password' 
          name='password' 
          value={values.password}
          handleChange={handleChange}
          label='Password'
          required
          />
        <FormInput 
          type='password' 
          name='confirmPassword' 
          value={values.confirmPassword}
          handleChange={handleChange}
          label='Confirm Password'
          required
          />
          <div className="sign-up-button">
            <CustomButton type='submit'>SIGN UP</CustomButton>
          </div>
      </form>
    </div>
  )};

export default Register;
