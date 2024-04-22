import React from 'react'
import TextComponent from './components/TextComponent.js'
import MainHeading from './components/MainHeading.js'
import ButtonComponent from './components/ButtonComponent.js'
import Slider from './components/SlideShow.js'
import './App.css'

const App = () => {
  return (
    <>
      <MainHeading />
      <div className='main-container'>
        <TextComponent />
        <Slider />
      </div>
      <ButtonComponent />
    </>
  )
}

export default App