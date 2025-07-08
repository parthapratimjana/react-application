import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from 'react-router-dom';
import logo from '../assets/images/bong-pizza.jpg';
import { createContext, useContext } from 'react'
import { authcontext } from '../App'
export default function Header() {
     const [authToken, setAuthToken,logout,userDetails] = useContext(authcontext);
    return (
        <header className="header">
            <Navbar expand="lg" className="">
                <Container fluid>
                    <Link className="navbar-brand" to="/">
                    <img alt="logo" src={logo} />
                    </Link>
                    <div>
                   {/* {authToken &&  <Link className="mx-2" to="recepies">Recepies</Link>} */}
                   <Link className="mx-2" to="users">Users</Link>
                   <Link className="mx-2" to="recepies">Recepies</Link>
                    <Link className="mx-2" to="accordion">Accordion</Link>
                    <Link className="mx-2" to="table">Table</Link>
                    {authToken && <button className="mx-2 btn btn-link" onClick={logout}>Logout</button>}
                    {!authToken && <Link className="mx-2" to="login">Login</Link>}
                    {authToken && <div className="d-inline-flex profile-image">
                        <span>{userDetails.name}</span>
                        <div>
                            <img src={userDetails.avatar} />
                        </div>
                        </div>}
                    </div>
                    
                </Container>
            </Navbar>
        </header>
    );
}
