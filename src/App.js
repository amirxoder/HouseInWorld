import React, { useState } from 'react';
import DropDown from './Components/DropDown';
import Hero from './Components/Hero';
import InfoSection from './Components/InfoSection';
import Navbar from './Components/Navbar';
import { SliderData } from './Data/SliderData';
import { GlobalStyle } from './globalStyle';
import { DataInfo } from './Data/InfoData';




function App() {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <GlobalStyle />
      <Navbar toggle={toggle} />
      <DropDown isOpen={isOpen} toggle={toggle} />
      <Hero slides={SliderData} />
      <InfoSection {...DataInfo} />
    </>
  );
}

export default App;
