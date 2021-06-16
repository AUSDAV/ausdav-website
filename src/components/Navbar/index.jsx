import React, { useState, useEffect } from 'react'
import { FaBars } from 'react-icons/fa'
import {IconContext} from 'react-icons/lib'
import { animateScroll as scroll } from 'react-scroll'
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

  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', changeNav);
  }, []);

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

  const toggleHome = () => {
    scroll.scrollToTop();
  }
  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <Nav scrollNav={scrollNav}>
          <NavbarContainer>
            <NavLogo to='/' onClick={toggleHome}>AUSDAV</NavLogo>
            <MobileIcon onClick={toggle}>
              <FaBars />
            </MobileIcon>
            <NavMenu>
              <NavItem onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
                <NavLinks to='project'
                smooth={true} duration={500} spy={true} exact='true' offset={-80} activeClass="active"
                >Projects</NavLinks>
                {dropdown && <Dropdown />}
              </NavItem>
              <NavItem>
                <NavLinks to='examination' 
                smooth={true} duration={500} spy={true} exact='true' offset={-80}
                >Examination</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to='/videos' 
                smooth={true} duration={500} spy={true} exact='true' offset={-80}
                >Videos</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to='structure' 
                smooth={true} duration={500} spy={true} exact='true' offset={-80}
                >Structure</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to='contact' 
                smooth={true} duration={500} spy={true} exact='true' offset={-80}
                >Contact</NavLinks>
              </NavItem>
            </NavMenu>
            <NavBtn>
              <NavBtnLink to='/results'>Examination Result</NavBtnLink>
            </NavBtn>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  )
}

export default Navbar