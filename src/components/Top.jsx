import React from "react";
import styled from 'styled-components';
import BackgroundImg from '../images/background_image.JPG';

const SiteHeader = styled.div`
  max-width: 100vw;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  background-image: url(${BackgroundImg});
  background-size: cover;
`;

const SiteHeading = styled.h1`
  margin: 0 10px;
  color: #FFFFFF;
`;

export const SiteTop = () => {
  return (
    <SiteHeader>
      <SiteHeading>Masaki Takebe's</SiteHeading>
      <SiteHeading>Portfolio</SiteHeading>
    </SiteHeader>
  )
}