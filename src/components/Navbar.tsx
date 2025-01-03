'use client';
import styled from 'styled-components';

const NavbarContainer = styled.div`
  width: 100%;
  height: 60px;
  background-color: #ffffff;
  color: white;
  display: flex;
  align-items: center;
  padding: 0 20px;
`;

const NavbarBrand = styled.div`
  font-size: 1.5em;
  font-weight: bold;
  color: #333;
  margin-left: auto;
`;

const Navbar = () => {
  return (
    <NavbarContainer>
      <NavbarBrand>My App</NavbarBrand>
    </NavbarContainer>
  );
};

export default Navbar;
