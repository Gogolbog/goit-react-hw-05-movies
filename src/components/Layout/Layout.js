import { Outlet } from 'react-router-dom';
import { Main, Nav, NavLinkStyled } from './LayoutStyled';
import React, { Suspense } from 'react';
import { TailSpin as Loader } from 'react-loader-spinner';

export default function Layout() {
  return (
    <>
      <Nav>
        <NavLinkStyled to="/">Home</NavLinkStyled>
        <NavLinkStyled to="/movies">Movies</NavLinkStyled>
      </Nav>
      <Main>
        <Suspense
          fallback={
            <Loader type="TailSpin" color="#00BFFF" height={80} width={80} />
          }
        >
          <Outlet />
        </Suspense>
      </Main>
    </>
  );
}
