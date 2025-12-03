import React, { useState, useEffect } from 'react';
import './GrainArticle.css'; // Reusing your base styles

// Game Data - Themed for Ancient Athens
const GAME_DATA = [
  {
    level: 1,
    color: '#eab308', // Gold/Wheat
    category: "GREEK CURRENCY UNITS",
    items: ["DRACHMA", "OBOL", "TALENT", "MINA"]
  },
  {
    level: 2,
    color: '#65a30d', // Olive Green
    category: "GRAIN TRADE ORIGINS",
    items: ["EGYPT", "SICILY", "PONTUS", "CYRENE"]
  },
  {
    level: 3,
    color: '#3b82f6', // Aegean Blue
    category: "ATHENIAN OFFICIALS",
    items: ["AGORANOMOI", "SITOPHYLAKES", "METRONOMOI", "STRATEGOS"]
  },
  {
    level: 4,
    color: '#a855f7', // Tyrian Purple
    category: "FAMOUS ORATORS",
    items: ["LYSIAS", "DEMOSTHENES", "ISOCRATES", "AESCHINES"]
  }
];

function Connections() {
  const [gridItems, setGridItems] = useState([]);
  const [selected, setSelected] = useState([]);
  const [solvedGroups, setSolvedGroups] = useState([]);
  const [mistakes, setMistakes] = useState(0);
  const [status, setStatus] = useState('playing'); // playing, won, lost
  const [shake, setShake] = useState(false);
  const [message, setMessage] = useState("");

  const MAX_MISTAKES = 4;

  // Initialize Game
  useEffect(() => {
    let allItems = [];
    GAME_DATA.forEach(group => {
      allItems = [...allItems, ...group.items];
    });
    setGridItems(shuffleArray(allItems));
  }, []);

  const shuffleArray = (array) => {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
  };

  const handleSelect = (item) => {
    if (status !== 'playing') return;
    
    if (selected.includes(item)) {
      setSelected(selected.filter(i => i !== item));
    } else {
      if (selected.length < 4) {
        setSelected([...selected, item]);
      }
    }
  };

  const handleSubmit = () => {
    if (selected.length !== 4) return;

    // Check if selected items match any group
    const matchedGroup = GAME_DATA.find(group => 
      group.items.every(item => selected.includes(item))
    );

    if (matchedGroup) {
      // Correct Guess
      setSolvedGroups([...solvedGroups, matchedGroup]);
      setGridItems(gridItems.filter(item => !matchedGroup.items.includes(item)));
      setSelected([]);
      
      if (solvedGroups.length + 1 === GAME_DATA.length) {
        setStatus('won');
      }
    } else {
      // Incorrect Guess
      setMistakes(prev => {
        const newMistakes = prev + 1;
        if (newMistakes >= MAX_MISTAKES) {
          setStatus('lost');
          // Reveal answers
          setSolvedGroups(GAME_DATA); 
          setGridItems([]);
        }
        return newMistakes;
      });
      
      // Check for "One Away"
      const isOneAway = GAME_DATA.some(group => {
        const intersection = selected.filter(x => group.items.includes(x));
        return intersection.length === 3;
      });

      if (isOneAway) {
        showMessage("One away...");
      } else {
        showMessage("Not quite...");
      }

      setShake(true);
      setTimeout(() => setShake(false), 500);
    }
  };

  const showMessage = (msg) => {
    setMessage(msg);
    setTimeout(() => setMessage(""), 2000);
  };

  const handleShuffle = () => {
    setGridItems(shuffleArray(gridItems));
  };

  const handleDeselect = () => {
    setSelected([]);
  };

  const handleReset = () => {
    window.location.reload();
  };

  return (
    <div className="grain-article-page" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      
      <style>{`
        .conn-container {
          max-width: 600px;
          width: 100%;
          padding: 20px;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .conn-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 10px;
          width: 100%;
          margin-bottom: 20px;
        }

        .conn-item {
          aspect-ratio: 1.5; // Rectangular shape
          background: rgba(249, 243, 232, 0.9);
          border: 2px solid #D2B48C;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          font-family: 'Inter', sans-serif;
          font-weight: 700;
          font-size: 0.9em;
          color: #3d2817;
          cursor: pointer;
          transition: all 0.2s;
          text-transform: uppercase;
          padding: 5px;
          user-select: none;
        }

        .conn-item:hover {
          background: #e6dfd1;
        }

        .conn-item.selected {
          background: #5A5A5A;
          color: #fff;
          border-color: #3d2817;
        }

        .shake {
          animation: shake 0.5s cubic-bezier(.36,.07,.19,.97) both;
        }

        @keyframes shake {
          10%, 90% { transform: translate3d(-1px, 0, 0); }
          20%, 80% { transform: translate3d(2px, 0, 0); }
          30%, 50%, 70% { transform: translate3d(-4px, 0, 0); }
          40%, 60% { transform: translate3d(4px, 0, 0); }
        }

        .solved-row {
          width: 100%;
          border-radius: 8px;
          margin-bottom: 10px;
          padding: 20px 10px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          color: white;
          text-align: center;
          animation: popIn 0.3s ease-out;
        }

        .solved-category {
          font-weight: 800;
          text-transform: uppercase;
          font-size: 1.1em;
          margin-bottom: 5px;
          font-family: 'Georgia', serif;
        }

        .solved-items {
          font-size: 0.9em;
        }

        @keyframes popIn {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }

        .controls {
          display: flex;
          gap: 15px;
          margin-top: 20px;
        }

        .btn-game {
          padding: 12px 24px;
          border-radius: 20px;
          border: 2px solid #3d2817;
          background: transparent;
          color: #3d2817;
          font-weight: 600;
          cursor: pointer;
          font-family: 'Inter', sans-serif;
        }
        
        .btn-game:hover {
          background: rgba(61, 40, 23, 0.1);
        }

        .btn-submit {
          background: #3d2817;
          color: #f4e8d0;
        }

        .btn-submit:disabled {
          background: #a8a29e;
          border-color: #a8a29e;
          cursor: not-allowed;
          opacity: 0.7;
        }

        .mistakes-container {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-top: 25px;
          font-family: 'Inter', sans-serif;
          color: #3d2817;
        }

        .mistake-dot {
          width: 15px;
          height: 15px;
          background: #3d2817;
          border-radius: 50%;
        }

        .message-toast {
          position: fixed;
          top: 10%;
          left: 50%;
          transform: translateX(-50%);
          background: #3d2817;
          color: #f4e8d0;
          padding: 10px 20px;
          border-radius: 4px;
          font-weight: bold;
          z-index: 100;
          pointer-events: none;
        }

        @media (max-width: 600px) {
          .conn-item { font-size: 0.7em; }
        }
      `}</style>

      {/* Header */}
      <div className="article-header" style={{ width: '100%', maxWidth: '900px', borderBottom: 'none', marginBottom: '10px' }}>
        <h1>The Athenian Connections</h1>
        <div className="article-meta">Group words by their historical association</div>
      </div>

      <div className="conn-container">
        
        {/* Toast Message */}
        {message && <div className="message-toast">{message}</div>}

        {/* Solved Groups */}
        {solvedGroups.map((group, idx) => (
          <div key={idx} className="solved-row" style={{ backgroundColor: group.color }}>
            <div className="solved-category">{group.category}</div>
            <div className="solved-items">{group.items.join(', ')}</div>
          </div>
        ))}

        {/* Game Grid */}
        {status !== 'lost' && gridItems.length > 0 && (
          <div className={`conn-grid ${shake ? 'shake' : ''}`}>
            {gridItems.map((item, idx) => (
              <div 
                key={idx} 
                className={`conn-item ${selected.includes(item) ? 'selected' : ''}`}
                onClick={() => handleSelect(item)}
              >
                {item}
              </div>
            ))}
          </div>
        )}

        {/* Game Controls */}
        {status === 'playing' ? (
          <>
            <div className="mistakes-container">
              <span>Mistakes remaining:</span>
              {Array.from({ length: MAX_MISTAKES - mistakes }).map((_, i) => (
                <div key={i} className="mistake-dot"></div>
              ))}
            </div>

            <div className="controls">
              <button className="btn-game" onClick={handleShuffle}>Shuffle</button>
              <button className="btn-game" onClick={handleDeselect} disabled={selected.length === 0}>Deselect All</button>
              <button 
                className="btn-game btn-submit" 
                onClick={handleSubmit} 
                disabled={selected.length !== 4}
              >
                Submit
              </button>
            </div>
          </>
        ) : (
          <div style={{ marginTop: '20px', textAlign: 'center' }}>
            <h2 style={{ color: '#3d2817', fontFamily: 'Georgia, serif' }}>
              {status === 'won' ? 'Magnificent!' : 'Better luck next time.'}
            </h2>
            <button className="btn-game btn-submit" onClick={handleReset} style={{ marginTop: '15px' }}>
              Play Again
            </button>
          </div>
        )}

      </div>
    </div>
  );
}

export default Connections;