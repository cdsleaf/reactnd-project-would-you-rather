import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { device } from '../deviceBreakpoints';

const Navigation = styled.nav`
  display: 'inline-block';
  z-index: 9999;
  background-color: #e0e0e0;
  width: 40%;
  height: 100vh;
  position: absolute;
  left: ${props => (props.open ? '0' : '-999px')};
  transition-duration: 0.5s;

  ul {
    display: flex;
    flex-direction: column;
    text-decoration: none;
    padding-left: 1em;
  }
  li {
    display: inline-block;
    padding-left: 0;
  }

  @media ${device.tablet} {
    display: block;
    background-color: transparent;
    left: 0px;
    transition-duration: 0s;

    ul {
      flex-direction: row;
      justify-content: space-between;
    }
  }
`;

const activeClassName = 'nav-item-active';
const NavItem = styled(NavLink).attrs({
  activeClassName,
})`
  text-decoration: none;
  &:hover {
    color: #0abab5;
  }

  &.${activeClassName} {
    font-weight: bold;
  }
}
`;

export default function Nav(props) {
  return (
    <Navigation open={props.menuOpen}>
      <ul>
        <li>
          <NavItem to="/" exact activeClassName={activeClassName}>
            Home
          </NavItem>
        </li>
        <li>
          <NavItem to="/add" activeClassName={activeClassName}>
            New Question
          </NavItem>
        </li>
        <li>
          <NavItem to="/leaderboard" activeClassName={activeClassName}>
            Leader Board
          </NavItem>
        </li>
      </ul>
    </Navigation>
  );
}
