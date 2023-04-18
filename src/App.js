
import SignUpForm from './Components/SignUpForm/SignUpForm';
import './App.css';
import { BrowserRouter as Router,  Route } from 'react-router-dom';
import Login from './Components/loginForm/Login';

const App = () => {
  
  return (
    
    <Router>
        <Route path="/" component={SignUpForm} />
        <Route path="/login" component={Login} />
    </Router>
  );
}



export default App;