import React from 'react'
import Home from './Home'
import ScrollImage from './ScrollImage'
import HorizontalScrollText from './HorizontalScrollText'
import ScrollStripTrext from './ScrollStripText'
import StartupAnimation from './StartupAnimation'
import Footer from './Footer'
import Header from './Header'
import ImageHoverAnimation from './ImageHoverAnimation/ImageHoverAnimation'

const Hero = () => {
  return (
    <div className="bg-[#151414] text-white text-8xl min-h-screen overflow-hidden">
      <Header/>
      <div className="bg-[#F3C77C] overflow-hidden relative">
        <div className='absolute top-0 flex justify-center margin-center h-screen w-screen'>
          <StartupAnimation/>
        </div>
        <Home/>
      </div>
      <div className="min-h-screen w-screen ">
        <ScrollImage/>
      </div>
      <div className='min-h-screen w-screen'>
        <ImageHoverAnimation/>
      </div>
      <div className="min-h-screen ">
        <HorizontalScrollText/>
      </div>
      <div className="min-h-screen flex justify-center items-center">
        <ScrollStripTrext />
      </div>
      <div>
        <Footer/>
      </div>
    </div>
  )
}

export default Hero