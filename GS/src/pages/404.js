import React from 'react';
import Layout from '../components/layout';
import { Link } from 'gatsby';

const NotFound = () => {
    return (
        <Layout>
            <h1>404: Page not found</h1>
            <p>
                <Link to="/blog/">Check latest updates on the blog</Link>
            </p>
        </Layout>
    )
};

export default NotFound;