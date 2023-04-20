
import SignUpForm from './Components/SignUpForm/SignUpForm';
import './App.css';
import { BrowserRouter as Router,  Route, Routes } from 'react-router-dom';
import React , {useEffect , useState} from 'react';
import Login from './Components/loginForm/Login';
import Navbar from './Components/Navbar/userNavbar';
import Landing from './Components/Landing/Landing';
import UserPage from './Components/userPage/userPage';


import getPlaces from './Components/MapAndPlaces/index';
import Map from './Components/MapAndPlaces/map';


const App = () => {

  const [places , setPlaces] = useState([])
  const [coordinates , serCoordinates] = useState({})

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(({coords:{latitude,longitude}}) => {
      serCoordinates({lat : latitude , lng : longitude})
    })
  } , [])

  useEffect(() => {
    getPlaces(coordinates).then((placesData) => {
      setPlaces(placesData.data)
    })  
  }, [coordinates])

  console.log(places);

  return (
    
    <Router>
      <div>
        {/* <userNavbar/> */}
        {/* <Navbar/> */}
        {/* <SearchComponent/> */}
      </div>
        <Routes>
        <Route path="/" element={<Landing/>} />
        <Route path="/map" element={<Map/>} />
        <Route path="/signup" element={<SignUpForm/>} />
        <Route path="/login" element={<Login/>}/>
        <Route path="/userPage" element={<UserPage/>} />

        </Routes>
    </Router>
  );
}

export default App;