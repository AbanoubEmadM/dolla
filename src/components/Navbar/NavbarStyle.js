import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS} from "react-scroll";
export const Nav = styled.nav`
background:${({scrollNav}) =>(scrollNav ?'#000' : 'transparent')} ;
height:80px;
display:flex;
justify-content:center;
align-items:center;
position:sticky;
margin-top: -80px;
top: 0;
z-index:10;

@media screen and (max-width: 960px){
    transition: 0.8s all ease;
}
`;
export const NavbarContainer = styled.div `
display:flex;
justify-content: space-between;
height:80px;
z-index: 1;
width: 100%;
padding: 0 24px;
max-width: 1100px;
`;
export const NavLogo = styled(LinkR) `
color: #fff;
justify-self: flex-start;
cursor: pointer;
font-size: 1.5rem;
display: flex;
align-items: center;
margin-left: 24px;
font-weight: bold;
text-decoration: none;
`;
export const MobileIcon = styled.div `
display: none;
 @media screen and (max-width:768px) {
     display:block;
     position: absolute;
     top: 0;
     right: 0;
     transform: translate(-100%, 60%);
     font-size:1.8rem;
     cursor:pointer;
     color: #fff;
 }
`;
export const NavMenu = styled.ul `
display: flex;
align-items: center;
list-style: none;
text-align: center;
margin-right: -22px;
@media screen and (max-width:768px) {
    display:none;
}
`;
export const NavItem = styled.li `
height: 80px;
`;
export const NavLink = styled(LinkS) `
color: ${({active}) => (active ? '#01bf71' : '#fff')};
display: flex;
align-items: center;
text-decoration:none;
margin-left: 35px;
height:100%;
cursor: pointer;
&:hover{
    color: #01bf71;
    transition: 0.3s all ease-in-out;
}

`;
export const NavBtn = styled.nav `
display: flex;
align-items: center;
@media screen and (max-width:768px) {
    display: none;
}
`;
export const NavBtnLink = styled(LinkR) `
border-radius: 50px;
background-color: #01bf71;
white-space: nowrap;
padding: 10px 22px;
color: #fff;
font-size: 16px;
border:none;
cursor: pointer;
transition: 0.2s all ease-in-out;
text-decoration: none;
&:hover{
    transition: 0.3s all ease-in-out;
    background: #fff;
    color: #010686;
}
`;