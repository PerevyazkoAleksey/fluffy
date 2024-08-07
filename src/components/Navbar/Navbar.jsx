import React from 'react'

const Navbar = () => {
  return (
    <div className='header-navbar'>
        <nav className='navbar'>
          <div className='container'>
            <a className="navbar-brand" href="/">
              <img src={require("../../shared/logo.png")} className="d-inline-block align-text-top" width="45" height="45" alt="" />
              Fluffy Paradise
            </a>
          </div>
        </nav>
    </div>
  )
}

export default Navbar