import React, { useState } from 'react';
import { Scale, Info, BookOpen } from 'lucide-react';
// Importing the specific CSS file as requested
import './GrainArticle.css';

// Importing images from the correct relative path
import lysiasImg from '../Images/Lycias.jpg';
import aristotleImg from '../Images/Aristotle.jpg';
import apuleiusImg from '../Images/Apuleuis.jpg';

const sources = [
  {
    id: 0,
    author: "Lysias",
    // Added specific date
    date: "386 BC",
    // Added explicit attribution field to handle the "not Aristotle" request
    attribution: "Lysias",
    title: "Against Grain Dealers",
    image: lysiasImg,
    content: (
      <>
        <p>
          “For their interests are the opposite of other men's: they make most profit when, on some bad news reaching the city, they sell their corn at a high price. And they are so delighted to see your disasters that they either get news of them in advance of anyone else, or fabricate the rumor themselves; now it is the loss of your ships in the Black Sea, now the capture of vessels on their outward voyage by the Lacedaemonians, now the blockade of your trading ports, or the impending rupture of the truce.”
        </p>
        <p className="citation">[22.15]</p>
        <p>
          “For, just when you find yourselves worst off for corn, these persons snap it up and refuse to sell it, in order to prevent our disputing about the price: we are to be glad enough if we come away from them with a purchase made at any price, however high. And thus at times, although there is peace, we are besieged by these men.”
        </p>
        <p className="citation">[22.16]</p>
        <p>
          “So long is it now that the city has been convinced of their knavery and disaffection that, while for the sale of all other commodities you have appointed the agoranomoi as controllers, for this trade alone you elect sitophylakes by lot.”
        </p>
      </>
    )
  },
  {
    id: 1,
    author: "Aristotle",
    date: "328 BC–322 BC",
    // Changed attribution as requested
    attribution: "not Aristotle",
    title: "Athenian Constitution",
    image: aristotleImg,
    content: (
      <>
        <p>
          “Market Commissioners (Agoranomi) are elected by lot, five for Piraeus, five for the city. Their statutory duty is to see that all articles offered for sale in the market are pure and unadulterated.
        </p>
        <p>
          Commissioners of Weights and Measures (Metronomi) are elected by lot, five for the city, and five for Piraeus. They see that sellers use fair weights and measures.”
        </p>
        <p>
          “Formerly there were ten Corn Commissioners (Sitophylaces), elected by lot, five for Piraeus, and five for the city; but now there are twenty for the city and fifteen for Piraeus. Their duties are, first, to see that the unprepared corn in the market is offered for sale at reasonable prices, and secondly, to see that the millers sell barley meal at a price proportionate to that of barley, and that the bakers sell their loaves at a price proportionate to that of wheat.”
        </p>
      </>
    )
  },
  {
    id: 2,
    author: "Apuleius",
    date: "150 AD–180 AD",
    attribution: "Apuleius",
    title: "The Metamorphoses",
    image: apuleiusImg,
    content: (
      <>
        <p>
          “Just as I was moving on, I encountered Pythias, who had been a student with me in Athens. He recognised me and gave me a friendly embrace though it had all been long ago.”
        </p>
        <p className="dialogue">
          ‘By Pollux, Lucius my friend... What brings you here? Congratulations! You’ve attendants with rods of office, and you’re dressed as a magistrate.’
        </p>
        <p className="dialogue">
          ‘I’m the inspector of markets, controller of supplies, and if you want help in purchasing anything I’m your man.’
        </p>
        <p>
          I told him I had paid twenty denarii for fish. On hearing this he grabbed my arm and dragged me back to the market to berate the merchant:
        </p>
        <p className="dialogue">
          ‘Now, you even cheat visitors, like this friend of mine. You mark up worthless goods to stupid prices, and reduce Hypata, the flower of Thessaly, to the equivalent of a barren rock in the desert, with the costliness of your wares.’”
        </p>
      </>
    )
  }
];

function JustPrice() {
  const [activeTab, setActiveTab] = useState(0);
  const activeData = sources[activeTab];

  return (
    <div className="grain-article-page">
      <style>{`
        /* Custom Scrollbar to match theme */
        ::-webkit-scrollbar {
          width: 8px;
        }
        ::-webkit-scrollbar-track {
          background: #f4e8d0; 
        }
        ::-webkit-scrollbar-thumb {
          background: #8B7355; 
          border-radius: 4px;
        }
        ::-webkit-scrollbar-thumb:hover {
          background: #654321; 
        }

        /* Animations */
        .fade-in {
          animation: fadeIn 0.5s ease-in-out;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }

        /* Custom Tab System styling */
        .tab-grid {
          display: flex;
          gap: 15px;
          margin-bottom: 30px;
          flex-wrap: wrap;
        }

        .tab-button {
          flex: 1;
          display: flex;
          align-items: center;
          gap: 15px;
          padding: 15px;
          background: rgba(244, 232, 208, 0.5);
          border: 2px solid #D2B48C;
          border-radius: 8px;
          cursor: pointer;
          transition: all 0.3s ease;
          text-align: left;
          min-width: 200px;
        }

        .tab-button:hover {
          border-color: #8B4513;
          background: rgba(244, 232, 208, 0.8);
        }

        .tab-button.active {
          background: rgba(139, 115, 85, 0.15);
          border-color: #8B4513;
          box-shadow: 0 4px 6px rgba(0,0,0,0.05);
        }

        .tab-button img {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          border: 2px solid #8B7355;
          object-fit: cover;
        }

        .tab-info h3 {
          margin: 0;
          color: #654321;
          font-family: 'Georgia', serif;
          font-size: 1.1em;
        }

        .tab-info p {
          margin: 0;
          font-size: 0.8em;
          color: #8B4513;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .citation {
          font-weight: bold;
          color: #8B4513;
          font-size: 0.9em;
          margin-bottom: 10px;
        }

        .dialogue {
          font-style: italic;
          padding-left: 15px;
          border-left: 3px solid #D2B48C;
          margin: 10px 0;
        }
        
        .active-source-header {
            display: flex;
            align-items: center;
            gap: 20px;
            margin-bottom: 25px;
            padding-bottom: 20px;
            border-bottom: 2px solid #D2B48C;
        }

        .active-source-header img {
            width: 80px;
            height: 80px;
            border-radius: 50%;
            border: 3px solid #8B4513;
            object-fit: cover;
        }

        .source-date {
            font-size: 0.6em;
            color: #8B4513;
            background: rgba(210, 180, 140, 0.3);
            padding: 4px 8px;
            border-radius: 4px;
            vertical-align: middle;
            margin-left: 10px;
            font-weight: normal;
        }

        @media (max-width: 768px) {
            .tab-grid {
                flex-direction: column;
            }
        }
      `}</style>

      <div className="article-container">
        
        {/* Header - Text removed as requested */}
        <header className="article-header">
          <h1>Just Price: Historical Perspectives</h1>
          <div className="article-meta" style={{ display: 'flex', justifyContent: 'center', gap: '10px', alignItems: 'center' }}>
            <Scale size={18} />
          </div>
        </header>

        <div className="article-content">
          
          <section className="article-intro">
            <h2 style={{ color: '#654321', fontSize: '1.4em', marginBottom: '15px', display: 'flex', alignItems: 'center', gap: '10px' }}>
              <Info size={20} color="#8B4513" />
              Historical Context
            </h2>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li style={{ marginBottom: '10px', display: 'flex', gap: '10px' }}>
                <span style={{ color: '#8B4513' }}>•</span>
                Just price primarily concerned food security.
              </li>
              <li style={{ display: 'flex', gap: '10px' }}>
                <span style={{ color: '#8B4513' }}>•</span>
                If food prices went too high, it was blamed on speculation from land owners and merchants, and officials stepped in to lower them.
              </li>
            </ul>
          </section>

          {/* Interactive Source Switcher */}
          <section id="sources-app">
            
            <div className="tab-grid">
              {sources.map((source, index) => (
                <button 
                  key={source.id}
                  onClick={() => setActiveTab(index)}
                  className={`tab-button ${activeTab === index ? 'active' : ''}`}
                >
                  <img src={source.image} alt={source.author} />
                  <div className="tab-info">
                    <h3>{source.author}</h3>
                    <p>{source.title}</p>
                  </div>
                </button>
              ))}
            </div>

            <div className="scam-section" style={{ background: 'rgba(244, 232, 208, 0.6)', minHeight: '400px' }}>
              <div key={activeTab} className="fade-in">
                
                <div className="active-source-header">
                  <img src={activeData.image} alt={activeData.author} />
                  <div>
                    <h2 style={{ margin: 0, fontSize: '1.8em', color: '#654321' }}>
                        {activeData.title} 
                        <span className="source-date">{activeData.date}</span>
                    </h2>
                    <p style={{ margin: '5px 0 0 0', color: '#8B4513', fontStyle: 'italic' }}>
                      By: {activeData.attribution}
                    </p>
                  </div>
                </div>
                
                <div style={{ fontSize: '1.1em', lineHeight: '1.8', color: '#3d2817' }}>
                   <BookOpen size={24} color="#D2B48C" style={{ float: 'left', marginRight: '15px' }} />
                   {activeData.content}
                </div>

              </div>
            </div>

          </section>
        </div>
        

      </div>
    </div>
  )
}

export default JustPrice;