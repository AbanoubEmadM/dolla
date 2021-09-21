import React , {Component} from 'react'
import axios from 'axios'
import {FooterContainer , FooterWrap , FooterLinks , FooterLinksWrapper , FooterLItems , FooterLinkTitle ,  FooterLink , SocialMedia , SocialMediaWrap , SocialLogo , WebsiteRights , SocialIcons , SocialIconLink} from './style'
import {FaFacebook,FaInstagram,FaTwitter , FaLinkedin} from 'react-icons/fa'
class Footer extends Component {
    state = {
        footer:[]
    }
    componentDidMount(){
        axios.get('data/data.json').then(res => {
            console.log(res.data.footer);
            this.setState({
                footer:res.data.footer
            })
        })
    }
    render(){
        const {footer} = this.state;
        const footerItem = footer.map(item => {
            return(
            <FooterLItems key={item.id}>
                <FooterLinkTitle>{item.title}</FooterLinkTitle>
                <FooterLink to="/signin">{item.link1} </FooterLink>
                <FooterLink to="/signin">{item.link2}</FooterLink>
                <FooterLink to="/signin">{item.link3}</FooterLink>
                <FooterLink to="/signin">{item.link4}</FooterLink>
                <FooterLink to="/signin">{item.link5}</FooterLink>
            </FooterLItems>
            )
        })
        return (
    <FooterContainer>
        <FooterWrap>
            <FooterLinks>
                <FooterLinksWrapper>
                    {footerItem}
                </FooterLinksWrapper>
            </FooterLinks>
            <SocialMedia>
                <SocialMediaWrap>
                    <SocialLogo>
                        dolla
                    </SocialLogo>
                    <WebsiteRights>
                        dolla &copy; {new Date().getFullYear()} All right reserved.
                    </WebsiteRights>
                    <SocialIcons>
                        <SocialIconLink href="/" target="_blank" aria-label="Facebook">
                            <FaFacebook/>
                        </SocialIconLink>
                        <SocialIconLink href="/" target="_blank" aria-label="Instagram">
                            <FaInstagram/>
                        </SocialIconLink>
                        <SocialIconLink href="/" target="_blank" aria-label="Twiiter">
                            <FaTwitter/>
                        </SocialIconLink>
                        <SocialIconLink href="/" target="_blank" aria-label="Linkedin">
                            <FaLinkedin/>
                        </SocialIconLink>
                    </SocialIcons>
                </SocialMediaWrap>
            </SocialMedia>
        </FooterWrap>
    </FooterContainer>
    )       
    
    }
}

export default Footer
 