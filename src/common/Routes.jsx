import {Routes, Route, Navigate} from 'react-router-dom'
import Landing from '../pages/Landing';
import Dashboard from '../pages/Dashboard';
import Table from '../pages/Table';
import Accordion from '../pages/Accordion';
export default function Routers() {
    return (
        <Routes>
        <Route index element={<Landing/>} />
        <Route path='dashboard' element={<Dashboard/>} />
        <Route path='table' element={<Table/>} />
        <Route path='accordion' element={<Accordion/>} />
        <Route path='*' element={<Navigate to="dashboard"/>} />
      </Routes>
    );
}