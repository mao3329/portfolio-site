import React from 'react';
import styled from 'styled-components';

const ContactWrpper = styled.div`
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
    <ContactWrpper>
      <a href='#'><ContactIcon className="fab fa-twitter"/></a>
      <a href='#'><ContactImg src='#' /></a>
      <a href='#'><ContactIcon className="fab fa-github"/></a>
    </ContactWrpper>
  )
}