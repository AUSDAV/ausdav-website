import React, { useState } from 'react'
import { FaBars } from 'react-icons/fa'
import Dropdown from '../Dropdown'
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavLinks,
  NavItem,
  NavBtn,
  NavBtnLink,
} from './NavbarElements'

const Navbar = ({ toggle }) => {
  const [dropdown, setDropdown] = useState(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };
  return (
    <>
      <Nav >
        <NavbarContainer>
          <NavLogo to='/' >AUSDAV</NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
              <NavLinks to='project'>Projects</NavLinks>
              {dropdown && <Dropdown />}
            </NavItem>
            <NavItem>
              <NavLinks to='examination'>Examination</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to='history'>History</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to='structure'>Structure</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to='contact'>Contact</NavLinks>
            </NavItem>
          </NavMenu>
          <NavBtn>
            <NavBtnLink to='/results'>Examination Result</NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  )
}

export default Navbar