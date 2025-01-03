'use client';
import styled from 'styled-components';

const SidebarContainer = styled.div`
  width: 250px;
  height: 100vh;
  background-color: #333;
  color: white;
  padding: 20px;
  position: fixed;
  top: 0;
  left: 0;
`;

const SidebarLink = styled.a`
  display: block;
  color: white;
  padding: 10px;
  text-decoration: none;
  &:hover {
    background-color: #444;
  }
`;

const Sidebar = () => {
  return (
    <SidebarContainer>
      <h2>Sidebar</h2>
      <SidebarLink href="#">Dashboard</SidebarLink>
      <SidebarLink href="#">Settings</SidebarLink>
      <SidebarLink href="#">Profile</SidebarLink>
    </SidebarContainer>
  );
};

export default Sidebar;
