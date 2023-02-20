// Chat.js


import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';
import Chat from "./Chat";
import Table from "./Table";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


const Menu = () => {

    return (

        <Router>

            <Navbar bg="primary" variant="dark">
                <Container>
                    <Navbar.Brand href="#Chat">Navbar</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="Chat">Chat</Nav.Link>
                        <Nav.Link href="Table">Table</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
            <Routes>
                <Route path="/Chat" element={<Chat/>}/>
                <Route path="/Table" element={<Table/>}/>
            </Routes>
        </Router>
    );
};

export default Menu;
