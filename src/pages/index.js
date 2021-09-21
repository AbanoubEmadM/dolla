import React, {useState} from 'react'
import SideBar from '../components/Sidebar/SideBar'
import Navbar from '../components/Navbar'
import HeroSection from '../components/Hero'
import InfoSection from '../components/infoSection'
import Services from '../components/Services'
import { HomeObjOne } from '../components/infoSection/Data'
import { HomeObjTwo } from '../components/infoSection/Data'
import { HomeObjThree } from '../components/infoSection/Data'
import Footer from '../components/Footer'
const Home = () => {
    const [isOpen, SetIsOpen] = useState(false);

    const toggle = () => {
        SetIsOpen(!isOpen);
    }

    return (
        <>
            <SideBar isOpen={isOpen}  toggle={toggle} />
            <Navbar toggle={toggle}/>
            <HeroSection />
            <InfoSection {...HomeObjOne} />
            <InfoSection {...HomeObjTwo} />
            <Services />
            <InfoSection {...HomeObjThree} />
            <Footer />
        </>
    )
}

export default Home
