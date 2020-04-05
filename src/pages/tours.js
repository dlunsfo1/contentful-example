import React, { Component } from 'react';
import Layout from '../components/Layout';
import StyledHero from '../components/StyledHero';
import { graphql } from 'gatsby';

export default class tours extends Component {
  render() {
    return (
      <Layout>
        <StyledHero img={this.props.data.toursBcg.childImageSharp.fluid} />
      </Layout>
    );
  }
}

export const query = graphql`
  query {
    toursBcg: file(relativePath: { eq: "defaultBcg.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 4160, quality: 90) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;
