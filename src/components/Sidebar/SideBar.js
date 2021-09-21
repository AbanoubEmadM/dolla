import React from 'react'
import {SideBarContainer , CloseIcon , Icon , SidebarWrapper , SidebarLink , SideBtnWrap , SidebarRoute , SidebarMenu} from './SideBarStyle'
const SideBar = ({isOpen,toggle}) => {
    return (
        <SideBarContainer isOpen={isOpen} onClick={toggle}>
             <Icon>
                 <CloseIcon />
             </Icon>
             <SidebarWrapper>
                 <SidebarMenu>
                     <SidebarLink to="about">
                        About
                     </SidebarLink>
                     <SidebarLink to="discover">
                        Discover
                     </SidebarLink>
                     <SidebarLink to="services">
                        Services
                     </SidebarLink>
                     <SidebarLink to="signup">
                        Sign Up
                     </SidebarLink>
                 </SidebarMenu>
                 <SideBtnWrap>
                    <SidebarRoute to="/signin">Sign In</SidebarRoute>
                 </SideBtnWrap>
             </SidebarWrapper>
        </SideBarContainer>
    )
}

export default SideBar
