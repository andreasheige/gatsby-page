import React from 'react';
import { Link } from 'gatsby';
import headerStyles from "./header.module.scss"

const Header = () => {
    return (
        <header className={headerStyles.header}>
            <div className="{headerStyles.overlay}"></div>
               <nav className={headerStyles.navContainer}>
            <ul className={headerStyles.navList}>
                <li>
                    <Link to="/" activeClassName={headerStyles.activeMenuItem}>Home</Link>
                </li>
                <li>
                    <Link to="/blog/" activeClassName={headerStyles.activeMenuItem}>Blog</Link>
                </li>
                <li>
                    <Link to="/contact/" activeClassName={headerStyles.activeMenuItem}>Contact</Link>
                </li>
                <li>
                    <Link to="/about/" activeClassName={headerStyles.activeMenuItem}>About</Link>
                </li>
            </ul>
        </nav>
                <div className={headerStyles.heroContent}>
            <p className={headerStyles.brand}>
                <Link to="/">Andreas Heige</Link>
            </p>
            <p>Content text will come here</p>
        </div>
        </header>
    )
};

export default Header;