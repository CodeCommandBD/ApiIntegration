import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <nav>
            <div className='flex justify-center gap-4 bg-blue-500 text-white p-4 font-bold'>
                <Link to="/">Home</Link>
                <Link to="/login">Login</Link>
                <Link to="/register">Register</Link>
            </div>
        </nav>
    </div>
  )
}

export default Navbar