import React, {useState} from 'react'
import './home.scss'
import Hero from '../../component/Hero'

import Campaigns from '../../component/Campaigns'
import Who from '../../component/Who'
import LogoSlider from '../../component/LogoSlider'
import News from '../../component/News'
import LatestResources from '../../component/LatestResources'
import ContactUs from '../../component/ContactUs'
import Footer from '../../component/Footer'
import NavBar from '../../component/NavBar'

const Home = () => {

  const [search, setSearch] =useState(false);

  function handleSearch(){
    setSearch(!search);
  }
  return (
    <>
    <NavBar onClickSearch = {handleSearch} />
    <Hero search={search}  onClickSearch = {handleSearch}/>
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