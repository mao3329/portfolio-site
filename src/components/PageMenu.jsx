import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-scroll';

const MenuWrapper = styled.div`
  font-size: 40px;
  margin: 0 20px;
  display: flex;
  justify-content: space-around;
`;

const MenuList = styled.li`
  cursor: pointer;
  margin: 0 25px;
  :hover {
    opacity: 0.6;
    transition-duration: 0.3s;
  }
`;

export const PageMenu = () => {
  return (
    <MenuWrapper>
      <ul>
        <MenuList>
          <i className="fas fa-male"></i>
          <Link
            activeClass="active"
            to="profile"
            spy={true}
            smooth={true}
            offset={-70}
            duration={800}
          >Profile</Link>
        </MenuList>
        <MenuList>
          <i className="fas fa-cog"></i>
          <Link
            activeClass="active"
            to="skills"
            spy={true}
            smooth={true}
            offset={-70}
            duration={800}
          >Skills</Link>
        </MenuList>
        <MenuList>
          <i className="fas fa-sitemap"></i>
          <Link
            activeClass="active"
            to="portfolios"
            spy={true}
            smooth={true}
            offset={-70}
            duration={800}
          >Portfolios</Link>
        </MenuList>
        <MenuList>
          <i className="fas fa-envelope"></i>
          <Link
            activeClass="active"
            to="contacts"
            spy={true}
            smooth={true}
            offset={-70}
            duration={800}
          >Contacts</Link>
        </MenuList>
      </ul>
    </MenuWrapper>
  )
}