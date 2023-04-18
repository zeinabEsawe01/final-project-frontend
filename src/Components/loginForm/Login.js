import React, { useState } from "react";
import "./login.css";
import UsernameInput from "../SignUpForm/UsernameInput";
import PasswordInput from "../SignUpForm/PasswordInput";

const Login = () => {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
  const [formValues, setFormValues] = useState({
    username: '',
    password: ''
   
});

const [errors, setErrors] = useState({});
  const handleSubmit = (e) => {
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
      console.log("Form submitted");
    }
  };

  return (
    <div className="login-container">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <UsernameInput />
        <PasswordInput />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
