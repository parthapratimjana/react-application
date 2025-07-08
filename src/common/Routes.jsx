import { Routes, Route, Navigate } from 'react-router-dom'
import Landing from '../pages/Landing';
import Recepies from '../pages/Recepies';
import Users from '../pages/Users';
import Table from '../pages/Table';
import Accordion from '../pages/Accordion';
import Home from '../pages/Home';
import Login from '../pages/Login';
import ReceipeDetails from '../pages/ReceipeDetails';
import {PrivateRoutes} from './PrivateRoute';
export default function Routers() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='home' element={<Home />} />
      <Route path='login' element={<Login />} />
      {/* <Route element={<PrivateRoutes />}> */}
        <Route path='recepies' element={<Recepies />} />
        <Route path='users' element={<Users />} />
        {/* <Route path='table' element={<Table />} /> */}
        
        <Route path='recepies/:id' element={<ReceipeDetails />} />
      {/* </Route> */}
      <Route path='accordion' element={<Accordion />} />
      <Route path='table' element={<Table />} />
      {/* <Route path='*' element={<Navigate to="dashboard"/>} /> */}
    </Routes>
  );
}