import React from 'react'
import { NavBar } from './components/NavBar/NavBar'
import {Routes, Route} from 'react-router-dom'
import { Home } from './pages/Home/Home'
import {Coin} from './pages/Coin/Coin'
import { Footer } from './components/Footer/Footer'

export const App = () => {
  return (
    <div className='app'>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/coin/:coinId' element={<Coin/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}
