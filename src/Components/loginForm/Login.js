import React, { useState } from "react";
import "./login.css";
import UsernameInput from "../SignUpForm/UsernameInput";
import PasswordInput from "../SignUpForm/PasswordInput";
import Navbar from '../Navbar/homeNavbar';
import axios from 'axios';
import { useNavigate , Link } from "react-router-dom";

const Login = ({updateUser}) => {
  const navigate = useNavigate();
  const [formValues, setFormValues] = useState({
    username: '',
    password: ''
  });

  const [errors, setErrors] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = {};
    
    if (!formValues.username) {
      newErrors.username = "Username is required";
    }

    if (!formValues.password) {
      newErrors.password = "Password is required";
    } else if (formValues.password.length < 5) {
      newErrors.password = "Password must be at least 5 characters long";
    }

    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) {
      const {data} = await axios.post('http://localhost:4800/user/login', formValues);
      localStorage.setItem('token', data.accessToken)
      localStorage.setItem('userId', data.user._id)
      updateUser(data.user)
      navigate("/userPage")
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({ ...prevValues, [name]: value }));
    setErrors((prevErrors) => ({ ...prevErrors, [name]: '' }));
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <img src="https://www.bing.com/images/blob?bcid=RBZ-MzCjG4cFTA" alt="Trip logo" className="trip-logo" />
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <UsernameInput 
            name="username"
            value={formValues.username}
            onChange={handleInputChange}
            error={errors.username}
          />
          <PasswordInput 
            name="password"
            value={formValues.password}
            onChange={handleInputChange}
            error={errors.password}
          />
          <button type="submit">Login</button>
        </form>
        <div className="options">
          <Link to="/">Back to Home</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;