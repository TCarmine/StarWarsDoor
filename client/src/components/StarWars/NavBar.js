import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../star-wars-4.svg'

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <Link to="/">
          <img src={logo} alt="star wars view"></img>
        </Link>
      </div>
      <h2>navbar component</h2>
    </nav>
  )
}

export default Navbar
