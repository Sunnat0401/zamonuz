import React from 'react'
import Navbar from './Component/Navbar/Navbar'
import HomePages from './Pages/HomePages/HomePages'
import Offers from './Pages/Offers/Offers'
import Help from './Pages/Help/Help'
import About from './Pages/HomePages/About/About'

const App = () => {
  return (
    <>
    <HomePages/>
    <Offers/>
    <Help/>
    <About/>
    </>
    )
}

export default App