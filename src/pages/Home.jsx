import React, { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import delosImg from '../Images/Delos.jpg'
import './Home.css'

function Home() {
  // State to track which info box is currently visible (tracks the symbol string now)
  const [activeInfo, setActiveInfo] = useState(null)
  // State for Babylonian Barley view toggle
  const [showAllBabylonianPrices, setShowAllBabylonianPrices] = useState(true)

  // Commodity data from historical sources
  const oliveOilData = [
    { year: 400, month: null, price: 3, source: "Aristot. Econ. 2.1347a" },
    { year: 400, month: null, price: 1, source: "CGRN 57" },
    { year: 307, month: null, price: 3.5, source: "Delos" },
    { year: 307, month: null, price: 3.5, source: "Delos" },
    { year: 304, month: 1, price: 4.5, source: "Delos" },
    { year: 304, month: 2, price: 4.5, source: "Delos" },
    { year: 304, month: 2, price: 2.251, source: "Delos" },
    { year: 304, month: 3, price: 4.5, source: "Delos" },
    { year: 304, month: 3, price: 4.5, source: "Delos" },
    { year: 304, month: 8, price: 2.667, source: "Delos" },
    { year: 304, month: 9, price: 1.5, source: "Delos" },
    { year: 300, month: null, price: 4.667, source: "Delos" },
    { year: 281, month: null, price: 2.926, source: "Delos" },
    { year: 279, month: null, price: 2.333, source: "Delos" },
    { year: 279, month: 12, price: 2, source: "Delos" },
    { year: 272, month: 1, price: 1.667, source: "Delos" },
    { year: 272, month: 9, price: 1.833, source: "Delos" },
    { year: 269, month: 3, price: 1.583, source: "Delos" },
    { year: 269, month: 8, price: 0.5, source: "Delos" },
    { year: 269, month: 12, price: 1.5, source: "Delos" },
    { year: 269, month: null, price: 1.333, source: "Delos" },
    { year: 268, month: 7, price: 1.251, source: "Delos" },
    { year: 268, month: 11, price: 2.042, source: "Delos" },
  
    { year: 265, month: null, price: 1.667, source: "Delos" },
    { year: 265, month: null, price: 1.416, source: "Delos" },
    { year: 260, month: null, price: 1.333, source: "Delos" },
    { year: 259, month: 12, price: 1.667, source: "Delos" },
    { year: 250, month: null, price: 1.5, source: "Delos" },
    { year: 250, month: null, price: 1.333, source: "Delos" },
    { year: 250, month: 1, price: 1.333, source: "Delos" },
    { year: 250, month: 2, price: 1.333, source: "Delos" },
    { year: 250, month: 3, price: 1.333, source: "Delos" },
    { year: 250, month: 3, price: 1.333, source: "Delos" },
    { year: 250, month: 4, price: 1.333, source: "Delos" },
    { year: 250, month: 5, price: 2, source: "Delos" },
    { year: 250, month: 6, price: 1.333, source: "Delos" },
    { year: 250, month: 7, price: 1.333, source: "Delos" },
    { year: 250, month: 8, price: 1.333, source: "Delos" },
    { year: 250, month: 9, price: 1.333, source: "Delos" },
    { year: 250, month: 10, price: 1.5, source: "Delos" },
    { year: 250, month: 11, price: 1.5, source: "Delos" },
    { year: 250, month: 12, price: 1.333, source: "Delos" },
    { year: 247, month: 8, price: 1.333, source: "Delos" },
    { year: 247, month: 11, price: 2, source: "Delos" },
    { year: 246, month: 1, price: 1.167, source: "Delos" },
    { year: 246, month: 3, price: 1.167, source: "Delos" },
    { year: 246, month: 3, price: 1.167, source: "Delos" },
  
    { year: 246, month: 4, price: 1.167, source: "Delos" },
    { year: 246, month: 6, price: 1.167, source: "Delos" },
    { year: 246, month: 6, price: 1.167, source: "Delos" }, // intercalary month 6(2)
    { year: 246, month: 7, price: 1.167, source: "Delos" },
    { year: 246, month: 8, price: 1.25, source: "Delos" },
    { year: 246, month: 9, price: 1.25, source: "Delos" },
    { year: 246, month: 10, price: 1.333, source: "Delos" },
    { year: 246, month: 11, price: 1.333, source: "Delos" },
    { year: 246, month: 12, price: 1.333, source: "Delos" },
    { year: 231, month: 2, price: 1.5, source: "Delos" },
    { year: 231, month: 4, price: 1.416, source: "Delos" },
    { year: 231, month: 7, price: 1.416, source: "Delos" },
    { year: 224, month: 1, price: 1.375, source: "Delos" },
    { year: 224, month: 2, price: 1.333, source: "Delos" },
    { year: 224, month: 3, price: 1.333, source: "Delos" },
    { year: 224, month: 4, price: 1.333, source: "Delos" },
    { year: 224, month: 7, price: 1.333, source: "Delos" },
    { year: 224, month: 9, price: 1, source: "Delos" },
    { year: 218, month: 1, price: 1.167, source: "Delos" },
    { year: 218, month: 2, price: 1.167, source: "Delos" },
    { year: 218, month: 3, price: 1.167, source: "Delos" },
    { year: 218, month: 3, price: 1.167, source: "Delos" },
    { year: 218, month: 4, price: 1.167, source: "Delos" },
    { year: 218, month: 5, price: 1.5, source: "Delos" },
  
    { year: 218, month: 6, price: 1.5, source: "Delos" },
    { year: 218, month: 8, price: 1.5, source: "Delos" },
    { year: 200, month: 1, price: 1.333, source: "Delos" },
    { year: 200, month: 2, price: 1.333, source: "Delos" },
    { year: 200, month: 3, price: 1.333, source: "Delos" },
    { year: 200, month: 3, price: 1.5, source: "Delos" },
    { year: 200, month: 4, price: 1.333, source: "Delos" },
    { year: 200, month: 5, price: 1.333, source: "Delos" },
    { year: 200, month: 6, price: 1.333, source: "Delos" },
    { year: 200, month: 7, price: 1.333, source: "Delos" },
    { year: 200, month: 8, price: 1.333, source: "Delos" },
    { year: 200, month: 9, price: 1.333, source: "Delos" },
    { year: 200, month: 10, price: 1.333, source: "Delos" },
    { year: 200, month: 11, price: 1.333, source: "Delos" },
    { year: 200, month: 12, price: 1.333, source: "Delos" },
    { year: 194, month: 1, price: 1.5, source: "Delos" },
    { year: 194, month: 2, price: 1.5, source: "Delos" },
    { year: 194, month: 3, price: 1.5, source: "Delos" },
    { year: 194, month: 4, price: 1.5, source: "Delos" },
    { year: 179, month: 1, price: 1.416, source: "Delos" },
    { year: 179, month: 2, price: 1.333, source: "Delos" },
    { year: 179, month: 3, price: 1.416, source: "Delos" },
    { year: 179, month: 6, price: 1.333, source: "Delos" },
    { year: 179, month: 7, price: 1.333, source: "Delos" },
  
    { year: 179, month: 8, price: 1.333, source: "Delos" },
    { year: 179, month: 9, price: 1.333, source: "Delos" },
    { year: 179, month: 10, price: 1.5, source: "Delos" },
    { year: 179, month: 12, price: 1.416, source: "Delos" },
    { year: 178, month: 7, price: 1.375, source: "Delos" },
    { year: 178, month: 12, price: 8, source: "Delos" },
    { year: 174, month: 1, price: 1.25, source: "Delos" },
    { year: 174, month: 2, price: 1.333, source: "Delos" },
    { year: 174, month: 4, price: 1.083, source: "Delos" },
    { year: 174, month: 5, price: 1.25, source: "Delos" },
    { year: 174, month: 6, price: 1.083, source: "Delos" },
    { year: 174, month: 6, price: 1.083, source: "Delos" }, // intercalary month 6(2)
    { year: 174, month: 7, price: 1.083, source: "Delos" },
    { year: 174, month: 8, price: 1.083, source: "Delos" },
    { year: 174, month: 9, price: 1, source: "Delos" },
    { year: 174, month: 11, price: 0.916, source: "Delos" },
    { year: 174, month: 12, price: 2, source: "Delos" },
    { year: 174, month: null, price: 3, source: "Delos" },
    { year: 173, month: 4, price: 0.944, source: "Delos" },
    { year: 170, month: 11, price: 1.25, source: "Delos" },
    { year: 169, month: 4, price: 1.833, source: "Delos" },
    { year: 169, month: 8, price: 1.833, source: "Delos" },
    { year: 169, month: 12, price: 1.833, source: "Delos" },
  ]

  const pigData = [
    { year: 410, month: null, price: 3, source: "Sacrificial Calendar of Athens AIO 1189" },
    { year: 375, month: null, price: 3, source: "The sacrificial calendar of the Marathonian Tetrapolis SEG 50.168" },
    { year: 302, month: 8, price: 5, source: "Delos" },
    { year: 302, month: null, price: 5, source: "Delos" },
    { year: 301, month: null, price: 7, source: "Delos" },
    { year: 301, month: null, price: 7, source: "Delos" },
    { year: 301, month: null, price: 7, source: "Delos" },
    { year: 297, month: null, price: 8, source: "Delos" },
    { year: 281, month: null, price: 3.667, source: "Delos" },
    { year: 281, month: null, price: 2.667, source: "Delos" },
    { year: 277, month: null, price: 2.5, source: "Delos" },
    { year: 277, month: null, price: 3, source: "Delos" },
    { year: 276, month: null, price: 4, source: "Delos" },
    { year: 274, month: null, price: 3, source: "Delos" },
    { year: 269, month: 1, price: 2, source: "Delos" },
    { year: 269, month: 2, price: 2.75, source: "Delos" },
    { year: 269, month: 3, price: 3, source: "Delos" },
    { year: 269, month: 4, price: 3.5, source: "Delos" },
    { year: 269, month: 4, price: 3.5, source: "Delos" },
    { year: 269, month: 5, price: 3.5, source: "Delos" },
    { year: 269, month: 6, price: 3.5, source: "Delos" },
    { year: 269, month: 7, price: 3, source: "Delos" },
    { year: 269, month: 8, price: 4.5, source: "Delos" },
  
    { year: 269, month: 8, price: 4, source: "Delos" },
    { year: 269, month: 9, price: 3.167, source: "Delos" },
    { year: 269, month: 10, price: 4, source: "Delos" },
    { year: 269, month: 11, price: 4, source: "Delos" },
    { year: 269, month: 12, price: 4.5, source: "Delos" },
    { year: 268, month: 9, price: 3.5, source: "Delos" },
    { year: 268, month: 12, price: 3, source: "Delos" },
    { year: 265, month: null, price: 2, source: "Delos" },
    { year: 250, month: 1, price: 1.833, source: "Delos" },
    { year: 250, month: 2, price: 1.5, source: "Delos" },
    { year: 250, month: 3, price: 2, source: "Delos" },
    { year: 250, month: 4, price: 1.833, source: "Delos" },
    { year: 250, month: 4, price: 2.25, source: "Delos" },
    { year: 250, month: 5, price: 2, source: "Delos" },
    { year: 250, month: 6, price: 1.833, source: "Delos" },
    { year: 250, month: 7, price: 1.833, source: "Delos" },
    { year: 250, month: 8, price: 2, source: "Delos" },
    { year: 250, month: 8, price: 2.333, source: "Delos" },
    { year: 250, month: 9, price: 1.667, source: "Delos" },
    { year: 250, month: 10, price: 1.833, source: "Delos" },
    { year: 250, month: 11, price: 2.5, source: "Delos" },
    { year: 250, month: 12, price: 2, source: "Delos" },
    { year: 247, month: 7, price: 2.5, source: "Delos" },
    { year: 247, month: 8, price: 2.5, source: "Delos" },
  
    { year: 247, month: 12, price: 2.333, source: "Delos" },
    { year: 246, month: 1, price: 1.416, source: "Delos" },
    { year: 246, month: 4, price: 0.333, source: "Delos" },
    { year: 246, month: 6, price: 1.5, source: "Delos" },
    { year: 246, month: 6, price: 2.5, source: "Delos" },
    { year: 246, month: 7, price: 1.583, source: "Delos" },
    { year: 246, month: 8, price: 2.5, source: "Delos" },
    { year: 246, month: 8, price: 4.25, source: "Delos" },
    { year: 246, month: 9, price: 1.667, source: "Delos" },
    { year: 246, month: 10, price: 2, source: "Delos" },
    { year: 246, month: 11, price: 3, source: "Delos" },
    { year: 246, month: 12, price: 2.333, source: "Delos" },
    { year: 246, month: 12, price: 2, source: "Delos" },
    { year: 233, month: 4, price: 3, source: "Delos" },
    { year: 231, month: 2, price: 3, source: "Delos" },
    { year: 231, month: 3, price: 3.167, source: "Delos" },
    { year: 231, month: 4, price: 2.5, source: "Delos" },
    { year: 231, month: 5, price: 2.5, source: "Delos" },
    { year: 231, month: 7, price: 3.833, source: "Delos" },
    { year: 224, month: 1, price: 3.5, source: "Delos" },
    { year: 224, month: 2, price: 3, source: "Delos" },
    { year: 224, month: 3, price: 3.333, source: "Delos" },
    { year: 224, month: 4, price: 3.916, source: "Delos" },
    { year: 224, month: 5, price: 3, source: "Delos" },
  
    { year: 224, month: 7, price: 4.667, source: "Delos" },
    { year: 224, month: 9, price: 4, source: "Delos" },
    { year: 218, month: 1, price: 3.333, source: "Delos" },
    { year: 218, month: 2, price: 3.333, source: "Delos" },
    { year: 218, month: 3, price: 3.333, source: "Delos" },
    { year: 218, month: 4, price: 3.5, source: "Delos" },
    { year: 218, month: 4, price: 3.5, source: "Delos" },
    { year: 218, month: 5, price: 3.333, source: "Delos" },
    { year: 218, month: 6, price: 3.5, source: "Delos" },
    { year: 218, month: 8, price: 3.5, source: "Delos" },
    { year: 200, month: 1, price: 4.167, source: "Delos" },
    { year: 200, month: 2, price: 3.667, source: "Delos" },
    { year: 200, month: 2, price: 6, source: "Delos" },
    { year: 200, month: 3, price: 3.833, source: "Delos" },
    { year: 200, month: 4, price: 3.667, source: "Delos" },
    { year: 200, month: 5, price: 3, source: "Delos" },
    { year: 200, month: 6, price: 4, source: "Delos" },
    { year: 200, month: 7, price: 4, source: "Delos" },
    { year: 200, month: 8, price: 4, source: "Delos" },
    { year: 200, month: 9, price: 4.333, source: "Delos" },
    { year: 200, month: 10, price: 3.5, source: "Delos" },
    { year: 200, month: 11, price: 3.5, source: "Delos" },
    { year: 200, month: 12, price: 3.5, source: "Delos" },
    { year: 194, month: 1, price: 4.5, source: "Delos" },
  
    { year: 194, month: 2, price: 2.667, source: "Delos" },
    { year: 194, month: 3, price: 4.5, source: "Delos" },
    { year: 194, month: 4, price: 4, source: "Delos" },
    { year: 179, month: 2, price: 4.833, source: "Delos" },
    { year: 179, month: 4, price: 4.5, source: "Delos" },
    { year: 179, month: 5, price: 4, source: "Delos" },
    { year: 179, month: 6, price: 4, source: "Delos" },
    { year: 179, month: 8, price: 4.5, source: "Delos" },
    { year: 177, month: 8, price: 4.916, source: "Delos" },
    { year: 174, month: 1, price: 4.5, source: "Delos" },
    { year: 174, month: 3, price: 3, source: "Delos" },
    { year: 174, month: 4, price: 3.5, source: "Delos" },
    { year: 174, month: 5, price: 3, source: "Delos" },
    { year: 174, month: 6, price: 3, source: "Delos" },
    { year: 174, month: 7, price: 3, source: "Delos" },
    { year: 174, month: 8, price: 4, source: "Delos" },
    { year: 174, month: 8, price: 5, source: "Delos" },
    { year: 174, month: 8, price: 5, source: "Delos" },
    { year: 174, month: 10, price: 3, source: "Delos" },
    { year: 174, month: 11, price: 3, source: "Delos" },
    { year: 174, month: 11, price: 5, source: "Delos" },
    { year: 174, month: 12, price: 4, source: "Delos" },
    { year: 173, month: 10, price: 3.833, source: "Delos" },
    { year: 173, month: 11, price: 3.833, source: "Delos" },
  
    { year: 171, month: 8, price: 6, source: "Delos" },
    { year: 171, month: 11, price: 3, source: "Delos" },
    { year: 171, month: 12, price: 5, source: "Delos" },
    { year: 170, month: 1, price: 4.667, source: "Delos" },
    { year: 170, month: 8, price: 4, source: "Delos" },
    { year: 169, month: 6, price: 4.5, source: "Delos" },
    { year: 169, month: 8, price: 4.667, source: "Delos" },
    { year: 169, month: 8, price: 5, source: "Delos" },
    { year: 169, month: 12, price: 5, source: "Delos" },
    { year: 170, month: null, price: 10.333, source: "Delos" },
  ]

  const barleyData = [
    { year: 430, month: null, price: 2, source: "Athens" },
    { year: 410, month: null, price: 4, source: "Athens" }, 
    { year: 400, month: null, price: 4, source: "Athens" },
    { year: 405, month: null, price: 3, source: "Athens" }, 
    { year: 360, month: null, price: 1.917, source: "Delphi" },
    { year: 330, month: null, price: 5, source: "Athens" },
    { year: 329, month: null, price: 3, source: "Eleusis" },
    { year: 329, month: null, price: 3.833, source: "Eleusis" }, 
    { year: 282, month: 10, price: 4, source: "Delos" },
    { year: 282, month: 11, price: 5, source: "Delos" },
    { year: 282, month: 12, price: 5, source: "Delos" },
    { year: 258, month: 2, price: 3, source: "Delos" },
    { year: 250, month: 1, price: 3.333, source: "Delos" },
    { year: 250, month: 5, price: 3.223, source: "Delos" },
    { year: 250, month: 6, price: 3, source: "Delos" },
    { year: 250, month: 7, price: 2.667, source: "Delos" },
    { year: 250, month: 8, price: 2.333, source: "Delos" },
    { year: 250, month: 9, price: 2, source: "Delos" },
    { year: 247, month: 8, price: 2.5, source: "Delos" },
    { year: 247, month: 11, price: 2.25, source: "Delos" },
    { year: 246, month: 7, price: 4, source: "Delos" },
    { year: 246, month: 10, price: 4, source: "Delos" },
    { year: 224, month: 5, price: 2, source: "Delos" },
    { year: 179, month: 12, price: 4, source: "Delos" },
    { year: 178, month: 12, price: 3.75, source: "Delos" },
    { year: 177, month: 12, price: 4, source: "Delos" },
    { year: 174, month: 12, price: 4, source: "Delos" }
  ]

  // Babylonian Barley data - 4 prices per decade (lowest, 2nd lowest, 2nd highest, highest)
  const babylonianBarleyRaw = [
    { decade: "299–290", year: 295, prices: [0.517, 0.625, 0.750, 1.333] },
    { decade: "289–280", year: 285, prices: [0.625, 0.850, 3.733, 4.150] },
    { decade: "279–270", year: 275, prices: [0.417, 0.717, 1.167, 3.108] },
    { decade: "269–260", year: 265, prices: [0.667, 1.242, 2.192, 2.492] },
    { decade: "259–250", year: 255, prices: [0.467, 0.625, 3.108, 4.667] },
    { decade: "249–240", year: 245, prices: [0.433, 0.500, 2.492, 3.117] },
    { decade: "239–230", year: 235, prices: [0.675, 0.833, 3.733, 4.150] },
    { decade: "229–220", year: 225, prices: [0.567, 0.833, 1.100, 1.558] },
    { decade: "219–210", year: 215, prices: [0.625, 0.892, 0.892, 1.242] },
    { decade: "209–200", year: 205, prices: [0.500, 0.517, 1.242, 2.333] },
    { decade: "199–190", year: 195, prices: [0.392, 0.625, 1.558, 2.192] },
    { decade: "189–180", year: 185, prices: [0.283, 0.467, 1.333, 1.867] },
    { decade: "179–170", year: 175, prices: [0.633, 0.717, 1.433, 1.833] },
    { decade: "169–160", year: 165, prices: [0.292, 0.300, 1.242, 1.625] },
    { decade: "159–150", year: 155, prices: [0.750, 0.850, 1.242, 2.142] },
    { decade: "149–140", year: 145, prices: [0.542, 0.667, 1.333, 1.700] },
    { decade: "139–130", year: 135, prices: [0.833, 0.850, 2.333, 2.667] },
    { decade: "129–120", year: 125, prices: [1.242, 1.283, 6.217, 12.442] },
    { decade: "119–110", year: 115, prices: [0.533, 1.400, 1.400, 4.667] },
    { decade: "109–100", year: 105, prices: [0.933, 0.933, 2.333, 4.142] },
    { decade: "99–90", year: 95, prices: [1.033, 1.100, 2.242, 3.925] },
    { decade: "89–80", year: 85, prices: [1.658, 2.800, 4.975, 31.992] },
    { decade: "79–70", year: 75, prices: [2.317, 2.492, 2.800, 2.958] },
    { decade: "69–60", year: 65, prices: [3.442, 3.442, 3.583, 3.583] }
  ]

  const getSortableDate = (d) => {
    const monthOffset = d.month ? (d.month - 1) / 12 : 0
    return -d.year + monthOffset
  }

  const processData = (rawData) => {
    return rawData
      .map(d => ({
        ...d,
        timeValue: getSortableDate(d),
        displayDate: `${d.year} BC${d.month ? `, M${d.month}` : ''}`
      }))
      .sort((a, b) => a.timeValue - b.timeValue)
  }

  // Process Babylonian data into format for chart
  const babylonianBarleyData = useMemo(() => {
    if (showAllBabylonianPrices) {
      // Create a combined dataset with all 4 prices per decade
      const combinedData = babylonianBarleyRaw.map(decade => {
        const timeValue = getSortableDate({ year: decade.year, month: null })
        return {
          year: decade.year,
          month: null,
          timeValue: timeValue,
          displayDate: `${decade.year} BC`,
          decade: decade.decade,
          lowest: decade.prices[0],
          secondLowest: decade.prices[1],
          secondHighest: decade.prices[2],
          highest: decade.prices[3],
          source: "Babylonian Astronomical Diaries"
        }
      })
      return combinedData.sort((a, b) => a.timeValue - b.timeValue)
    } else {
      // Show average of all 4 prices
      const avgData = babylonianBarleyRaw.map(decade => {
        const avg = (decade.prices[0] + decade.prices[1] + decade.prices[2] + decade.prices[3]) / 4
        return {
          year: decade.year,
          month: null,
          price: avg,
          source: "Babylonian Astronomical Diaries",
          type: "average",
          decade: decade.decade
        }
      })
      return processData(avgData)
    }
  }, [showAllBabylonianPrices])

  const wheatData = [
    { year: 415, month: null, price: 6.5, source: "Athens" },
    { year: 415, month: null, price: 6, source: "Athens" },
    { year: 415, month: null, price: 6.333, source: "Athens" },
    { year: 392, month: null, price: 3, source: "Athens" },
    { year: 390, month: null, price: 6, source: "Athens" }, 
    { year: 335, month: null, price: 16, source: "Athens" },
    { year: 334, month: null, price: 5, source: "Athens" },
    { year: 330, month: null, price: 9, source: "Athens" }, 
    { year: 330, month: null, price: 5, source: "Athens" },
    { year: 329, month: null, price: 5, source: "Eleusis" }, 
    { year: 329, month: null, price: 6, source: "Eleusis" }, 
    { year: 324, month: null, price: 5, source: "Athens" },
    { year: 282, month: 1, price: 7, source: "Delos" },
    { year: 282, month: 2, price: 6.5, source: "Delos" },
    { year: 282, month: 3, price: 6, source: "Delos" },
    { year: 282, month: 4, price: 4.5, source: "Delos" },
    { year: 282, month: 5, price: 6.833, source: "Delos" },
    { year: 282, month: 8, price: 7, source: "Delos" },
    { year: 282, month: 9, price: 10, source: "Delos" },
    { year: 190, month: 12, price: 10, source: "Delos" },
    { year: 178, month: 12, price: 10, source: "Delos" },
    { year: 174, month: 12, price: 11, source: "Delos" },
    { year: 169, month: 12, price: 10, source: "Delos" }
  ]

  const egyptianWheatData = [
    { year: 270, month: null, price: 2.01, source: "Egyptian Prices" },
    { year: 250, month: null, price: 2.74, source: "Egyptian Prices" },
    { year: 245, month: null, price: 2.90, source: "Egyptian Prices" },
    { year: 195, month: null, price: 2.50, source: "Egyptian Prices" },
    { year: 160, month: null, price: 3.14, source: "Egyptian Prices" },
    { year: 130, month: null, price: 1.61, source: "Egyptian Prices" },
    { year: 120, month: null, price: 1.93, source: "Egyptian Prices" },
    { year: 110, month: null, price: 2.50, source: "Egyptian Prices" },
    { year: 105, month: null, price: 1.77, source: "Egyptian Prices" },
    { year: 100, month: null, price: 2.82, source: "Egyptian Prices" },
    { year: 95, month: null, price: 2.42, source: "Egyptian Prices" },
    { year: 90, month: null, price: 3.22, source: "Egyptian Prices" },
    { year: 75, month: null, price: 3.54, source: "Egyptian Prices" },
    { year: 72, month: null, price: 1.29, source: "Egyptian Prices" },
  ]

  const formatBCTick = (val) => {
    const year = Math.floor(Math.abs(val))
    return `${year} BC`
  }

  const commodities = useMemo(() => {
    const wheat = {
      name: "Wheat (Delos)",
      symbol: "WHT-ARC",
      data: processData(wheatData),
      color: "#f97316",
      unit: "Drachmas / Medimnos",
      description: "The first few price points are taken from a compliation of Classical sources(see Rathbone in our sources), the Hellenistic prices are of course from Delos."
    }

    const barley = {
      name: "Barley (Delos)",
      symbol: "BRLY-ARC",
      data: processData(barleyData),
      color: "#eab308",
      unit: "Drachmas / Medimnos",
      description: "The first few price points are taken from a compliation of Classical sources(see Rathbone in our sources), the Hellenistic prices are of course from Delos."
    }

    const oil = {
      name: "Olive Oil (Delos)",
      symbol: "OIL-ARC",
      data: processData(oliveOilData),
      color: "#65a30d",
      unit: "Drachmas / Khous",
      description: "The first price is from Oeconomics and refers to Lampsakos, the second is from an Athenian inscription listing the value of different sacrifices(see our sources). The rest are from Delos."
    }

    const pig = {
      name: "Livestock (Pigs) (Delos)",
      symbol: "PIG-ARC",
      data: processData(pigData),
      color: "#ec4899",
      unit: "Drachmas / Animal",
      description: "Note that these are piglet prices; piglets were not consumed, but instead sacrificed. The first two prices are from an Athenian sacrficial calendar, the rest are from Delos."
    }

     const egyptianWheat = {
       name: "Egyptian Wheat",
       symbol: "EGWHT-ARC",
       data: processData(egyptianWheatData),
       color: "#dc2626",
       unit: "Drachmas / Artaba (29 kg)",
       description: "Egypt was the breadbasket of the ancient Mediterranean."
     }

     const babylonianBarley = {
       name: "Barley (Babylon)",
       symbol: "BRLY-BAB",
       data: babylonianBarleyData,
       color: "#eab308",
       unit: "Drachmas / Medimnos",
       description: "Price data from Babylonian Astronomical Diaries. Each decade shows four prices: lowest, 2nd lowest, 2nd highest, and highest recorded prices for that period.",
       isBabylonian: true
     }

     // Return separated lists
     return {
       delos: [wheat, barley, oil, pig],
       egypt: [egyptianWheat],
       babylon: [babylonianBarley]
     }
  }, [babylonianBarleyData])

  const getLatestPrice = (data) => {
    if (!data || data.length === 0) return { price: 0 }
    return data[data.length - 1]
  }

  const getPreviousPrice = (data) => {
    if (!data || data.length === 0) return { price: 0 }
    return data.length > 1 ? data[data.length - 2] : data[data.length - 1]
  }

  const getPriceChange = (data) => {
    if (!data || data.length === 0) return 0
    const latest = getLatestPrice(data)
    const previous = getPreviousPrice(data)
    // Handle Babylonian data structure
    const latestPrice = latest.price !== undefined ? latest.price : 
                       (latest.lowest !== undefined ? (latest.lowest + latest.secondLowest + latest.secondHighest + latest.highest) / 4 : 0)
    const previousPrice = previous.price !== undefined ? previous.price : 
                         (previous.lowest !== undefined ? (previous.lowest + previous.secondLowest + previous.secondHighest + previous.highest) / 4 : 0)
    return latestPrice - previousPrice
  }

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload
      // For Babylonian data with multiple lines, show the specific price being hovered
      const priceValue = payload[0].value || data.price
      return (
        <div className="custom-tooltip">
          <p className="tooltip-date">{data.displayDate || `${Math.abs(Math.floor(label))} BC`}</p>
          {data.decade && <p className="tooltip-decade">Decade: {data.decade} BCE</p>}
          <p className="tooltip-price">
            Price: <span className="tooltip-value">{priceValue.toFixed(3)}</span>
          </p>
          {payload[0].name && <p className="tooltip-name">{payload[0].name}</p>}
          <p className="tooltip-source">Source: {data.source || "Babylonian Astronomical Diaries"}</p>
        </div>
      )
    }
    return null
  }

  // Helper function to render a single card to avoid code duplication
  const renderCommodityCard = (commodity) => {
    const latest = getLatestPrice(commodity.data)
    const previous = getPreviousPrice(commodity.data)
    const change = getPriceChange(commodity.data)
    const isPositive = change >= 0
    const percentChange = ((change / (previous.price !== undefined ? previous.price : (previous.lowest + previous.secondLowest + previous.secondHighest + previous.highest) / 4)) * 100).toFixed(1)
    // For Babylonian data, calculate average for latest price display
    let displayLatest = latest
    if (commodity.isBabylonian && showAllBabylonianPrices) {
      // Calculate average from the 4 price lines
      const latestData = commodity.data[commodity.data.length - 1]
      if (latestData && latestData.lowest !== undefined) {
        const avg = (latestData.lowest + latestData.secondLowest + latestData.secondHighest + latestData.highest) / 4
        displayLatest = { ...latestData, price: avg }
      }
    } else if (commodity.isBabylonian && !showAllBabylonianPrices) {
      displayLatest = latest
    }

    return (
      <div 
        key={commodity.symbol} 
        className="commodity-card"
        style={{ position: 'relative' }}
      >
        {/* --- Info Icon & Tooltip Start --- */}
        <div 
          className="info-icon-container"
          onMouseEnter={() => setActiveInfo(commodity.symbol)}
          onMouseLeave={() => setActiveInfo(null)}
          style={{
            position: 'absolute',
            top: '12px',
            right: '12px',
            zIndex: 10,
            cursor: 'pointer'
          }}
        >
          <div style={{
            width: '20px',
            height: '20px',
            borderRadius: '50%',
            backgroundColor: '#8B7355',
            color: '#f4e8d0',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '12px',
            fontWeight: 'bold',
            fontFamily: 'serif',
            boxShadow: '0 1px 3px rgba(0,0,0,0.2)'
          }}>
            i
          </div>
          
          {activeInfo === commodity.symbol && (
            <div style={{
              position: 'absolute',
              top: '25px',
              right: '0',
              width: '200px',
              backgroundColor: '#fdfbf7',
              border: '1px solid #8B7355',
              padding: '10px',
              borderRadius: '4px',
              boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
              zIndex: 20
            }}>
              <p style={{ 
                fontSize: '12px', 
                color: '#333', 
                margin: 0,
                lineHeight: '1.4'
              }}>
                {commodity.description}
              </p>
            </div>
          )}
        </div>
        {/* --- Info Icon & Tooltip End --- */}

        <div className="commodity-header">
          <div>
            <h3 className="commodity-name">{commodity.name}</h3>
            <span className="commodity-symbol">{commodity.symbol}</span>
          </div>
          <div className="commodity-price-info">
            <div className="commodity-price">{displayLatest.price.toFixed(2)}</div>
            <div className={`commodity-change ${isPositive ? 'positive' : 'negative'}`}>
              {isPositive ? '+' : ''}{change.toFixed(2)} ({isPositive ? '+' : ''}{percentChange}%)
            </div>
          </div>
        </div>
        <div className="commodity-unit">{commodity.unit}</div>
        
        <div className="chart-container">
          <ResponsiveContainer width="100%" height={200}>
            <LineChart 
              data={commodity.data} 
              margin={{ top: 5, right: 5, left: 0, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#D2B48C" opacity={0.3} />
              <XAxis 
                dataKey="timeValue" 
                tickFormatter={formatBCTick} 
                type="number" 
                domain={['dataMin', 'dataMax']}
                tick={{fill: '#5A5A5A', fontSize: 10}}
                tickLine={false}
                axisLine={{ stroke: '#8B7355', strokeWidth: 1 }}
                dy={5}
              />
              <YAxis 
                tick={{fill: '#5A5A5A', fontSize: 10}}
                tickLine={false}
                axisLine={false}
                domain={['auto', 'auto']}
              />
              <Tooltip content={<CustomTooltip />} cursor={{ stroke: '#8B7355', strokeWidth: 1, strokeDasharray: '3 3' }} />
              {commodity.isBabylonian && showAllBabylonianPrices ? (
                // Show 4 separate lines for Babylonian data
                <>
                  <Line 
                    type="monotone" 
                    dataKey="lowest" 
                    stroke="#991b1b" 
                    strokeWidth={1.5}
                    dot={{ r: 2, fill: '#991b1b' }}
                    name="Lowest"
                  />
                  <Line 
                    type="monotone" 
                    dataKey="secondLowest" 
                    stroke="#dc2626" 
                    strokeWidth={1.5}
                    dot={{ r: 2, fill: '#dc2626' }}
                    name="2nd Lowest"
                  />
                  <Line 
                    type="monotone" 
                    dataKey="secondHighest" 
                    stroke="#f97316" 
                    strokeWidth={1.5}
                    dot={{ r: 2, fill: '#f97316' }}
                    name="2nd Highest"
                  />
                  <Line 
                    type="monotone" 
                    dataKey="highest" 
                    stroke="#ea580c" 
                    strokeWidth={1.5}
                    dot={{ r: 2, fill: '#ea580c' }}
                    name="Highest"
                  />
                </>
              ) : (
                <Line 
                  type="monotone" 
                  dataKey="price" 
                  stroke={commodity.color} 
                  strokeWidth={2} 
                  dot={{ r: 3, fill: commodity.color, strokeWidth: 1, stroke: '#f4e8d0' }} 
                  activeDot={{ r: 5, strokeWidth: 0 }}
                  animationDuration={500}
                />
              )}
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    )
  }

  return (
    <div className="home-page">
      <div className="home-container">
        <header className="home-header">
          <h1>The Athenian Daily</h1>
          <p className="subtitle">Financial News & Market Intelligence</p>
        </header>

        <div className="market-overview">
          <h2>Market Overview</h2>

          {/* WARNING BANNER */}
          <Link to="/justprice" style={{ textDecoration: 'none' }}>
            <div style={{
              backgroundColor: '#fff3cd',
              border: '1px solid #856404',
              color: '#856404',
              padding: '15px',
              borderRadius: '8px',
              marginBottom: '30px',
              display: 'flex',
              alignItems: 'center',
              gap: '15px',
              cursor: 'pointer',
              transition: 'background-color 0.2s ease'
            }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#ffeeba'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#fff3cd'}
            >
              <div style={{ fontSize: '24px' }}>⚠️</div>
              <div>
                <strong>Caveat Emptor!</strong> Watch out! Don't get too invested in predicting these prices. 
                Remember that all these commodities have a <u>Just Price</u>!
              </div>
            </div>
          </Link>

          {/* Hellenistic Greece Section */}
          <div style={{ marginTop: '30px', marginBottom: '40px' }}>
            <h3 style={{ 
              color: '#8B7355', 
              borderBottom: '1px solid #D2B48C', 
              paddingBottom: '10px', 
              marginBottom: '20px',
              fontFamily: 'serif'
            }}>
              Hellenistic Greece
            </h3>
            
            {/* Delos Box Container */}
            <div style={{ 
              backgroundColor: 'rgba(255, 255, 255, 0.5)', 
              border: '1px solid #D2B48C', 
              borderRadius: '8px',
              padding: '20px'
            }}>
              
              {/* Delos Header with Image */}
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '25px', gap: '20px' }}>
                <div style={{ 
                  width: '120px', 
                  height: '120px', 
                  borderRadius: '50%', 
                  overflow: 'hidden', 
                  border: '3px solid #8B7355',
                  flexShrink: 0
                }}>
                  <img 
                    src={delosImg} 
                    alt="Island of Delos" 
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </div>
                <div>
                  <h4 style={{ margin: '0 0 10px 0', fontSize: '1.5rem', color: '#5A4A35' }}>Delos</h4>
                  <p style={{ margin: 0, maxWidth: '600px', lineHeight: '1.5', color: '#4a4a4a' }}>
                    Delos is a small island which bore significance in the Hellenstic world due to its religious significance; the Gods Appolo and Artemis were both said to be born at Delos. As such, there was a sanctuary on the island, and from 314 BC to 167 BC the keepers of the sanctuary kept extensive records. These records are one of the few economic time series which we have from the Hellenistic era, and are hence the subject of extensive economic analysis.
                  </p>
                </div>
              </div>

              {/* Delos Graphs Grid */}
              <div className="commodities-grid">
                {commodities.delos.map(commodity => renderCommodityCard(commodity))}
              </div>
            </div>
          </div>

           {/* Ancient Egypt Section */}
           <div style={{ marginTop: '30px', marginBottom: '40px' }}>
             <h3 style={{ 
               color: '#8B7355', 
               borderBottom: '1px solid #D2B48C', 
               paddingBottom: '10px', 
               marginBottom: '20px',
               fontFamily: 'serif'
             }}>
               Ancient Egypt
             </h3>
             
             <div style={{ 
               backgroundColor: 'rgba(255, 255, 255, 0.5)', 
               border: '1px solid #D2B48C', 
               borderRadius: '8px',
               padding: '20px'
             }}>
               {/* Egypt Header with Image */}
               <div style={{ display: 'flex', alignItems: 'center', marginBottom: '25px', gap: '20px' }}>
                 <div style={{ 
                   width: '120px', 
                   height: '120px', 
                   borderRadius: '50%', 
                   overflow: 'hidden', 
                   border: '3px solid #8B7355',
                   flexShrink: 0,
                   backgroundColor: '#D2B48C',
                   display: 'flex',
                   alignItems: 'center',
                   justifyContent: 'center',
                   fontSize: '48px'
                 }}>
                   🌾
                 </div>
                 <div>
                   <h4 style={{ margin: '0 0 10px 0', fontSize: '1.5rem', color: '#5A4A35' }}>Ancient Egypt</h4>
                   <p style={{ margin: 0, maxWidth: '600px', lineHeight: '1.5', color: '#4a4a4a' }}>
                     Egypt was the breadbasket of the ancient Mediterranean world. The fertile Nile Valley produced vast quantities of grain, particularly wheat, which was exported throughout the region. The price data shown here comes from Egyptian papyri, primarily the Zenon Archive, which provides detailed records of grain transactions in the Ptolemaic period. These records offer valuable insights into the economic conditions and price fluctuations in one of the most important agricultural regions of antiquity.
                   </p>
                 </div>
               </div>

               <div className="commodities-grid">
                 {commodities.egypt.map(commodity => renderCommodityCard(commodity))}
               </div>
             </div>
           </div>

           {/* Babylonian Section */}
           <div style={{ marginTop: '30px', marginBottom: '40px' }}>
             <h3 style={{ 
               color: '#8B7355', 
               borderBottom: '1px solid #D2B48C', 
               paddingBottom: '10px', 
               marginBottom: '20px',
               fontFamily: 'serif'
             }}>
               Ancient Babylon
             </h3>
             
             <div style={{ 
               backgroundColor: 'rgba(255, 255, 255, 0.5)', 
               border: '1px solid #D2B48C', 
               borderRadius: '8px',
               padding: '20px'
             }}>
               {/* Babylon Header with Image */}
               <div style={{ display: 'flex', alignItems: 'center', marginBottom: '25px', gap: '20px' }}>
                 <div style={{ 
                   width: '120px', 
                   height: '120px', 
                   borderRadius: '50%', 
                   overflow: 'hidden', 
                   border: '3px solid #8B7355',
                   flexShrink: 0,
                   backgroundColor: '#D2B48C',
                   display: 'flex',
                   alignItems: 'center',
                   justifyContent: 'center',
                   fontSize: '48px'
                 }}>
                   📜
                 </div>
                 <div>
                   <h4 style={{ margin: '0 0 10px 0', fontSize: '1.5rem', color: '#5A4A35' }}>Ancient Babylon</h4>
                   <p style={{ margin: 0, maxWidth: '600px', lineHeight: '1.5', color: '#4a4a4a' }}>
                     The Babylonian Astronomical Diaries are a remarkable collection of cuneiform tablets that record astronomical observations, weather conditions, and commodity prices from ancient Mesopotamia. These diaries, spanning from the 7th to the 1st century BCE, provide one of the longest continuous economic time series from the ancient world. The barley price data shown here represents four price points per decade: the lowest, second lowest, second highest, and highest recorded prices, offering a comprehensive view of price volatility in the Babylonian grain market.
                   </p>
                 </div>
               </div>

               {/* Toggle button for Babylonian data - above the grid */}
               {commodities.babylon.some(c => c.isBabylonian) && (
                 <div style={{ marginBottom: '15px', display: 'flex', justifyContent: 'flex-end' }}>
                   <button
                     onClick={() => setShowAllBabylonianPrices(!showAllBabylonianPrices)}
                     style={{
                       padding: '8px 16px',
                       fontSize: '12px',
                       backgroundColor: showAllBabylonianPrices ? '#8B7355' : '#D2B48C',
                       color: '#f4e8d0',
                       border: '1px solid #8B7355',
                       borderRadius: '4px',
                       cursor: 'pointer',
                       fontFamily: 'serif',
                       transition: 'background-color 0.2s',
                       fontWeight: '500'
                     }}
                     onMouseEnter={(e) => e.currentTarget.style.backgroundColor = showAllBabylonianPrices ? '#6B5B3D' : '#B8A082'}
                     onMouseLeave={(e) => e.currentTarget.style.backgroundColor = showAllBabylonianPrices ? '#8B7355' : '#D2B48C'}
                   >
                     {showAllBabylonianPrices ? 'Show Average' : 'Show All Prices'}
                   </button>
                 </div>
               )}

               <div className="commodities-grid">
                 {commodities.babylon.map(commodity => renderCommodityCard(commodity))}
               </div>
             </div>
           </div>

        </div>

        <div className="features-grid">
          <div className="feature-card">
            <h3>📊 Map</h3>
            <p>
              Interactive map showing grain trade routes, weather patterns, and their impacts 
              on agricultural production and shipping.
            </p>
            <Link to="/weather" className="feature-link">
              View Map →
            </Link>
          </div>

          <div className="feature-card">
            <h3>📰 Market Guide</h3>
            <p>
              Citizen's guide to navigating the grain market: scams to avoid, regulations to know, 
              and strategies for smart buying.
            </p>
            <Link to="/grain" className="feature-link">
              Read Market Guide →
            </Link>
          </div>

          <div className="feature-card">
            <h3>⚖️ Fair Price</h3>
            <p>
              Historical perspectives on fair pricing, speculation, and the moral obligations of 
              merchants in times of crisis.
            </p>
            <Link to="/justprice" className="feature-link">
              Explore History →
            </Link>
          </div>
        </div>

        <div className="market-indicators">
          <h2>Key Market Indicators</h2>
          <div className="indicators-grid">
            <div className="indicator">
              <span className="indicator-label">Active Commodities</span>
              <span className="indicator-value">6</span>
            </div>
            <div className="indicator">
              <span className="indicator-label">Price Range (Wheat)</span>
              <span className="indicator-value">3-16</span>
            </div>
            <div className="indicator">
              <span className="indicator-label">Market Status</span>
              <span className="indicator-value active">Volatile</span>
            </div>
            <div className="indicator">
              <span className="indicator-label">Data Sources</span>
              <span className="indicator-value">Multiple</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home