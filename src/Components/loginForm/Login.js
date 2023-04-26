import React, { useState } from "react";
import "./login.css";
import UsernameInput from "../SignUpForm/UsernameInput";
import PasswordInput from "../SignUpForm/PasswordInput";
import Navbar from '../Navbar/homeNavbar';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

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
    <div>
      <Navbar/>
    <div className="login-container">
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
    </div>
    </div>
  );
};

export default Login;
