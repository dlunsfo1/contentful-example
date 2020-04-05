import React from 'react';
import { StaticQuery, grahql } from 'gatsby';
const getSiteData = graphql`
  query {
    site {
      siteMetadata {
        title
        description
        author
        data {
          name
          age
        }
      }
    }
  }
`;
const RegularHeader = () => {
  return (
    <StaticQuery
      query={getSiteData}
      render={data => {
        return <h1>hello pople</h1>;
      }}
    />
  );
};

export default RegularHeader;
