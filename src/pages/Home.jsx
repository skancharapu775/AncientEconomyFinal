import React, { useMemo } from 'react'
import { Link } from 'react-router-dom'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import './Home.css'

function Home() {
  // Commodity data from historical sources
  const oliveOilData = [
    { year: 400, month: null, price: 3, source: "Delos" },
    { year: 350, month: null, price: 1, source: "Delos" },
    { year: 307, month: null, price: 3.5, source: "Delos" },
    { year: 304, month: 1, price: 4.5, source: "Delos" },
    { year: 304, month: 2, price: 4.5, source: "Delos" },
    { year: 304, month: 2, price: 2.251, source: "Delos" },
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
    { year: 231, month: 7, price: 1.416, source: "Delos" },
    { year: 224, month: 1, price: 1.375, source: "Delos" },
    { year: 224, month: 2, price: 1.333, source: "Delos" },
    { year: 224, month: 9, price: 1, source: "Delos" },
    { year: 218, month: 1, price: 1.167, source: "Delos" },
    { year: 218, month: 6, price: 1.5, source: "Delos" },
    { year: 200, month: 1, price: 1.333, source: "Delos" },
  ]

  const pigData = [
    { year: 410, month: null, price: 3, source: "Delos" },
    { year: 375, month: null, price: 3, source: "Delos" },
    { year: 302, month: 8, price: 5, source: "Delos" },
    { year: 302, month: null, price: 5, source: "Delos" },
    { year: 301, month: null, price: 7, source: "Delos" },
    { year: 297, month: null, price: 8, source: "Delos" },
    { year: 281, month: null, price: 3.667, source: "Delos" },
    { year: 281, month: null, price: 2.667, source: "Delos" },
    { year: 277, month: null, price: 2.5, source: "Delos" },
    { year: 276, month: null, price: 4, source: "Delos" },
    { year: 274, month: null, price: 3, source: "Delos" },
    { year: 269, month: 1, price: 2, source: "Delos" },
    { year: 269, month: 4, price: 3.5, source: "Delos" },
    { year: 246, month: 10, price: 2, source: "Delos" },
    { year: 246, month: 11, price: 3, source: "Delos" },
    { year: 231, month: 2, price: 3, source: "Delos" },
    { year: 231, month: 7, price: 3.833, source: "Delos" },
    { year: 224, month: 1, price: 3.5, source: "Delos" },
    { year: 224, month: 7, price: 4.667, source: "Delos" },
    { year: 218, month: 1, price: 3.333, source: "Delos" },
  ]

  const barleyData = [
    { year: 430, month: null, price: 2, source: "Delos" },
    { year: 410, month: null, price: 4, source: "Delos" },
    { year: 400, month: null, price: 4, source: "Delos" },
    { year: 400, month: null, price: 3, source: "Delos" },
    { year: 360, month: null, price: 1.917, source: "Delos" },
    { year: 330, month: null, price: 5, source: "Delos" },
    { year: 329, month: null, price: 3, source: "Delos" },
    { year: 329, month: null, price: 3.833, source: "Delos" },
    { year: 282, month: 10, price: 4, source: "Delos" },
    { year: 282, month: 11, price: 5, source: "Delos" },
    { year: 282, month: 12, price: 5, source: "Delos" },
  ]

  const wheatData = [
    { year: 415, month: null, price: 6.5, source: "Delos" },
    { year: 415, month: 6, price: 6, source: "Delos" },
    { year: 392, month: null, price: 3, source: "Delos" },
    { year: 390, month: null, price: 6, source: "Delos" },
    { year: 335, month: null, price: 16, source: "Delos" },
    { year: 334, month: null, price: 5, source: "Delos" },
    { year: 330, month: 9, price: 9, source: "Delos" },
    { year: 330, month: null, price: 5, source: "Delos" },
    { year: 329, month: null, price: 5, source: "Delos" },
    { year: 329, month: 6, price: 6, source: "Delos" },
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
      unit: "Drachmas / Medimnos"
    }

    const barley = {
      name: "Barley (Delos)",
      symbol: "BRLY-ARC",
      data: processData(barleyData),
      color: "#eab308",
      unit: "Drachmas / Medimnos"
    }

    const egyptianWheat = {
      name: "Egyptian Wheat",
      symbol: "EGWHT-ARC",
      data: processData(egyptianWheatData),
      color: "#dc2626",
      unit: "Drachmas / Artaba (29 kg)"
    }

    const oil = {
      name: "Olive Oil (Delos)",
      symbol: "OIL-ARC",
      data: processData(oliveOilData),
      color: "#65a30d",
      unit: "Drachmas / Khous"
    }

    const pig = {
      name: "Livestock (Pigs) (Delos)",
      symbol: "PIG-ARC",
      data: processData(pigData),
      color: "#ec4899",
      unit: "Drachmas / Animal"
    }

    return [wheat, barley, egyptianWheat, oil, pig]
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

  return (
    <div className="home-page">
      <div className="home-container">
        <header className="home-header">
          <h1>The Athenian Daily</h1>
          <p className="subtitle">Financial News & Market Intelligence</p>
        </header>

        <div className="market-overview">
          <h2>Market Overview</h2>
          <div className="commodities-grid">
            {commodities.map((commodity, index) => {
              const latest = getLatestPrice(commodity.data)
              const previous = getPreviousPrice(commodity.data)
              const change = getPriceChange(commodity.data)
              const isPositive = change >= 0
              const percentChange = ((change / previous.price) * 100).toFixed(1)
              
              return (
                <div key={index} className="commodity-card">
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
            })}
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