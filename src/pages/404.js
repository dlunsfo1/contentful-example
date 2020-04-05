import React from 'react';
// import { Link } from 'gatsby';
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import Layout from '../components/Layout';
import styles from '../css/error.module.css';
import Banner from '../components/Banner';

const error = () => {
  return (
    <Layout>
      <header className={styles.error}>
        <Banner title="oops">
          <AniLink to="/" className="btn-white">
            back to home page
          </AniLink>
        </Banner>
      </header>
    </Layout>
  );
};

export default error;
