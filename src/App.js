// Chat.js


import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';
import Chat from "./Chat";
import Table from "./Table";


const Menu = () => {

    return (

        <Router>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/Chat">Chat</Link>
                        </li>
                        <li>
                            <Link to="/Table">Table</Link>
                        </li>
                    </ul>
                </nav>
                <Routes>
                <Route path="/Chat" element={<Chat/>}/>
                <Route path="/Table" element={<Table/>}/>
                </Routes>
            </div>
        </Router>
    );
};

export default Menu;
