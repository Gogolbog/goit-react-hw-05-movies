import { Outlet } from 'react-router-dom';
import { Main, Nav, NavLinkStyled } from './LayoutStyled';

export default function Layout() {
  return (
    <>
      <Nav>
        <NavLinkStyled to="/">Home</NavLinkStyled>
        <NavLinkStyled to="/movies">Movies</NavLinkStyled>
      </Nav>
      <Main>
        <Outlet />
      </Main>
    </>
  );
}
