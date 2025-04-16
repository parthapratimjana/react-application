import { Navigate, Outlet } from 'react-router-dom'
import { createContext, useContext } from 'react'
import { authcontext } from '../App'
// const authcontext = createContext();
const PrivateRoutes = () => {
    const [authToken, setAuthToken, login] = useContext(authcontext);

    return (
        authToken ?
            // <authcontext>
                <Outlet />
            // </authcontext>
            :
            <Navigate to='/Login' />
    )
}
export { PrivateRoutes }