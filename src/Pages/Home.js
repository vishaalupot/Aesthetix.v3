import React from 'react'
import AboutUs from '../components/AboutUs/About';
import Partners from '../components/Partner/Partners';
import Footer from '../components/Footer/Footers';
import LandingPage from '../components/LandingPage/LandingPage';


const Home = () => {
    return (
        <div>
            <LandingPage />
    <AboutUs />
    <Partners />
    <Footer />
        </div>
    )
}

export default Home