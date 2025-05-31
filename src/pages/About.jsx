import React from 'react'
import { NavLink, Outlet } from 'react-router'
import styled from 'styled-components'

const AboutWrapper = styled.div`
  padding: 20px;
`

const NavList = styled.ul`
  display: flex;
  gap: 20px;
  list-style: none;
  padding: 0;
  margin: 20px 0;
`

const StyledLink = styled(NavLink)`
  color: blue;
  text-decoration: none;
  &.active {
    color: red;
  }
`

const AboutPage = () => {
  return (
    <AboutWrapper>
      <h1>About Page</h1>
      <NavList>
        <li>
          <StyledLink to="2/materials">Materials</StyledLink>
        </li>
        <li>
          <StyledLink to="2/students">Students</StyledLink>
        </li>
        <li>
          <StyledLink to="2/ratings">Ratings</StyledLink>
        </li>
      </NavList>
      <Outlet />
    </AboutWrapper>
  )
}

export default AboutPage
