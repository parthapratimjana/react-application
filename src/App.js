import './App.scss';
import Header from "./common/Header"
import Routers from './common/Routes';
import Sidebar from "./common/Sidebar";
import { useEffect } from "react";
import { createContext, useState } from 'react'
import { useNavigate } from "react-router-dom";
import axios from "axios";
const authcontext = createContext();
function App() {
  const navigate = useNavigate();
  const [authToken, setAuthToken] = useState(localStorage.getItem("token") ? true : false);
  const [userDetails, setUserDetails] = useState({})
  const logout = () =>{
    localStorage.removeItem("token")
    setAuthToken(false)
   return window.location.href = '/login'
  }
  const config = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`
    },
  };

  const getUserDetails = ()=>{
    axios.get('https://api.escuelajs.co/api/v1/auth/profile', config)
    .then((response) => {
      console.log('Protected data:', response.data);
      setUserDetails(response.data)
    })
    .catch((error) => {
      console.error('Error fetching protected data:', error.message);
    });
  }
  useEffect(() => {
    console.log("base url", authToken)
    if(authToken){
      getUserDetails();
    }
  }, [])
  return (
<authcontext.Provider value={[authToken, setAuthToken, logout,userDetails]}>
    <main className="main">
      <Header />
      {/* <Sidebar /> */}
      
        <Routers />
      
    </main>
    </authcontext.Provider>
  );
}

export default App;
export { authcontext }
