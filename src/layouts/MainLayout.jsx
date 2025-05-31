import React from 'react'
import { NavLink, Outlet } from 'react-router'
import styled from 'styled-components'

const Header = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  background: #333;
  padding: 16px;
  z-index: 100;
`

const NavList = styled.ul`
  display: flex;
  gap: 20px;
  list-style: none;
  margin: 0;
  padding: 0;
`

const StyledLink = styled(NavLink)`
  color: #fff;
  text-decoration: none;
  &.active {
    color: #ff4444;
  }
`

const Main = styled.main`
  padding-top: 80px;
`

const MainLayout = () => {
  return (
    <>
      <Header>
        <nav>
          <NavList>
            <li>
              <StyledLink to="/" end>Home</StyledLink>
            </li>
            <li>
              <StyledLink to="/about">About</StyledLink>
            </li>
            <li>
              <StyledLink to="/contacts">Contacts</StyledLink>
            </li>
          </NavList>
        </nav>
      </Header>
      <Main>
        <Outlet />
      </Main>
    </>
  )
}

export default MainLayout
