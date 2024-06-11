// Navbar.js
import React, { useState } from 'react';
import './Navbar.css';
import bumunlogo from './components/Images/bumunlogo.png'
import { Link } from 'react-router-dom';
const Navbar = () => {
  const [menuVisible, setMenuVisible] = useState(false);
  const [teamOptionsVisible, setTeamOptionsVisible] = useState(false);
  const [committeesOptionsVisible, setCommitteesOptionsVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  const toggleTeamOptions = () => {
    setTeamOptionsVisible(!teamOptionsVisible);
    setCommitteesOptionsVisible(false); // Close committees options when opening team options
  };

  const toggleCommitteesOptions = () => {
    setCommitteesOptionsVisible(!committeesOptionsVisible);
    setTeamOptionsVisible(false); // Close team options when opening committees options
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <img src={bumunlogo} alt="Your Logo" />
        </div>


      <div className={`nav-options ${menuVisible ? 'menu-visible' : ''}`}>
        <ul>
          <li className='mainhtci'><Link to="/" className="homeoption">Home</Link></li>
          <li className='mainhtci' onClick={toggleTeamOptions}>Team
            {teamOptionsVisible && (
              <ul className="sub-options">
                <li className='subtc'><Link to="/teams" className="team-link">The Executive Council</Link></li>
                <li className='subtc'><Link to="/directorates" className="team-link">The Directorate</Link></li>
              </ul>
            )}
          </li>
          <li className='mainhtci' onClick={toggleCommitteesOptions}>Committees
            {committeesOptionsVisible && (
              <ul className="sub-options">
                <li className='subtc'><Link to="/unsc" className="team-link">UNSC</Link></li>
                <li className='subtc'><Link to="/pna" className="team-link">PNA</Link></li>
                <li className='subtc'><Link to="/unhrc" className="team-link">UNHRC</Link></li>
                <li className='subtc'><Link to="/unwomen" className="team-link">UNWOMEN</Link></li>
                <li className='subtc'><Link to="/c40" className="team-link">C-40 CITIES</Link></li>
                <li className='subtc'><Link to="/criciscell" className="team-link">CRISIS CELL</Link></li>
              </ul>
            )}
          </li>
          <li className='mainhtci'><Link to="/info" className="teamm-link">Information</Link></li>
        </ul>
      </div>

      <div className="hamburger-menu" onClick={toggleMenu}>
        ☰
      </div>
    </nav>
  );
};

export default Navbar;
