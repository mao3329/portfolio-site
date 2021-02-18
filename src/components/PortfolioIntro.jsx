import React from 'react';
import styled from 'styled-components';

const Title = styled.h4`
  font-weight: bold;
`;

const Url = styled.a`
  color: #0044CC;
`;

const Text = styled.p`

`;

const SourceCode = styled.a`
  color: #0044CC;
`;

const Technology = styled.p`

`;

export const PortfolioIntro = (props) => {
  return (
    <>
      <Title>{props.title}</Title>
      <Url href={props.siteUrl}>サイトへ</Url>
      <Text>{props.text}</Text>
      <SourceCode>Git hub</SourceCode>
      <Technology>{props.technology}</Technology>
    </>
  )
}