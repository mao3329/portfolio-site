import React from 'react';
import styled from 'styled-components';

import { Card } from './Card';

const SkillWrapper = styled.div`
  padding: 0 10vw;
  margin-right: auto;
  margin-left: auto;
  margin-bottom: 50px;
`;



export const Skill = () => {
  return (
    <SkillWrapper>
      <Card />
    </SkillWrapper>
  )
}