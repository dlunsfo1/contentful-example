import React from 'react';
import Layout from '../components/Layout';
import StyledHero from '../components/StyledHero';
import { graphql } from 'gatsby';

const contact = ({ data }) => {
  return (
    <Layout>
      <StyledHero img={data.defaultBcg.childImageSharp.fluid} />
    </Layout>
  );
};

export const query = graphql`
  query {
    defaultBcg: file(relativePath: { eq: "connectBcg.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 4160, quality: 90) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;

export default contact;
