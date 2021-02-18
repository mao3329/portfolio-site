import React from 'react';
import styled from 'styled-components';

import { Card } from './Card';

const SkillWrapper = styled.div`
  margin-right: auto;
  margin-left: auto;
  margin-border: 50px;
`;



export const Skill = () => {
  return (
    <SkillWrapper>
      <Card />
    </SkillWrapper>
  )
}