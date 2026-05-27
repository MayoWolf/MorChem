import { useState, useEffect } from 'react'
import './App.css'
import Sidebar from './components/Sidebar'
import ResourcePanel from './components/ResourcePanel'
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
  skills: string[];
  topics: Topic[];
}

const units: Unit[] = [
  { 
    id: 1, 
    title: 'Unit 1: Matter, Measurement, and Lab Skills', 
    description: 'Build the foundation for safe lab work, dimensional analysis, precision, accuracy, and the classification of matter.',
    skills: ['Safety routines', 'Significant figures', 'Unit conversions', 'Data tables and graphs'],
    topics: [
      { id: '1.1', name: 'Matter and Properties', concepts: ['Pure substances vs mixtures', 'Physical and chemical properties', 'Intensive and extensive properties'] },
      { id: '1.2', name: 'Measurement', concepts: ['SI units and metric prefixes', 'Accuracy, precision, and percent error', 'Reading graduated equipment'] },
      { id: '1.3', name: 'Calculations', concepts: ['Dimensional analysis', 'Scientific notation', 'Significant figures in operations'] },
      { id: '1.4', name: 'Lab Evidence', concepts: ['Claim-evidence-reasoning', 'Graphing relationships', 'Sources of experimental error'] }
    ]
  },
  { 
    id: 2, 
    title: 'Unit 2: Atomic Structure and Nuclear Chemistry', 
    description: 'Connect atomic models, isotopes, electron structure, and nuclear changes to the behavior of elements.',
    skills: ['Isotope notation', 'Average atomic mass', 'Electron configurations', 'Half-life reasoning'],
    topics: [
      { id: '2.1', name: 'Atomic Models', concepts: ['Subatomic particles', 'Atomic number and mass number', 'Development of atomic theory'] },
      { id: '2.2', name: 'Isotopes', concepts: ['Hyphen and nuclear notation', 'Average atomic mass', 'Relative abundance'] },
      { id: '2.3', name: 'Electron Arrangement', concepts: ['Energy levels and orbitals', 'Aufbau order', 'Valence electrons'] },
      { id: '2.4', name: 'Nuclear Change', concepts: ['Alpha, beta, and gamma radiation', 'Balancing nuclear equations', 'Half-life calculations'] }
    ]
  },
  { 
    id: 3, 
    title: 'Unit 3: Periodic Trends and Ions', 
    description: 'Use the periodic table to predict properties, ion formation, and patterns across groups and periods.',
    skills: ['Periodic table navigation', 'Trend explanations', 'Ion charge prediction', 'Lewis dot symbols'],
    topics: [
      { id: '3.1', name: 'Periodic Organization', concepts: ['Groups, periods, and blocks', 'Metals, nonmetals, and metalloids', 'Families and common properties'] },
      { id: '3.2', name: 'Trends', concepts: ['Atomic radius', 'Ionization energy', 'Electronegativity'] },
      { id: '3.3', name: 'Ions', concepts: ['Cations and anions', 'Isoelectronic ions', 'Common ion charges'] },
      { id: '3.4', name: 'Valence Models', concepts: ['Lewis symbols', 'Octet rule', 'Exceptions to simple patterns'] }
    ]
  },
  { 
    id: 4, 
    title: 'Unit 4: Chemical Bonding and Nomenclature', 
    description: 'Compare ionic, covalent, and metallic bonding while writing formulas and naming compounds.',
    skills: ['Formula writing', 'Compound naming', 'Lewis structures', 'Molecular geometry basics'],
    topics: [
      { id: '4.1', name: 'Ionic Bonding', concepts: ['Lattice structures', 'Polyatomic ions', 'Transition metal charges'] },
      { id: '4.2', name: 'Covalent Bonding', concepts: ['Prefixes and molecular formulas', 'Single, double, and triple bonds', 'Resonance basics'] },
      { id: '4.3', name: 'Polarity', concepts: ['Bond polarity', 'Molecular shape', 'Intermolecular forces'] },
      { id: '4.4', name: 'Naming Systems', concepts: ['Ionic nomenclature', 'Molecular nomenclature', 'Acids and hydrates'] }
    ]
  },
  { 
    id: 5, 
    title: 'Unit 5: Mole Concept and Stoichiometry', 
    description: 'Move between particles, moles, mass, and volume to quantify chemical formulas and reactions.',
    skills: ['Mole conversions', 'Molar mass', 'Empirical formulas', 'Limiting reactants'],
    topics: [
      { id: '5.1', name: 'The Mole', concepts: ['Avogadro number', 'Molar mass', 'Mole-to-particle conversions'] },
      { id: '5.2', name: 'Formula Composition', concepts: ['Percent composition', 'Empirical formulas', 'Molecular formulas'] },
      { id: '5.3', name: 'Reaction Math', concepts: ['Balanced equation ratios', 'Mass-to-mass stoichiometry', 'Gas volume at STP'] },
      { id: '5.4', name: 'Yield', concepts: ['Limiting and excess reactants', 'Theoretical yield', 'Percent yield'] }
    ]
  },
  { 
    id: 6, 
    title: 'Unit 6: Chemical Reactions', 
    description: 'Recognize reaction patterns, write balanced equations, and use evidence to classify chemical change.',
    skills: ['Equation balancing', 'Reaction classification', 'Solubility rules', 'Net ionic equations'],
    topics: [
      { id: '6.1', name: 'Balancing', concepts: ['Law of conservation of mass', 'Coefficients vs subscripts', 'Inspection strategies'] },
      { id: '6.2', name: 'Reaction Types', concepts: ['Synthesis and decomposition', 'Single and double replacement', 'Combustion'] },
      { id: '6.3', name: 'Aqueous Reactions', concepts: ['Solubility rules', 'Precipitation reactions', 'Spectator ions'] },
      { id: '6.4', name: 'Redox Basics', concepts: ['Oxidation and reduction', 'Activity series', 'Oxidation numbers'] }
    ]
  },
  { 
    id: 7, 
    title: 'Unit 7: Thermochemistry and States of Matter', 
    description: 'Explain energy flow, phase changes, gas behavior, and particle motion with quantitative models.',
    skills: ['Heat calculations', 'Phase diagrams', 'Gas laws', 'Kinetic molecular theory'],
    topics: [
      { id: '7.1', name: 'Energy Transfer', concepts: ['Endothermic and exothermic processes', 'Specific heat', 'Calorimetry'] },
      { id: '7.2', name: 'Phase Change', concepts: ['Heating and cooling curves', 'Heat of fusion and vaporization', 'Phase diagrams'] },
      { id: '7.3', name: 'Gases', concepts: ['Pressure and temperature units', 'Boyle, Charles, and combined gas laws', 'Ideal gas law'] },
      { id: '7.4', name: 'Particle Models', concepts: ['Kinetic molecular theory', 'Intermolecular forces', 'Solid, liquid, and gas comparisons'] }
    ]
  },
  {
    id: 8,
    title: 'Unit 8: Solutions, Acids, and Bases',
    description: 'Apply concentration, solution behavior, pH, and neutralization ideas to aqueous systems.',
    skills: ['Molarity', 'Dilution', 'pH calculations', 'Titration setup'],
    topics: [
      { id: '8.1', name: 'Solutions', concepts: ['Solute and solvent', 'Electrolytes and nonelectrolytes', 'Factors affecting dissolving'] },
      { id: '8.2', name: 'Concentration', concepts: ['Molarity', 'Dilution', 'Solution stoichiometry'] },
      { id: '8.3', name: 'Acids and Bases', concepts: ['Arrhenius definitions', 'Strong vs weak', 'pH and pOH'] },
      { id: '8.4', name: 'Neutralization', concepts: ['Acid-base reactions', 'Titration curves', 'Indicators'] }
    ]
  }
];

function App() {
  const [currentUnit, setCurrentUnit] = useState<Unit>(units[0]);

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
        <div className="header-titles">
          <h1>MorReview: Honors Chem</h1>
          <p>PDF study guides and MP3 unit reviews</p>
        </div>
      </header>
      <div className="main-content">
        <Sidebar units={units} currentUnitId={currentUnit.id} onSelectUnit={handleSelectUnit} />
        <main className="resource-area">
          <ResourcePanel unit={currentUnit} />
        </main>
      </div>
    </div>
  )
}

export default App
