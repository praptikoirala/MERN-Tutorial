import React, { useState } from 'react'
import { BiSolidUser } from 'react-icons/bi'

import Form from '../components/form'
import FormGroup from '../components/formgroup'
import Button from '../components/button'

const Register = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [repeatedPassword, setRepeatedPassword] = useState('')

    const handleFormSubmit = () => {
        if(password !== repeatedPassword){
          console.log('password donot match')
        }

        console.log(name, email, password, repeatedPassword)
        // console.log('click')
    }

  return (
    <>
      <section className='header-sec'>
        <h1 className='head-large'>
            <BiSolidUser />
            Register
        </h1>
        <h3 className='head-small'>Please create an account</h3>
      </section>

      <section className='form-sec'>
        <Form onSubmit={handleFormSubmit}>
            <FormGroup type="text" placeholder="enter name" value={name} onChange={setName} />
            <FormGroup type="text" placeholder="enter email" value={email} onChange={setEmail} />
            <FormGroup type="password" placeholder="enter password" value={password} onChange={setPassword} />
            <FormGroup type="password" placeholder="re-enter password" value={repeatedPassword} onChange={setRepeatedPassword} />
            <Button>Submit</Button>
        </Form>
      </section>
    </>
  )
}

export default Register