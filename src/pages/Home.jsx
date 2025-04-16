import Container from 'react-bootstrap/Container';
import Homebanner from '../common/components/Homebanner'
import { useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";
import { authcontext } from '../App'
export default function Home() {
    const [authToken, setAuthToken, login] = useContext(authcontext);
    const navigate = useNavigate();

    useEffect(() => {
        // // fetchRecepies();
        console.log("Dashboard Console", authcontext)
        console.log("auth Console", authToken)
    }, [])
    return (
        <>
            <Homebanner />
            <button onClick={login}>Click to login</button>

        </>
    );
}