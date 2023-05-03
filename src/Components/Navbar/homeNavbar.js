import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus, faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import './homepage.css'


export default function homeNavbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <Link className="navbar-brand" to="/">TakeMeOut</Link>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item">
          <Link className="nav-link" to="/">Home</Link>
        </li>
      </ul>
      <div className="ml-auto">
        <Link to="/signup" className="btn btn-info mr-2" id="signup">
          <FontAwesomeIcon icon={faUserPlus} className="mr-2" />
          Sign Up
        </Link>
        <Link to="/login" className="btn btn-info" id="login">
          <FontAwesomeIcon icon={faSignInAlt} className="mr-2" />
          Log In
        </Link>
      </div>
    </div>
  </nav>  
      )
}
