import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <>
    <h1>I am Navbar Component.</h1>
    <ul>
      <li><Link to="/">Rockets</Link></li>
      <li><Link to="/myprofile">My Profile</Link></li>
    </ul>
  </>
);

export default Navbar;
