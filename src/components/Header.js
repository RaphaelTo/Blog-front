import React from "react";
import { Link, BrowserRouter as Router } from 'react-router-dom';

const Header = () => {
    return (
        <Router>
            <div>
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
            </div>
        </Router>
    )
};

export default Header;