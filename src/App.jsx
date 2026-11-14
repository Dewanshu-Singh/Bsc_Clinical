import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Overview from './components/Overview'
import Curriculum from './components/Curriculum'
import WhyChoose from './components/WhyChoose'
import RCIAdvantage from './components/RCIAdvantage'
import CareerOpportunities from './components/CareerOpportunities'
import CourseDetails from './components/CourseDetails'
import OurCampus from './components/OurCampus'
import FAQs from './components/FAQs'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Overview />
      <Curriculum />
      <WhyChoose />
      <RCIAdvantage />
      <CareerOpportunities />
      <CourseDetails />
      <OurCampus />
      <FAQs />
      <Footer />
    </>
  )
}

export default App
