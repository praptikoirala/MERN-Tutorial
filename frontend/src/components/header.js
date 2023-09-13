import React from 'react'
import { Link } from 'react-router-dom'
import { FaSignInAlt } from 'react-icons/fa'
import { BiSolidUser } from 'react-icons/bi'


const Header = () => {
  return (
    <header className='mx-5 px-1 py-5 flex justify-between items-center font-bold border-b border-b-3'>
      <div>
        <Link to="/">GoalSetter</Link>
      </div>
      <div className='flex space-x-5'>
        <Link to="/login">
            <div className='flex items-center'>
                <span className='mr-1'>
                    <FaSignInAlt />
                </span>
                Login
            </div>
        </Link>
        <Link to="/register">
            <div className='flex items-center'>
                <span className='mr-1'>
                    <BiSolidUser />
                </span>
                Register
            </div>
        </Link>
      </div>
    </header>
  )
}

export default Header
