
import SignUpForm from './Components/SignUpForm/SignUpForm';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Components/login/Login';
import Navbar from './Components/Navbar/Navbar';

const App = () => {
  
  return (
    <Router>
    <div>
      <Navbar/>
    <SignUpForm />
    <Login/>
    </div>
    <Routes>
      <Route path='/'/>
    </Routes>
    </Router>
  );
}



export default App;