import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from 'react-router-dom'
export default function Header() {
    return (
        <header className="header">
            <Navbar expand="lg" className="bg-white shadow-sm">
                <Container fluid>
                    <Link className="navbar-brand" to="/">React-Bootstrap</Link>
                </Container>
            </Navbar>
        </header>
    );
}
