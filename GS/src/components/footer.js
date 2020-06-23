import React from 'react';
import footerStyles from './footer.module.scss';

const Footer = ()  => {
    return (
        <footer className={footerStyles.siteFooter}>
           <div className={footerStyles.container}>
            <p>
                    This site is developed by <a href="https://github.com/andreasheige">Andreas Heige</a> 
                    &copy; {new Date().getFullYear().toString()}{""}
            </p>
           </div>
        </footer>
    )
};

export default Footer;