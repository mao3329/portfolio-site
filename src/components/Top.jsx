import React from "react";
import styled from 'styled-components';

const SiteHeader = styled.div`
  max-width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  background-image: url("#");
`;

const SiteHeading = styled.h1`
  margin: 0 10px;
`;

export const SiteTop = () => {
  return (
    <>
      <SiteHeader>
        <SiteHeading>Masaki Takebe's</SiteHeading>
        <SiteHeading>Portfolio</SiteHeading>
      </SiteHeader>
    </>
  )
}