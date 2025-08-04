import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import {
  Input,
  Button,
} from '../components';

function SignUp() {
  const navigate = useNavigate()

  const [username, setUsername] = useState("intern");
  const [email, setEmail] = useState("intern@intern.com")
  const [password, setPassword] = useState("12345678")

  const handleClick = () => {
    navigate('/');
  }

  return (
    <div className='w-screen h-screen bg-gray-950 text-white flex'>
      <div className='hidden h-full md:w-2/3 md:flex relative z-0'>
        <img className='object-cover absolute top-0 left-0 w-full h-full z-1' src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        <div className='bg-[#03071275] w-full h-full relative z-1 flex items-end'>
          <div className='flex flex-col m-12'>
            <p className='text-5xl font-bold text-red-500 mb-3'>Welcome</p>
            <p className='text-xl font-medium'>to the,</p>
            <p className='text-xl font-medium'>Fundraising Intern Portal</p>
            <small className='my-1 max-w-[47ch]'>Fundraising fuels the mission to empower women through training, resources, and advocacy. Your support helps build a more equitable and sustainable future for all.</small>
          </div>
        </div>
      </div>
      <div className='w-full h-full bg-gray-950 py-5 px-5 md:px-10 flex flex-col md:w-1/2 justify-self-end'>
        <h1 className='text-3xl my-7 font-bold'>Sign Up</h1>
        <label htmlFor="username" className='text-lg font-light mt-2 mb-2 '>Username</label>
        <Input 
          id='username'
          type="text"
          placeholder="Enter your username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          classname='mb-3'
        />       
        <label htmlFor="email" className='text-lg font-light mt-2 mb-2 '>Email</label>
        <Input 
          id='email'
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          classname='mb-3'
        />      
        <label htmlFor="password" className='text-lg font-light mt-2 mb-2 '>Password</label>
        <Input 
          id='password'
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          classname='mb-3'
        />   
        <Button
         onClick={handleClick}
         className='my-5 bg-red-500 text-white hover:bg-white hover:text-red-500'
        >
          Sign up
        </Button>

        <p className='my-5'>Already have an account? <Link className='underline cursor-pointer text-red-500 hover:no-underline' to={'/login'}>Login</Link></p>
      </div>
    </div>
  )
}

export default SignUp;
