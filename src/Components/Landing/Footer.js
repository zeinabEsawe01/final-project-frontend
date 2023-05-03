import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-lg-4 mb-5 mb-lg-0">
            <h5 className="text-uppercase">TakeMeOut</h5>
            <p>Lorem ipsum dolor sit amet, 
                consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
          <div className="col-md-6 col-lg-4 mb-5 mb-lg-0">
            <h5 className="text-uppercase">Contact Us</h5>
            <ul className="list-unstyled mb-0">
              <li><a href="#">Zeinab Esawe</a></li>
              <li><a href="#">Yahya Ammeen</a></li>
              <li><a href="#">Bahjat Nsasra</a></li>
              <li><a href="#">Rana Hussen</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;