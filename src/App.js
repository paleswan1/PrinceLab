import React from 'react'

// Components Import
import Navbar from './components/Navbar'
import VideoLanding from './components/VideoLanding'
import FutureBanner from './components/FutureBanner'
import Features from './components/Features'
import Inspiration from './components/Inspiration'

const App = () => {
  return (
    <>
      <Navbar />
      <VideoLanding />
      <FutureBanner />
      <Features />
      <Inspiration />
    </>
  )
}

export default App