import React , {useEffect, useState}from 'react'
import { Nav , NavbarContainer , NavLogo , MobileIcon , NavMenu , NavItem , NavLink , NavBtn , NavBtnLink} from './NavbarStyle'
import {FaBars} from 'react-icons/fa'
const Navbar = ({toggle}) => {
    const [scrollNav, setScrollNav] = useState(false);

    const changeNav = () => {
        if(window.scrollY >= 80){
            setScrollNav(true)
        }else{
            setScrollNav(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll',changeNav)
    },[])
    return (
        <>
            <Nav scrollNav={scrollNav}>
                <NavbarContainer>
                    <NavLogo to="/">dolla</NavLogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLink  to="about">About</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to="discover">Discover</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink  to="services">Services</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink  to="services">Sign Up</NavLink>
                        </NavItem>
                    </NavMenu>
                    <NavBtn>
                        <NavBtnLink to="/signin">
                            Sign In
                        </NavBtnLink>
                    </NavBtn>
                </NavbarContainer>
            </Nav>
        </>
    )
}

export default Navbar
