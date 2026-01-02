import React from 'react'
import HeroSection from '../Component/HeroSection'
import Section1 from '../Component/Section1'
import Section2 from '../Component/Section2'
import SliderBanner from '../Component/SliderBanner'
import RecommedSection from '../Component/RecommedSection'
import ExtraSection from '../Component/ExtraSection'
import Newslette from '../Component/Newslette'

const Home = () => {
  return (
    <div>
      <HeroSection />
      <Section1/>
      <Section2 />
      <SliderBanner />
      <RecommedSection />
      <ExtraSection />
      <Newslette/>
    </div>
  )
}

export default Home
