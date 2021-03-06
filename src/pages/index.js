import React from 'react';
// import { Link } from 'gatsby';
import AniLink from 'gatsby-plugin-transition-link/AniLink';

import Layout from '../components/Layout';
import Banner from '../components/Banner';
import About from '../components/Home/About';
import Services from '../components/Home/Services';
import StyledHero from '../components/StyledHero';
import { graphql } from 'gatsby';

export default ({ data }) => (
  <Layout>
    <StyledHero home="true" img={data.defaultBcg.childImageSharp.fluid}>
      <Banner title="continue explorer" info="Lorem ipsum">
        <AniLink to="/tours" className="btn-white">
          Explore Tours
        </AniLink>
      </Banner>
    </StyledHero>
    <About />
    <Services />
  </Layout>
);

export const query = graphql`
  query {
    defaultBcg: file(relativePath: { eq: "defaultBcg.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 4160, quality: 90) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;
