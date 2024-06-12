import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.beige};
  padding: 10px 20px;
  font-family: Rubik, sans-serif;
`;

const NavLink = styled(Link)`
  color: ${props => props.theme.lightRed};
  margin-right: 15px;
  text-decoration: none;
  font-family: Rubik, sans-serif;

  &:hover {
    color: ${props => props.theme.darkRed};
  }
`;

const Navbar = () => {
  return (
    <Nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/create">Create Pin</NavLink>
    </Nav>
  );
};

export default Navbar;