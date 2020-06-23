import React from 'react';
import { Link } from 'gatsby';

const Header = () => {
    return (
        <header>
               <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/blog/">Blog</Link>
                </li>
                <li>
                    <Link to="/contact/">Contact</Link>
                </li>
                <li>
                    <Link to="/about/">About</Link>
                </li>
            </ul>
        </nav>
                <div>
            <p>
                <Link to="/">Andreas Heige</Link>
            </p>
            <p>Content text will come here</p>
        </div>
        </header>
    )
};

export default Header;