import React from 'react'
import { FaBars } from 'react-icons/fa'
import { 
  Nav, 
  NavbarContainer, 
  NavLogo, 
  MobileIcon, 
  NavMenu, 
  NavLinks, 
  NavItem, 
  NavBtn, 
  NavBtnLink 
} from './NavbarElements'

const Navbar = () => {
  return(
    <>
      <Nav >
        <NavbarContainer>
          <NavLogo to='/' >AUSDAV</NavLogo>
          <MobileIcon >
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to='project'
              
              >Projects</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to='history'
              
              >History</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to='structure'
              
              >Structure</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to='contact'
              
              >Contact</NavLinks>
            </NavItem>
          </NavMenu>
          <NavBtn>
            <NavBtnLink to='/result'>Examination Result</NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  )
}

export default Navbar