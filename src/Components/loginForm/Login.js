import React, { useState } from "react";
import "./login.css";
import UsernameInput from "../SignUpForm/UsernameInput";
import PasswordInput from "../SignUpForm/PasswordInput";
import Navbar from '../Navbar/homeNavbar';
import axios from 'axios';

const Login = () => {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
  const [formValues, setFormValues] = useState({
    username: '',
    password: ''
   
});

  const [errors, setErrors] = useState({});

  const handleSubmit = async (e) => {
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
      const {data} = await axios.post('/user/login', formValues);
      localStorage.setItem('token', data.accessToken)
      window.location.href = '../userPage/userPage.js';
    }
  };

  return (
    <div>
      <Navbar/>
    <div className="login-container">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <UsernameInput />
        <PasswordInput />
        <button type="submit">Login</button>
      </form>
    </div>
    </div>
  );
};

export default Login;
