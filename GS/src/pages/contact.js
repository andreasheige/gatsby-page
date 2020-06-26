import React from 'react';
import Layout from '../components/layout';
import contactStyles from '../pages/contact.module.scss'
import Emoji from 'a11y-react-emoji';


const Contact = () => {
    return (
        <Layout>
            <h1 className={contactStyles.h1}>Contact / social.</h1>
            <ul className={contactStyles.linklist}>

                <li className={contactStyles.linkitem}><Emoji symbol="🕊️" label="twitter-right"/><a href="https://twitter.com/andreasheige">Twitter</a></li>
                <li className={contactStyles.linkitem}><Emoji symbol="🤳" label="instagram"/><a href="https://instagram.com/andreasheige">Instagram</a></li>
                <li className={contactStyles.linkitem}><Emoji symbol="🌐" label="git"/><a href="https://github.com/andreasheige">Github</a></li>
                <li className={contactStyles.linkitem}><Emoji symbol="🏃‍♂️" label="running"/><a href="https://www.strava.com/athletes/1384291">Strava</a></li>
                <li className={contactStyles.linkitem}></li>
                <li className={contactStyles.linkitem}></li>
                <li className={contactStyles.linkitem}></li>
                <li className={contactStyles.linkitem}><Emoji symbol="📧" label="email"/><a href="mailto:a@andreasheige.me?subject=Hi!">hola -> a@andreas.heige.me</a></li>
                
            </ul>
        </Layout>
    )
};

export default Contact;