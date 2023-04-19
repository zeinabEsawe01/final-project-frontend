
import SignUpForm from './Components/SignUpForm/SignUpForm';
import './App.css';
import { BrowserRouter as Router,  Route, Routes } from 'react-router-dom';
import Login from './Components/loginForm/Login';
import Navbar from './Components/Navbar/Navbar';
import Landing from './Components/Landing/Landing';
const App = () => {
  
  return (
    
    <Router>
      <div>
        <Navbar/>
        <landingPage/>
      </div>
        <Routes>
        <Route path="/" element={<Landing/>} />
        <Route path="/signup" element={<SignUpForm/>} />
        <Route path="/login" element={<Login/>}/>

        </Routes>
    </Router>
  );
}

export default App;