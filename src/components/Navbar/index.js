import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from './NavbarElements';

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLink to='/'>
          <h1>Logo</h1>
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to='/portfolio' activeStyle>
            Portfolio
          </NavLink>
          <NavLink to='/skills' activeStyle>
            Skills
          </NavLink>
          <NavLink to='/about' activeStyle>
            About
          </NavLink>
          <NavLink to='/experience' activeStyle>
            Experience
          </NavLink>
          <NavLink to='/education' activeStyle>
            Education
          </NavLink>
        </NavMenu>
        <NavBtn>
          <NavBtnLink to='/contact'>Contact</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};

export default Navbar;
