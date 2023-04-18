import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import { FaUserCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { NavDropdown } from 'react-bootstrap';


export default function navbar() {
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
            <li className="nav-item">
              <Link className="nav-link" to="/Mygroups">Mygroups</Link>
            </li>
          </ul>
          <ul className="navbar-nav ml-auto">
            <NavDropdown title={<FaUserCircle className="profile-icon" size={30} />} id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/1">Reset your password</NavDropdown.Item>
              <NavDropdown.Item href="#action/2">Log Out</NavDropdown.Item>
            </NavDropdown>
          </ul>
        </div>
      </nav>
    );
}
