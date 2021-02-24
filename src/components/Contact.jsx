import React from 'react';
import styled from 'styled-components';
import Wantedly from '../images/wantedly.png';

const ContactWrapper = styled.div`
  width: 80%;
  margin: 0 auto 50px auto;
  display: flex;
  justify-content: space-around;
`;

const ContactIcon = styled.i`
  font-size: 100px;
  :hover {
    opacity: 0.6;
    transition-duration: 0.3s;
  }
`;

const ContactImg = styled.img`
  width: 100px;
  border-radius: 50%;
  :hover {
    opacity: 0.6;
    transition-duration: 0.3s;
  }
`;

export const Contact = () => {
  return (
    <ContactWrapper>
      <a href='https://twitter.com/spicewolf001' alt='twitter' ><ContactIcon className="fab fa-twitter" /></a>
      <a href='https://www.wantedly.com/id/masaki_takebe' alt='wantedly' ><ContactImg src={Wantedly} /></a>
      <a href='https://github.com/mao3329' alt='github' ><ContactIcon className="fab fa-github" /></a>
    </ContactWrapper>
  )
}