import React from 'react'
import Navbar from './Component/Navbar/Navbar'
import HomePages from './Pages/HomePages/HomePages'
import Offers from './Pages/Offers/Offers'
import Help from './Pages/Help/Help'
import About from './Pages/About/About'
import Countries from './Pages/Countries/Countries'
import Adress from './Pages/Adress/Adress'
import Favorites from './Pages/Favorites/Favorites'
import Footer from './Component/Footer/Footer'
import { useTranslation } from 'react-i18next'

const App = () => {

  return (
    <>
    <HomePages/>
    {/* <Offers/> */}
    {/* <Help/> */}
    <About/>
    <Countries/>
    <Adress/>
    <Favorites/>
    <Footer/>
    </>
    )
}

export default App