import React from 'react';
import { Link } from 'react-router-dom';
import './Landing.css'
import Navbar from '../Navbar/homeNavbar';
import Footer from './Footer';

const Landing = () => {
    return (
        <div className="landing-page container-fluid">
            <div className="landing-page-header row">
            <Navbar/>
                <div className="col-md-6">
                    <h1>Welcome to TakeMeOut App</h1>
                    <p>Plan your perfect trip with us today</p>
                </div>
                <div className="col-md-6">
                    <img src="https://i.pinimg.com/736x/05/60/e5/0560e557fbabe377733bb13ff142365a.jpg" alt="Trip Planner App" className="img-fluid" />
                </div>
            </div>
            <div className="landing-page-content row">
                <div className="col-md-12">
                    <h2>Why choose TakeMeOut App?</h2>
                    <ul>
                        <li>Easy to use interface</li>
                        <li>Customizable trip planning options</li>
                        <li>Collaborative planning with friends and family</li>
                        <li>Access to personalized recommendations</li>
                    </ul>
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default Landing