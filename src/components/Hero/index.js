import React , {useState} from 'react'
import { HeroContainer, HeroBg ,  VideoBg , HeroContent , HeroH1 , HeroP , HeroBtn , ArrowForward, ArrowRight} from './style'
import Video from '../../Videos/video.mp4'
import { Button } from '../Button'


const HeroSection = () => {
    const [hover, setHover] = useState(false);
    const onHover = () => {
        setHover(!hover)
    }
    return (
        <HeroContainer>
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type="video/mp4"/>
            </HeroBg>
            <HeroContent>
                <HeroH1>Virtual Banking Made Easy</HeroH1>
                <HeroP>Sign up for a new account today and receive $250 in credit towards your next payment.</HeroP>
                <HeroBtn>
                    <Button 
                    to='signup'
                    onMouseEnter={onHover} 
                    onMouseLeave={onHover}
                    primary="true"
                    dark="true"
                    >
                        Get Started {hover ? <ArrowForward /> : <ArrowRight/>} 
                    </Button>
                </HeroBtn>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection
