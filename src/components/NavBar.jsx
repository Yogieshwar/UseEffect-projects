import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-dark width-100% ">
      <div className="container-fluid">
        <h2 className="navbar-brand text-light" to="/">UseEffect Projects</h2>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink className="nav-link text-light" to="/">Stop Watch</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link text-light" to="/timer">CountDown Timer</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    </div>
  )
}

export default NavBar
