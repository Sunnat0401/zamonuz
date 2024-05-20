import React from 'react'
import Navbar from './Component/Navbar/Navbar'
import HomePages from './Pages/HomePages/HomePages'
import Offers from './Pages/Offers/Offers'
import Help from './Pages/Help/Help'
import About from './Pages/HomePages/About/About'
import Countries from './Pages/Countries/Countries'
import Adress from './Pages/Adress/Adress'

const App = () => {
  return (
    <>
    <HomePages/>
    <Offers/>
    <Help/>
    <About/>
    <Countries/>
    <Adress/>
    </>
    )
}

export default App