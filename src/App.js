
import SignUpForm from './Components/SignUpForm/SignUpForm';
import './App.css';
import { BrowserRouter as Router,  Route, Routes } from 'react-router-dom';
import Login from './Components/loginForm/Login';
import Navbar from './Components/Navbar/userNavbar';
import Landing from './Components/Landing/Landing';
import UserPage from './Components/userPage/userPage';


const App = () => {
  
  return (
    
    <Router>
      <div>
        {/* <userNavbar/> */}
        {/* <Navbar/> */}
        {/* <SearchComponent/> */}
      </div>
        <Routes>
        <Route path="/" element={<Landing/>} />
        <Route path="/signup" element={<SignUpForm/>} />
        <Route path="/login" element={<Login/>}/>
        <Route path="/userPage" element={<UserPage/>} />

        </Routes>
    </Router>
  );
}

export default App;