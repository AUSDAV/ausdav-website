import React from 'react'
import { 
  SidebarContainer, 
  Icon, 
  CloseIcon, 
  SidebarWrapper, 
  SidebarMenu, 
  SidebarLink, 
  SidebarRoute, 
  SideBtnWrap 
} from './SidebarElements'

const Sidebar = ({isOpen,toggle}) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to='project' onClick={toggle}>Projects</SidebarLink>
          <SidebarLink to='examination' onClick={toggle}>Examination</SidebarLink>
          <SidebarLink to='history' onClick={toggle}>History</SidebarLink>
          <SidebarLink to='structure' onClick={toggle}>Structure</SidebarLink>
          <SidebarLink to='contact' onClick={toggle}>Contact</SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
          <SidebarRoute to='/result'>Examination Results</SidebarRoute>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  )
}

export default Sidebar
