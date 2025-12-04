import React, { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import delosImg from '../Images/Delos.jpg'
import './Home.css'

function Home() {
  // State to track which info box is currently visible (tracks the symbol string now)
  const [activeInfo, setActiveInfo] = useState(null)

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
  ];

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

  const getSortableDate = (d) => {
    const monthOffset = d.month ? (d.month - 1) / 12 : 0
    return -d.year + monthOffset
  }

  const formatBCTick = (val) => {
    const year = Math.floor(Math.abs(val))
    return `${year} BC`
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

  const commodities = useMemo(() => {
    const wheat = {
      name: "Wheat (Delos)",
      symbol: "WHT-ARC",
      data: processData(wheatData),
      color: "#f97316",
      unit: "Drachmas / Medimnos",
      description: "Enter your text for Wheat here. Wheat prices in Delos fluctuated significantly during the Hellenistic period."
    }

    const barley = {
      name: "Barley (Delos)",
      symbol: "BRLY-ARC",
      data: processData(barleyData),
      color: "#eab308",
      unit: "Drachmas / Medimnos",
      description: "Enter your text for Barley here. Barley was the primary sustenance for the lower classes."
    }

    const oil = {
      name: "Olive Oil (Delos)",
      symbol: "OIL-ARC",
      data: processData(oliveOilData),
      color: "#65a30d",
      unit: "Drachmas / Khous",
      description: "Enter your text for Olive Oil here. Used for food, lighting, and bathing rituals."
    }

    const pig = {
      name: "Livestock (Pigs) (Delos)",
      symbol: "PIG-ARC",
      data: processData(pigData),
      color: "#ec4899",
      unit: "Drachmas / Animal",
      description: "Enter your text for Pigs here. Livestock prices often correlated with religious festivals."
    }

    const egyptianWheat = {
      name: "Egyptian Wheat",
      symbol: "EGWHT-ARC",
      data: processData(egyptianWheatData),
      color: "#dc2626",
      unit: "Drachmas / Artaba (29 kg)",
      description: "Enter your text for Egyptian Wheat here. Egypt was the breadbasket of the ancient Mediterranean."
    }

    // Return separated lists
    return {
      delos: [wheat, barley, oil, pig],
      egypt: [egyptianWheat]
    }
  }, [])

  const getLatestPrice = (data) => {
    return data[data.length - 1]
  }

  const getPreviousPrice = (data) => {
    return data.length > 1 ? data[data.length - 2] : data[data.length - 1]
  }

  const getPriceChange = (data) => {
    const latest = getLatestPrice(data)
    const previous = getPreviousPrice(data)
    return latest.price - previous.price
  }

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload
      return (
        <div className="custom-tooltip">
          <p className="tooltip-date">{data.displayDate}</p>
          <p className="tooltip-price">
            Price: <span className="tooltip-value">{data.price}</span>
          </p>
          <p className="tooltip-source">Source: {data.source}</p>
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
    const percentChange = ((change / previous.price) * 100).toFixed(1)

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
            <div className="commodity-price">{latest.price.toFixed(2)}</div>
            <div className={`commodity-change ${isPositive ? 'positive' : 'negative'}`}>
              {isPositive ? '+' : ''}{change.toFixed(2)} ({isPositive ? '+' : ''}{percentChange}%)
            </div>
          </div>
        </div>
        <div className="commodity-unit">{commodity.unit}</div>
        
        <div className="chart-container">
          <ResponsiveContainer width="100%" height={200}>
            <LineChart data={commodity.data} margin={{ top: 5, right: 5, left: 0, bottom: 5 }}>
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
              <Line 
                type="monotone" 
                dataKey="price" 
                stroke={commodity.color} 
                strokeWidth={2} 
                dot={{ r: 3, fill: commodity.color, strokeWidth: 1, stroke: '#f4e8d0' }} 
                activeDot={{ r: 5, strokeWidth: 0 }}
                animationDuration={500}
              />
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
                    The sacred island and major commercial center of the Aegean. 
                    Known for its tax-free port and strategic location, prices here serve as a 
                    benchmark for the wider Hellenistic economy.
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
               <div className="commodities-grid">
                {commodities.egypt.map(commodity => renderCommodityCard(commodity))}
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
              <span className="indicator-value">5</span>
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