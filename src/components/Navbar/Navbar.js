import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import logo from '../../LOGO_SMALL.png';

const NavBar = styled.nav`
display: flex;
justify-content: space-between;
align-items: center;
padding: 1rem;
background-color: ${props => props.theme.darkRed};
color: #fff;
`;

const NavBarContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 80%;
  width: 100%;
  margin: auto;
`;

const Logo = styled.div`
img {
  height: 50px;
}
`;

const NavLinks = styled.div`
display: flex;
gap: 2rem;

a {
  color: ${props => props.theme.beige};
  text-decoration: none;
  transition: color 0.3s;

  &:hover {
    color: ${props => props.theme.beige};
  }
}
`;

const Navigation = () => (
  <NavBar>
  <NavBarContent>
    <Logo>
      <Link to="/">
        <img src={logo} alt="ImageNest" />
      </Link>
    </Logo>

    <NavLinks>
      <Link to="/home"><b>Home</b></Link>
      <Link to="/create-pin"><b>Create Pin</b></Link>
    </NavLinks>
    </NavBarContent>
  </NavBar>
);

export default Navigation;