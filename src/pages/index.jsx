import React, { useState } from 'react'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import Sidebar from '../components/SideBar'
import Info from '../components/Info'
import Projects from '../components/Projects'
import { homeObjOne, homeObjTwo, homeObjThree} from '../components/Info/Data';
import Footer from '../components/Footer'

const Home = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    }
    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle} />
            <Hero />
            <Info {...homeObjOne} />
            <Info {...homeObjTwo} />
            <Info {...homeObjThree} />
            <Projects />
            <Info {...homeObjThree} />
            <Footer />
        </>
    )
}

export default Home
