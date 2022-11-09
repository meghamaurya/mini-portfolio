import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
       <ul className='absolute flex justify-start list-none space-x-5 text-md  text-neutral-800 bg-transparent mt-5 ml-10'>
        <Link to="/" className="hover:text-neutral-600  hover:font-semibold">Home</Link>
        <Link to="/projects" className="hover:text-neutral-600 hover:font-semibold">Projects</Link>
        <Link to="/skills" className="hover:text-neutral-600 hover:font-semibold">Skills</Link>
        <Link to="/contact" className="hover:text-neutral-600 hover:font-semibold">Contact</Link>
      </ul>
    </div>
  )
}

export default Navbar
