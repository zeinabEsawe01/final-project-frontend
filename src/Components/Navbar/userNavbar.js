import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import { FaUserCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { NavDropdown } from 'react-bootstrap';


export default function userNavbar() {
  
  let user={
    name:"zeinab"
  }
      return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">Welcome {user.name} </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Mygroups">Mygroups</Link>
            </li>
          </ul>
          <ul className="navbar-nav ml-max">
            <NavDropdown title={<FaUserCircle className="profile-icon" size={30} />} id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/1">Reset your password</NavDropdown.Item>
              <NavDropdown.Item href="#action/2">Log Out</NavDropdown.Item>
            </NavDropdown>
          </ul>
        </div>
      </nav>
    );
}
