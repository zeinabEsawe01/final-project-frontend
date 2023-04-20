import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './SignUpForm.css';
import UsernameInput from './UsernameInput.js';
import PasswordInput from './PasswordInput.js';
import Navbar from '../Navbar/homeNavbar';


const SignUpForm = () => {
    const [formValues, setFormValues] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const [errors, setErrors] = useState({});

    const handleSubmit = (e) => {
        e.preventDefault();
        const newErrors = {};

        if (!formValues.username) {
            newErrors.username = 'Username is required';
        }

        if (!formValues.email) {
            newErrors.email = 'Email is required';
        } else if (!formValues.email.includes('@gmail.com')) {
            newErrors.email = 'Email must be a valid Gmail address';
        }

        if (!formValues.password) {
            newErrors.password = 'Password is required';
        } else if (formValues.password.length < 5) {
            newErrors.password = 'Password must be at least 5 characters long';
        }

        if (!formValues.confirmPassword) {
            newErrors.confirmPassword = 'Confirm Password is required';
        } else if (formValues.password !== formValues.confirmPassword) {
            newErrors.confirmPassword = 'Passwords do not match';
        }
        setErrors(newErrors);
        if (Object.keys(newErrors).length === 0) {
            console.log('Form submitted')
            // createUser()
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormValues((prevValues) => ({ ...prevValues, [name]: value }));
        setErrors((prevErrors) => ({ ...prevErrors, [name]: '' }));
    };

    return (
<div>
<Navbar/>

        <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-4 col-md-6 col-sm-6">
                    <h2>Sign Up</h2>
                    <form onSubmit={handleSubmit}>
                        <UsernameInput
                            name="username"
                            value={formValues.username}
                            onChange={handleInputChange}
                            error={errors.username}
                        />

                        <div className="form-group">
                            <label placeholder="email">Email:</label>
                            <input
                                type="email"
                                className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                                id="email"
                                name="email"
                                value={formValues.email}
                                onChange={handleInputChange}
                            />
                            {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                        </div>
                        <PasswordInput
                            name="password"
                            value={formValues.password}
                            onChange={handleInputChange}
                            error={errors.password}
                        />
                        <div className="form-group">
                            <label placeholder="confirmPassword">Confirm Password:</label>
                            <input
                                type="password"
                                className={`form-control ${errors.confirmPassword ? 'is-invalid' : ''}`}
                                id="confirmPassword"
                                name="confirmPassword"
                                value={formValues.confirmPassword}
                                onChange={handleInputChange}
                            />
                            {errors.confirmPassword && <div className="invalid-feedback">{errors.confirmPassword}</div>}
                        </div>
                        <button type="submit" className="btn btn-primary">Sign Up</button>
                    </form>
                </div>
            </div>
        </div>
        </div>
    );
};

export default SignUpForm;