import React from 'react'
import{Link}from 'react-router-dom'
import './componentsCss/Navbar.css'
export default function Navbar() {
  return (
    <div>
   <nav className="navbar navbar-expand-lg nav">
  <div className="container-fluid  ">
  <a className="navbar-brand" href="/"><img style = {{height : '50px'}}src='https://toletglobe.in/static/media/Favicon.3d4cfc7b80e84c79bb5f.png' alt=''/></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse " id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link "    to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link"  to="/">Service</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link"  to="/">Blog</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link"  to="/Contact">Contact</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link"  to="/">About</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link"  to="/">Property Listing</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}
