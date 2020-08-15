import React from "react";
import { Link, BrowserRouter as Router } from 'react-router-dom';
import './Header.css';
const Header = () => {
    return (
        <Router>
            <header className="nav-link">
                <nav>
                    <ul>
                        <li>
                            <Link to="/" data-testid="link-header">Le blog de Raphael</Link>
                        </li>
                        <li>
                            <Link to="/about" data-testid="link-header">À propos</Link>
                        </li>
                    </ul>
                </nav>
            </header>
        </Router>
    )
};

export default Header;