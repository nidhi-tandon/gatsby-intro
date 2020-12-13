import React from 'react';
import styled from '@emotion/styled';
import BackgroundImage from 'gatsby-background-image';
import { graphql, useStaticQuery } from 'gatsby';
import { css } from '@emotion/core';

const ImageBackground = styled(BackgroundImage)`
  background-size: cover;
  height: 50vh;
  /* override the default margin for sibling elements  */
  + * {
    margin-top: 0;
  }
`;

const Hero = () => {
  const { image } = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "bg.jpg" }) {
        sharp: childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);

  return (
    <ImageBackground fluid={image.sharp.fluid} fadeIn="soft">
      <h1
        css={css`
          text-align: center;
        `}
      >
        Header
      </h1>
    </ImageBackground>
  );
};

export default Hero;
