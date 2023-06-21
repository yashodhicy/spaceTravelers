import React from 'react';
import { NavLink } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Stack from 'react-bootstrap/Stack';
import Uranus from './assets/uranus.png';
import './Navbar.css';

const Navbar = () => (
  <Stack direction="horizontal" gap={3} className="mx-5 my-3 pb-3 px-4" style={{ borderBottom: '1px solid black' }}>
    <img src={Uranus} style={{ width: 64, height: 64 }} alt="logo" />
    <h1>Space Travelers&apos; Hub</h1>
    <Nav activeKey="/" className="ms-auto">
      <Nav.Item><Nav.Link as={NavLink} to="/" exact='true' >Rockets </Nav.Link></Nav.Item>
      <Nav.Item><Nav.Link as={NavLink} to="/missions" style={{ borderRight: '2px solid black', paddingRight: '15px' }}>Missions</Nav.Link></Nav.Item>
      <Nav.Item><Nav.Link as={NavLink} to="/myprofile">My Profile</Nav.Link></Nav.Item>
    </Nav>
  </Stack>
);

export default Navbar;
