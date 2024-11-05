// src/App.js
import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navbars from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Service from './pages/Service'
import Careers from './pages/Careers'
import Contact from './pages/Contact'
import GoogleFontLoader from 'react-google-font-loader'

function App () {
  return (
    <Router>
      <GoogleFontLoader
        fonts={[
          {
            font: 'Roboto',
            weights: [400, '400i']
          },
          {
            font: 'Roboto Mono',
            weights: [400, 700]
          }
        ]}
        subsets={['cyrillic-ext', 'greek']}
      />

      <Navbars />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/About' element={<About />} />
        <Route path='/Service' element={<Service />} />
        <Route path='/Careers' element={<Careers />} />
        <Route path='/Contact' element={<Contact />} />
      </Routes>
    </Router>
  )
}

export default App
