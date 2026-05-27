import React from 'react';
import { Unit } from '../App';
import './Sidebar.css';

interface SidebarProps {
  units: Unit[];
  currentUnitId: number;
  onSelectUnit: (unit: Unit) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ units, currentUnitId, onSelectUnit }) => {
  return (
    <nav className="sidebar">
      <div className="sidebar-heading">
        <span className="sidebar-icon" aria-hidden="true">≋</span>
        <div>
          <h2 className="sidebar-title">Units</h2>
          <p>Honors Chem Curriculum</p>
        </div>
      </div>
      <ul className="unit-list">
        {units.map((unit) => (
          <li key={unit.id}>
            <button
              type="button"
              className={`unit-button ${unit.id === currentUnitId ? 'active' : ''}`}
              onClick={() => onSelectUnit(unit)}
            >
              <span className="unit-number">Unit {unit.id}</span>
              <span className="unit-name">{unit.title.split(': ')[1]}</span>
            </button>
          </li>
        ))}
      </ul>
      <div className="sidebar-footer">
        <span>Final review</span>
        <strong>Practice quiz</strong>
      </div>
    </nav>
  );
};

export default Sidebar;
