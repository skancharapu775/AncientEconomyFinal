import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation'
import Home from './pages/Home'
import Weather from './pages/Weather'
import GrainArticle from './pages/GrainArticle'
import JustPrice from './pages/JustPrice'
import Connections from './pages/Connections'
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
        </Routes>
      </div>
    </Router>
  )
}

export default App
