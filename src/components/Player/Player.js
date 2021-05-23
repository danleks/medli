import React from 'react';
import { useStaticQuery, graphql } from "gatsby";
import { PlayerSectionStyles, ImgStyles, PlayerControls, PlayIconStyles } from './Player.styles';

const Player = () => {
const data = useStaticQuery(graphql`
  query {
    file(relativePath: { eq: "woman-freelance-worker-does-yoga-exersice-workplace-enjoys-calm-tranquil-atmosphere-wears-round-glasses-jumper.png" }) {
      childImageSharp {
        fluid(maxWidth: 1240, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`)
    return (
        <PlayerSectionStyles>
            <ImgStyles fluid={data.file.childImageSharp.fluid} />
            <PlayerControls>
                <PlayIconStyles />
            </PlayerControls>
        </PlayerSectionStyles>
    )
};

export default Player;