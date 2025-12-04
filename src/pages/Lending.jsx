import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css' // Reusing global font/reset styles

function Lending() {
  return (
    <div className="lending-page" style={{ 
      padding: '40px 20px', 
      maxWidth: '800px', 
      margin: '0 auto', 
      minHeight: '80vh'
    }}>
      
      {/* --- Header --- */}
      <header style={{ 
        borderBottom: '2px solid #8B7355', 
        paddingBottom: '20px', 
        marginBottom: '40px',
        textAlign: 'center'
      }}>
        <h1 style={{ 
          fontFamily: 'serif', 
          fontSize: '3rem', 
          color: '#5A4A35', 
          margin: '0 0 10px 0',
          lineHeight: '1'
        }}>
          Lending Options
        </h1>
        <p style={{ 
          fontFamily: 'sans-serif', 
          textTransform: 'uppercase', 
          letterSpacing: '2px', 
          color: '#8B7355', 
          fontSize: '0.85rem',
          margin: 0
        }}>
          A Practical Guide for Borrowers
        </p>
      </header>

      {/* --- Content Container --- */}
      <div style={{ fontSize: '1.15rem', lineHeight: '1.8', color: '#2c2c2c' }}>
        
        {/* Section 1: Landed & Personal Loans */}
        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ 
            fontSize: '1.1rem', 
            fontFamily: 'sans-serif', 
            textTransform: 'uppercase', 
            letterSpacing: '1px', 
            color: '#8B7355', 
            marginBottom: '20px',
            borderBottom: '1px solid #e6dec8',
            display: 'inline-block',
            paddingBottom: '5px'
          }}>
            Landed & Personal Loans
          </h2>
          
          <p style={{ marginBottom: '20px' }}>
            If you want a loan, you have multiple options. If it’s a <strong style={{ color: '#5A4A35' }}>landed loan</strong>, 
            you can of course visit a bank.
          </p>
          <p style={{ marginBottom: '20px' }}>
            However, for interest-free loans, consult your family and friends(<em style={{ color: '#8B7355', fontWeight: 'bold' }}>Eranos</em>). 
            Make sure to pay it back though, because otherwise the courts may hold you liable for interest.
          </p>
          <p>
            Sanctuaries, Demes, and private individuals also offer loans of varying interest. 
            As always, for this type of lending, your interest is due in <strong style={{ color: '#5A4A35' }}>one lump sum</strong> at the end of term.
          </p>
        </section>

        {/* Decorative Divider */}
        <div style={{ 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center', 
          margin: '40px 0',
          color: '#D2B48C'
        }}>
          <span style={{ fontSize: '24px' }}>❦</span>
        </div>

        {/* Section 2: Maritime Loans */}
        <section>
          <h2 style={{ 
            fontSize: '1.1rem', 
            fontFamily: 'sans-serif', 
            textTransform: 'uppercase', 
            letterSpacing: '1px', 
            color: '#8B7355', 
            marginBottom: '20px',
            borderBottom: '1px solid #e6dec8',
            display: 'inline-block',
            paddingBottom: '5px'
          }}>
            Maritime Loans
          </h2>
          
          <p style={{ marginBottom: '20px' }}>
            For maritime loans, which typically fund expeditions, consult a bank or a group of wealthy investors. 
            Unlike landed loans, your interest is paid on a <strong style={{ color: '#5A4A35' }}>monthly basis</strong> and is floating.
          </p>
          <p style={{ marginBottom: '30px' }}>
            Remember, your backers are taking on a lot of risk so the difficulty of your journey affects your interest:
          </p>

          {/* Rates Table Card */}
          <div style={{ 
            backgroundColor: '#fff', 
            border: '1px solid #D2B48C', 
            borderRadius: '4px', 
            padding: '25px',
            boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
          }}>
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: '1fr 1fr', 
              borderBottom: '2px solid #f4e8d0', 
              paddingBottom: '10px', 
              marginBottom: '15px',
              fontFamily: 'sans-serif',
              fontSize: '0.8rem',
              color: '#8B7355',
              textTransform: 'uppercase',
              letterSpacing: '1px'
            }}>
              <div>Voyage Type</div>
              <div style={{ textAlign: 'right' }}>Interest Rate</div>
            </div>

            {/* Row 1 */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', padding: '10px 0', borderBottom: '1px solid #f9f4ea' }}>
              <div style={{ color: '#4a4a4a' }}>Easy Voyage</div>
              <div style={{ textAlign: 'right', fontWeight: 'bold', color: '#5A4A35' }}>~22.5%</div>
            </div>

            {/* Row 2 */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', padding: '10px 0', borderBottom: '1px solid #f9f4ea' }}>
              <div style={{ color: '#4a4a4a' }}>Long/Difficult Voyage</div>
              <div style={{ textAlign: 'right', fontWeight: 'bold', color: '#5A4A35' }}>~30%</div>
            </div>

            {/* Row 3 */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', padding: '10px 0' }}>
              <div style={{ color: '#4a4a4a' }}>One-way Voyage</div>
              <div style={{ textAlign: 'right', fontWeight: 'bold', color: '#5A4A35' }}>12%</div>
            </div>
          </div>
        </section>

      </div>
      
      {/* Footer */}
      <footer style={{ 
        marginTop: '60px', 
        paddingTop: '20px', 
        borderTop: '1px solid #D2B48C', 
        textAlign: 'center', 
        fontFamily: 'sans-serif', 
        fontSize: '0.8rem', 
        color: '#9ca3af' 
      }}>
        Financial advice based on historical practices. Consult your local trapezites.
      </footer>
    </div>
  )
}

export default Lending