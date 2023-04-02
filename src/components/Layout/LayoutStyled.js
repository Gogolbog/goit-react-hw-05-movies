import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  background-color: #6ec6ff;
  color: #fff;
`;

export const NavLinkStyled = styled(NavLink)`
  font-size: 1.2rem;
  margin-right: 1rem;
  color: #fff;
  text-decoration: none;
  &.active {
    font-weight: bold;
    color: yellow;
  }
`;

export const Main = styled.main`
  padding: 1rem;
`;
