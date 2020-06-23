import React from 'react';

const Footer = ()  => {
    return (
        <footer>
            <p>
                This site is developed by <a href="https://github.com/andreasheige">Andreas Heige</a> 
                &copy; {new Date().getFullYear().toString()}{""}
            </p>
        </footer>
    )
};

export default Footer;