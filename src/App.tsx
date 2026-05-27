import { useState, useEffect } from 'react'
import './App.css'
import Sidebar from './components/Sidebar'
import ResourcePanel from './components/ResourcePanel'
import QuizPanel from './components/QuizPanel'
import { startAnalytics, trackUnitSelect } from './lib/analytics'

export interface Topic {
  id: string;
  name: string;
  concepts: string[];
}

export interface Unit {
  id: number;
  title: string;
  description: string;
  pdfPath: string;
  audioPath?: string;
  skills: string[];
  topics: Topic[];
}

const units: Unit[] = [
  { 
    id: 8, 
    title: 'Unit 8: Stoichiometry and Formula Math', 
    description: 'Study guide for mole conversions, empirical formulas, limiting reactants, and quantitative reaction work.',
    pdfPath: '/resources/Unit8.pdf',
    skills: ['Mole conversions', 'Empirical formulas', 'Limiting reactants', 'Percent yield'],
    topics: [
      { id: '8.1', name: 'Mole Relationships', concepts: ['Molar mass', 'Particle conversions', 'Mass-to-mole problems'] },
      { id: '8.2', name: 'Formula Composition', concepts: ['Percent composition', 'Empirical formulas', 'Molecular formulas'] },
      { id: '8.3', name: 'Reaction Stoichiometry', concepts: ['Balanced equation ratios', 'Limiting reactants', 'Theoretical yield'] }
    ]
  },
  { 
    id: 9, 
    title: 'Unit 9: Redox and Electrochemistry Foundations', 
    description: 'Study guide for oxidation-reduction patterns, oxidation numbers, and balancing redox equations.',
    pdfPath: '/resources/Unit9.pdf',
    skills: ['Oxidation numbers', 'Redox balancing', 'Activity series', 'Electron transfer'],
    topics: [
      { id: '9.1', name: 'Redox Vocabulary', concepts: ['Oxidation and reduction', 'Oxidizing and reducing agents', 'Electron accounting'] },
      { id: '9.2', name: 'Oxidation Numbers', concepts: ['Assignment rules', 'Identifying changed elements', 'Reaction classification'] },
      { id: '9.3', name: 'Balancing Redox', concepts: ['Acidic solutions', 'Basic solutions', 'Half-reaction method'] }
    ]
  },
  { 
    id: 10, 
    title: 'Unit 10: Gases', 
    description: 'Study guide for pressure, gas laws, molar volume, and kinetic molecular theory.',
    pdfPath: '/resources/Unit10.pdf',
    skills: ['Gas laws', 'Pressure conversions', 'Ideal gas law', 'Kinetic molecular theory'],
    topics: [
      { id: '10.1', name: 'Gas Measurements', concepts: ['Pressure units', 'Temperature in kelvin', 'Volume and amount'] },
      { id: '10.2', name: 'Gas Laws', concepts: ['Boyle law', 'Charles law', 'Combined gas law'] },
      { id: '10.3', name: 'Ideal Gases', concepts: ['PV = nRT', 'Molar volume', 'Particle motion'] }
    ]
  },
  { 
    id: 11, 
    title: 'Unit 11: Solutions', 
    description: 'Study guide for solvation, concentration, electrolytes, and solution calculations.',
    pdfPath: '/resources/Unit11.pdf',
    skills: ['Solvation', 'Molarity', 'Dilution', 'Electrolytes'],
    topics: [
      { id: '11.1', name: 'Solution Formation', concepts: ['Solute and solvent', 'Polarity', 'Solvation'] },
      { id: '11.2', name: 'Concentration', concepts: ['Molarity', 'Dilution equation', 'Solution preparation'] },
      { id: '11.3', name: 'Properties', concepts: ['Electrolytes', 'Saturated solutions', 'Factors affecting dissolving'] }
    ]
  },
  { 
    id: 12, 
    title: 'Unit 12: Solution Properties', 
    description: 'Study guide for molality, colligative properties, Henry law, and solution behavior.',
    pdfPath: '/resources/Unit12.pdf',
    skills: ['Molality', 'Colligative properties', 'Henry law', 'Freezing point depression'],
    topics: [
      { id: '12.1', name: 'Concentration Models', concepts: ['Molality', 'Molarity comparison', 'Parts-based concentration'] },
      { id: '12.2', name: 'Colligative Properties', concepts: ['Boiling point elevation', 'Freezing point depression', 'Particle count effects'] },
      { id: '12.3', name: 'Gas Solubility', concepts: ['Henry law', 'Pressure effects', 'Temperature effects'] }
    ]
  },
  { 
    id: 13, 
    title: 'Unit 13: Thermochemistry', 
    description: 'Study guide for heat, calorimetry, phase changes, and enthalpy relationships.',
    pdfPath: '/resources/Unit13.pdf',
    skills: ['Specific heat', 'Calorimetry', 'Heating curves', 'Hess law'],
    topics: [
      { id: '13.1', name: 'Heat Transfer', concepts: ['Endothermic and exothermic', 'Specific heat', 'Calorimetry setup'] },
      { id: '13.2', name: 'Phase Energy', concepts: ['Heating curves', 'Heat of fusion', 'Heat of vaporization'] },
      { id: '13.3', name: 'Enthalpy', concepts: ['Reaction energy', 'Hess law', 'Energy diagrams'] }
    ]
  },
  { 
    id: 14, 
    title: 'Unit 14: Reaction Rates and Equilibrium', 
    description: 'Study guide for reaction mechanisms, catalysts, equilibrium constants, and system shifts.',
    pdfPath: '/resources/Unit14.pdf',
    skills: ['Rate factors', 'Catalysts', 'Equilibrium constants', 'Le Chatelier reasoning'],
    topics: [
      { id: '14.1', name: 'Kinetics', concepts: ['Collision theory', 'Activation energy', 'Rate changes'] },
      { id: '14.2', name: 'Mechanisms', concepts: ['Elementary steps', 'Intermediates', 'Catalysts'] },
      { id: '14.3', name: 'Equilibrium', concepts: ['Equilibrium constant', 'Reaction quotient', 'Stress responses'] }
    ]
  },
  {
    id: 15,
    title: 'Unit 15: Acids and Bases',
    description: 'Study guide for acid-base theories, pH, neutralization, salts, and conjugate pairs.',
    pdfPath: '/resources/Unit15.pdf',
    skills: ['pH and pOH', 'Strong vs weak acids', 'Neutralization', 'Conjugate pairs'],
    topics: [
      { id: '15.1', name: 'Acid-Base Theories', concepts: ['Arrhenius model', 'Bronsted-Lowry model', 'Conjugate acid-base pairs'] },
      { id: '15.2', name: 'Strength and pH', concepts: ['Strong vs weak', 'pH scale', 'Hydrogen ion concentration'] },
      { id: '15.3', name: 'Reactions', concepts: ['Neutralization', 'Titration basics', 'Salts in solution'] }
    ]
  },
  {
    id: 16,
    title: 'Unit 16: Electrochemistry',
    description: 'Study guide for electrochemical cells, half-cells, cell potential, and electrolytic cells.',
    pdfPath: '/resources/Unit16.pdf',
    skills: ['Half-cells', 'Cell potential', 'Galvanic cells', 'Electrolytic cells'],
    topics: [
      { id: '16.1', name: 'Electrochemical Cells', concepts: ['Anodes and cathodes', 'Salt bridges', 'Electron flow'] },
      { id: '16.2', name: 'Cell Potentials', concepts: ['Reduction potentials', 'Cell voltage', 'Spontaneity'] },
      { id: '16.3', name: 'Electrolysis', concepts: ['Nonspontaneous reactions', 'External voltage', 'Electrolytic cells'] }
    ]
  },
  {
    id: 17,
    title: 'Unit 17: Nuclear Chemistry',
    description: 'Study guide for nuclear reactions, radioactive decay, half-life, fission, and fusion.',
    pdfPath: '/resources/Unit17.pdf',
    skills: ['Nuclear notation', 'Half-life', 'Fission vs fusion', 'Decay equations'],
    topics: [
      { id: '17.1', name: 'Nuclear Reactions', concepts: ['Alpha decay', 'Beta decay', 'Gamma radiation'] },
      { id: '17.2', name: 'Half-Life', concepts: ['Decay curves', 'Remaining mass', 'Elapsed time'] },
      { id: '17.3', name: 'Nuclear Energy', concepts: ['Fission', 'Fusion', 'Applications and risks'] }
    ]
  }
];

function App() {
  const [currentUnit, setCurrentUnit] = useState<Unit>(units[0]);
  const [currentView, setCurrentView] = useState<'guides' | 'quiz'>('guides');

  useEffect(() => {
    return startAnalytics();
  }, []);

  const handleSelectUnit = (unit: Unit) => {
    trackUnitSelect(unit.id, unit.title);
    setCurrentUnit(unit);
  };

  return (
    <div className="app-container">
      <header className="app-header">
        <div className="brand-lockup">
          <span className="brand-mark" aria-hidden="true">M</span>
          <div className="header-titles">
            <h1>MorReview: Honors Chem</h1>
            <p>Study guides, audio review, and final practice</p>
          </div>
        </div>
        <div className="header-actions">
          <label className="curriculum-search">
            <span aria-hidden="true">⌕</span>
            <input type="search" placeholder="Search curriculum..." />
          </label>
          <nav className="view-tabs" aria-label="Study mode">
            <button
              type="button"
              className={`view-tab ${currentView === 'guides' ? 'active' : ''}`}
              onClick={() => setCurrentView('guides')}
            >
              Study
            </button>
            <button
              type="button"
              className={`view-tab ${currentView === 'quiz' ? 'active' : ''}`}
              onClick={() => setCurrentView('quiz')}
            >
              Quiz
            </button>
          </nav>
        </div>
      </header>
      {currentView === 'guides' ? (
        <div className="main-content">
          <Sidebar units={units} currentUnitId={currentUnit.id} onSelectUnit={handleSelectUnit} />
          <main className="resource-area">
            <ResourcePanel unit={currentUnit} />
          </main>
        </div>
      ) : (
        <div className="main-content quiz-content">
          <main className="resource-area quiz-area">
            <QuizPanel />
          </main>
        </div>
      )}
      <nav className="mobile-tabbar" aria-label="Primary">
          <button
            type="button"
            className={`mobile-tab ${currentView === 'guides' ? 'active' : ''}`}
            onClick={() => setCurrentView('guides')}
          >
            <span aria-hidden="true">▤</span>
            Study
          </button>
          <button
            type="button"
            className={`mobile-tab ${currentView === 'quiz' ? 'active' : ''}`}
            onClick={() => setCurrentView('quiz')}
          >
            <span aria-hidden="true">?</span>
            Quiz
          </button>
        </nav>
    </div>
  )
}

export default App
