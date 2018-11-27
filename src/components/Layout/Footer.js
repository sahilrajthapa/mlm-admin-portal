import React from 'react';

import { Navbar, Nav, NavItem } from 'reactstrap';


const Footer = () => {
  return (
    <Navbar>
      <Nav navbar>
        <NavItem>
          {new Date().getFullYear()} MLM Admin 
        </NavItem>
      </Nav>
    </Navbar>
  );
};

export default Footer;
