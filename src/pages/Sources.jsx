import React, { useState } from 'react';
import { BookOpen, Scale, Coins, Anchor, Scroll, Image as ImageIcon, Sword } from 'lucide-react';
import './GrainArticle.css';

const sourceData = [
  {
    category: "General Economic History",
    icon: <BookOpen size={24} />,
    items: [
      "Bresson, Alain, and Steven Rendall. The Making of the Ancient Greek Economy: Institutions, Markets, and Growth in the City-States. Princeton, NJ: Princeton University Press, 2016.",
      "Casson, Lionel. “The Grain Trade of the Hellenistic World.” The Journal of Hellenic Studies 74 (1954): 41–52.",
      "“Etesian Winds.” Encyclopaedia Britannica. Accessed December 2024. https://www.britannica.com/science/etesian-wind.",
      "Howgego, Christopher. Ancient History from Coins. London: Routledge, 1995.",
      "Horden, Peregrine, and Nicholas Purcell. The Corrupting Sea: A Study of Mediterranean History. Oxford: Blackwell, 2000.",
      "Lysias. “Against the Grain Dealers.” In Lysias, translated by W. R. M. Lamb. Loeb Classical Library 244. Cambridge, MA: Harvard University Press, 1930.",
      "Manning, J. G. The Open Sea: The Economic Life of the Ancient Mediterranean World from the Iron Age to the Rise of Rome. Princeton, NJ: Princeton University Press, 2018.",
      "McConnell, Joseph R., Michael Sigl, et al. “Extreme Climate After Massive Eruption of Alaska’s Okmok Volcano in 43 BCE and Effects on the Late Roman Republic and Ptolemaic Kingdom.” Proceedings of the National Academy of Sciences 117, no. 27 (2020): 15443–15449.",
      "Moreno, Alfonso. Feeding the Democracy: The Athenian Grain Supply in the Fifth and Fourth Centuries BC. Oxford: Oxford University Press, 2007.",
      "Oliver, Graham J. War, Food, and Politics in Early Hellenistic Athens. Oxford: Oxford University Press, 2007.",
      "Thucydides. History of the Peloponnesian War. Translated by Rex Warner. New York: Penguin Classics, 1972.",
      "Van der Spek, Robartus J. “The Volatility of Prices of Barley and Dates in Babylon in the Third and Second Centuries BC.” In Silver, Money and Credit: A Tribute to Robartus J. van der Spek on the Occasion of His 65th Birthday, edited by Kristin Kleber and Reinhard Pirngruber, 255–287. Leiden: Nederlands Instituut voor het Nabije Oosten, 2016.",
      "Von Reden, Sitta. Money in Antiquity. London: Bloomsbury Academic, 2010."
    ]
  },
  {
    category: "Warfare & Chronology",
    icon: <Sword size={24} />,
    items: [
      "Sabin, Philip, Hans van Wees, and Michael Whitby, eds. “Chronological Table.” In The Cambridge History of Greek and Roman Warfare, 517–32. Cambridge: Cambridge University Press, 2007.",
      "Austin, M. M. “Hellenistic Kings, War, and the Economy.” The Classical Quarterly 36, no. 2 (1986): 450–66. http://www.jstor.org/stable/639286."
    ]
  },
  {
    category: "Amphorae & Trade Routes",
    icon: <Anchor size={24} />,
    items: [
      "Bresson, Alain, and Steven Rendall. The Making of the Ancient Greek Economy: Institutions, Markets, and Growth in the City-States. Princeton, NJ: Princeton University Press, 2016. https://doi.org/10.2307/j.ctt21c4v6h.",
      "Garnsey, Peter. Famine and Food Supply in the Graeco-Roman World: Responses to Risk and Crisis. Cambridge: Cambridge University Press, 1988.",
      "Lawall, Mark L. “The Archaeology of Markets and Trade.” In The Cambridge Companion to Ancient Athens, edited by Jenifer Neils and Dylan K. Rogers, 244–56. Cambridge: Cambridge University Press, 2021.",
      "Whitbread, I. K. Greek Transport Amphorae: A Petrological and Archaeological Study. Exeter: British School at Athens, 1995."
    ]
  },
  {
    category: "Lending & Finance",
    icon: <Coins size={24} />,
    items: [
      "Bresson, Alain, and Steven Rendall. The Making of the Ancient Greek Economy: Institutions, Markets, and Growth in the City-States. Princeton, NJ: Princeton University Press, 2016. https://doi.org/10.2307/j.ctt21c4v6h.",
      "Gabrielsen, Vincent. “Banking and Credit Operations in Hellenistic Times.” In Making, Moving and Managing: The New World of Ancient Economies, 323-31 BC, edited by Zosia H. Archibald, John K. Davies, and Vincent Gabrielsen, 136–164. Oxford: Oxbow Books, 2005."
    ]
  },
  {
    category: "Just Price & Moral Economy",
    icon: <Scale size={24} />,
    items: [
      "Apuleius. The Golden Ass. Translated by A. S. Kline. Poetry in Translation, 2025.",
      "Bresson, Alain, and Steven Rendall. The Making of the Ancient Greek Economy: Institutions, Markets, and Growth in the City-States. Princeton, NJ: Princeton University Press, 2016. https://doi.org/10.2307/j.ctt21c4v6h.",
      "Erdkamp, Paul. “Prices.” Oxford Classical Dictionary. April 26, 2018. Accessed December 4, 2025. https://oxfordre.com/classics/view/10.1093/acrefore/9780199381135.001.0001/acrefore-9780199381135-e-8254.",
      "Lysias. “22. Against the Corn Dealers.” Digital Loeb Classical Library, 1930. https://doi.org/10.4159/dlcl.lysias-22_corn_dealers.1930.",
      "Migeotte, Léopold. “Le contrôle des prix dans les cités grecques.” In Économie et finances publiques des cités grecques, volume I: Choix d'articles publiés de 1976 à 2001, 419–438. Lyon: Maison de l'Orient et de la Méditerranée Jean Pouilloux, 2011.",
      "Unknown (Mistakenly Aristotle). “Part 6, Sections 51-60.” In Athenian Constitution. Yale Avalon Project, 2008. https://avalon.law.yale.edu/ancient/athe6.asp."
    ]
  },
  {
    category: "Prices & Commodities",
    icon: <Scroll size={24} />,
    items: [
      "Aristotle. “Economics.” Book 2, section 1347a. Perseus Digital Library. Accessed December 4, 2025. http://data.perseus.org/citations/urn:cts:greekLit:tlg0086.tlg029.perseus-eng1:2.1347a.",
      "“CGRN 57 Provisions for priests and priestesses (in Aixone?).” Attic Inscriptions Online. Accessed December 4, 2025. https://www.atticinscriptions.com/inscription/IGII2/1356.",
      "Erdkamp, Paul. “Prices.” Oxford Classical Dictionary. April 26, 2018. Accessed December 4, 2025. https://oxfordre.com/classics/view/10.1093/acrefore/9780199381135.001.0001/acrefore-9780199381135-e-8254.",
      "Pritchett, W. Kendrick. The Attic Stelai, Part II. Baltimore, MD: American School of Classical Studies at Athens, 1956.",
      "Rathbone, Dominic, and Sitta von Reden. “Mediterranean Grain Prices in Classical Antiquity.” In A History of Market Performance From Ancient Babylonia to the Modern World, 149–235. London: Routledge, 2014.",
      "Reger, Gary. Regionalism and Change in the Economy of Independent Delos. Berkeley: University of California Press, 1994. http://ark.cdlib.org/ark:/13030/ft6g50071w/.",
      "“AIO 1189 Sacrificial Calendar of Athens (later phase).” Attic Inscriptions Online. Accessed December 4, 2025. https://www.atticinscriptions.com/inscription/AIO/1189.",
      "“SEG 50.168 The sacrificial calendar of the Marathonian Tetrapolis.” Attic Inscriptions Online. Accessed December 4, 2025. https://www.atticinscriptions.com/inscription/IGII2/1358."
    ]
  },
  {
    category: "Image Credits",
    icon: <ImageIcon size={24} />,
    items: [
      "Coyau. Wikimedia Commons.",
      "Vijinn. Delos General. 2008. Photograph. Wikimedia Commons. https://commons.wikimedia.org/wiki/File:Delos_general.jpg."
    ]
  }
];

function Sources() {
  const [activeCategory, setActiveCategory] = useState(null);

  const toggleCategory = (index) => {
    if (activeCategory === index) {
      setActiveCategory(null);
    } else {
      setActiveCategory(index);
    }
  };

  return (
    <div className="grain-article-page">
      <style>{`
        /* Local overrides for bibliography formatting */
        .bib-entry {
          margin-bottom: 12px;
          padding-left: 20px;
          text-indent: -20px; /* Hanging indent for Chicago style */
          line-height: 1.6;
          color: #3d2817;
          font-family: 'Georgia', serif;
          font-size: 0.95em;
        }
        
        .source-category-header {
          display: flex;
          align-items: center;
          gap: 15px;
          padding: 15px;
          background: rgba(244, 232, 208, 0.4);
          border: 1px solid #D2B48C;
          border-radius: 8px;
          cursor: pointer;
          margin-bottom: 10px;
          transition: all 0.3s ease;
        }

        .source-category-header:hover {
          background: rgba(244, 232, 208, 0.8);
          border-color: #8B4513;
        }

        .source-category-header h2 {
          margin: 0;
          font-size: 1.2em;
          color: #654321;
          font-family: 'Georgia', serif;
        }

        .source-list {
          padding: 20px;
          background: #fff;
          border: 1px solid #eee;
          border-radius: 8px;
          margin-bottom: 20px;
          animation: slideDown 0.3s ease-out;
        }

        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      <div className="article-container">
        
        <header className="article-header">
          <h1>Bibliography & Sources</h1>
          <div className="article-meta" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '5px' }}>
            <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                <BookOpen size={18} />
                <span>References</span>
            </div>
            <span style={{ fontSize: '0.8em', fontStyle: 'italic', color: '#8B4513' }}>
                The Athenian Daily
            </span>
          </div>
        </header>

        <div className="article-content">
          <section className="article-intro">
            <p style={{ textAlign: 'center', fontStyle: 'italic', color: '#666' }}>
              The following works were consulted in the creation of these visualizations and articles. 
              Citations follow the Chicago Manual of Style.
            </p>
          </section>

          <section id="sources-list" style={{ marginTop: '30px' }}>
            {sourceData.map((section, index) => (
              <div key={index} className="scam-section" style={{ padding: '0', background: 'transparent', border: 'none', boxShadow: 'none' }}>
                
                <div 
                  className="source-category-header"
                  onClick={() => toggleCategory(index)}
                >
                  <div style={{ color: '#8B4513' }}>
                    {section.icon}
                  </div>
                  <h2>{section.category}</h2>
                  <div style={{ marginLeft: 'auto', fontSize: '0.8em', color: '#8B7355' }}>
                    {activeCategory === index ? "▲" : "▼"}
                  </div>
                </div>

                {activeCategory === index && (
                  <div className="source-list fade-in">
                    {section.items.map((item, i) => (
                      <div key={i} className="bib-entry">
                        {item}
                      </div>
                    ))}
                  </div>
                )}

              </div>
            ))}
          </section>

        </div>
        
        <div className="article-footer" style={{ textAlign: 'center' }}>
          &copy; 2025 The Athenian Daily.
        </div>
      </div>
    </div>
  );
}

export default Sources;