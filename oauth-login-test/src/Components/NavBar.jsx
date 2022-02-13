import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import "./NavBar.css"


export default function NavBar() {

  const [open, setOpen] = useState(false)

  return (
    <nav className='navBar'>
      <Link to="/" className='nav-logo' onClick={() => setOpen(false)}>
        Logo
      </Link>

      <ul className={open ? 'nav-links active' : 'nav-links'}>
        <li className="nav-item">
          <Link to="/" className="nav-link" onClick={() => setOpen(false)}>
            Home
          </Link>

          <Link to="/login" className="nav-link" onClick={() => setOpen(false)}>
            Login
          </Link>

        </li>
      </ul>

    </nav>
  )
}
