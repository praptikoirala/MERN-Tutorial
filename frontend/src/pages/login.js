import React, { useState } from 'react'
import { FaSignInAlt } from 'react-icons/fa'

import Form from '../components/form';
import FormGroup from '../components/formgroup';
import Button from '../components/button';


const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleFormSubmit = () => {
    console.log(email, password)
  }

  return (
    <>
      <section className='header-sec'>
        <h1 className='head-large'>
          <FaSignInAlt />
          Login
        </h1>
        <h3 className='head-small'>
          Login and start adding goals
        </h3>
      </section>

      <section className='form-sec'>
        <Form onSubmit={handleFormSubmit}>
          <FormGroup type="text" placeholder="your email" value={email} onChange={setEmail}/>
          <FormGroup type="password" placeholder="your password" value={password} onChange={setPassword}/>
          <Button>Submit</Button>
        </Form>
      </section>
    </>
  )
}

export default Login
