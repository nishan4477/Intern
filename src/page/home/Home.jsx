import React from 'react'
import './home.scss'
import Hero from '../../component/Hero'

import Campaigns from '../../component/Campaigns'
import Who from '../../component/Who'
import LogoSlider from '../../component/LogoSlider'
import News from '../../component/News'
import LatestResources from '../../component/LatestResources'
import ContactUs from '../../component/ContactUs'
import Footer from '../../component/Footer'

const Home = () => {
  return (
    <>
    <Hero/>
    <Campaigns/>
    <Who/>
    <LogoSlider/>
    <News/>
    <LatestResources/>
    <ContactUs/>
    <Footer/>
    
    </>
  )
}

export default Home