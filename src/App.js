
import SignUpForm from './Components/SignUpForm/SignUpForm';
import './App.css';
import { BrowserRouter as Router,  Route, Routes } from 'react-router-dom';
import Login from './Components/loginForm/Login';

const App = () => {
  
  return (
    
    <Router>
        <Routes>
        <Route path="/" element={<SignUpForm/>} />
        <Route path="/login" element={<Login/>}/>

        </Routes>
    </Router>
  );
}



export default App;