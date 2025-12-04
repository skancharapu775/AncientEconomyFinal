import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation'
import Home from './pages/Home'
import Weather from './pages/Weather'
import GrainArticle from './pages/GrainArticle'
import JustPrice from './pages/JustPrice'
import Connections from './games/Connections'
import Articles from './pages/Articles'
import Lending from './pages/Lending'
import Games from './pages/Games'
import Wordle from './games/Wordle'
import Crossword from './games/Crossword'
import Measurments from  './pages/Measurements'
import './App.css'

function App() {
  return (
    <Router>
      <div className="app">
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/weather" element={<Weather />} />
          <Route path="/grain" element={<GrainArticle />} />
          <Route path="/justprice" element={<JustPrice />} />
          <Route path="/connections" element={<Connections />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/lending" element={<Lending />} />
          <Route path="/games" element={<Games />} />
          <Route path="/wordle" element={<Wordle />} />
          <Route path="/crossword" element={<Crossword />} />
          <Route path="/measurements" element={<Measurments />} />
          
        </Routes>
      </div>
    </Router>
  )
}

export default App
