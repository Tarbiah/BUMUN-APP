
import React, { useState } from 'react';

import { Link } from 'react-router-dom';
import './Pna.css'; // Import the corresponding CSS file
import pnalogo from '../Images/pnalogo.png';
import pnabg from '../Images/pnsbg.jpg';
import bumunlogo from '../Images/bumunlogo.png';
const Pna = () => {
    const [teamOptionsVisible, setTeamOptionsVisible] = useState(false);
    const [committeesOptionsVisible, setCommitteesOptionsVisible] = useState(false);
  
    const toggleTeamOptions = () => {
      setTeamOptionsVisible(!teamOptionsVisible);
      setCommitteesOptionsVisible(false); // Close other options when clicking on a new one
    };
  
    const toggleCommitteesOptions = () => {
      setCommitteesOptionsVisible(!committeesOptionsVisible);
      setTeamOptionsVisible(false); // Close other options when clicking on a new one
    };

    
 return (
    <div className="Unhrc">
      <header className="header">
        <img
          src={pnabg}
          alt="Header Background"
          className="header-background"
        />
        <div className="overlay"></div>
        <div className="options">
          <div className="option"><Link to="/" className="homeoption">Home</Link></div>
          
          <div className="option" onClick={toggleTeamOptions}>
            The Team +
            {teamOptionsVisible && (
              <div className="team-options">
                <div className="team-option"><Link to="/teams" className="team-link">The Executive Council </Link></div>
                <div className="team-option"><Link to="/directorates" className="team-link">The Directorate</Link></div>
              
              </div>
            )}
          </div>
          <div className="option" onClick={toggleCommitteesOptions}>
            Committees +
            {committeesOptionsVisible && (
              <div className="committees-options">
                <div className="committees-option"><Link to="/unsc" className="team-link">UNSC</Link></div>
                <div className="committees-option"><Link to="/pna" className="team-link">PNA</Link></div>
                <div className="committees-option"><Link to="/unhrc" className="team-link">UNHRC</Link></div>
                <div className="committees-option"><Link to="/unwomen" className="team-link">UNWOMEN</Link></div>
                <div className="committees-option"><Link to="/criciscell" className="team-link">CRISIS CELL</Link></div>
                <div className="committees-option"><Link to="/c40" className="team-link">C-40</Link></div>
              </div>
            )}
          </div>
          <div className="option"><Link to="/info" className="teamm-link">Information</Link></div>
        </div>
        <div className="center-text">
          <p><h1>PAKISTAN NATIONAL ASSEMBLY</h1></p>
        </div>
      </header>

      {/*-----------------------------------------*/}
      <div className="line-container">
        <hr className="line" />
      </div>
            <div className="socialadditional-content">
                <div className="sociallogo-container">
                    <img src={pnalogo} alt="New Logo" className="sociallogo3" />
                </div>
                <div className="socialtext-content">
                    <h3>PAKISTAN NATIONAL ASSEMBLY (PNA) </h3>
                    <p>75 YEARS, IN THE WAKE OF WINNING OUR FREEDOM, THERE OUGHT TO BE NOT
                    KIDDING REFLECTION ON <br/>THE CONNECTION BETWEEN THE PAKISTANI STATE AND
                    SOCIETY. LEGISLATIVE ISSUES OF PAKISTAN <br/>ARE ONE OF THE WAYS OF THINKING
                    WHERE PAKISTAN WAS HOPED TO BE SET UP IN <br/>1947 AS A NATION STATE, AS
                    ENVISIONED BY THE PIONEER AND STARTING MODELER OF THE COUNTRY, MUHAMMAD ALI JINNAH.<br/> PAKISTAN CHARACTERISTICALLY IS A DEMOCRATIC
                    PARLIAMENTARY REPUBLIC WITH ITS POLITICAL SYSTEM RELIANT UPON A <br/>PICKED
                    SORT OF ORGANIZATION 'PAKISTAN NATIONAL ASSEMBLY: PNA IS RESPONSIBLE TO
                    LOOK OVER THE IMPORTANT DECISIONS<br/> TO BE MADE ON BEHALF OF THE COUNTRY,
                    TO ENSURE EXECUTIVES WORKING PROPERLY, <br/>NO VIOLATION OF CITIZENS' RIGHTS
                    AND TAKING POSSIBLE VENTURES FOR THE PROGRESS OF PAKISTAN, PASSES OR
                    DEBATES ON BILLS AND LAWS.
</p>
                    
                </div>
            </div>


{/* Footer */}

<div className="footerr-container">
            <img src={bumunlogo} alt="Footer Logo" className="footerr-logo" />
                <p>
                    <h3>Contact us at</h3>
                    <a href="https://chat.whatsapp.com/Cm4EiIqRdOU0941ECWuw29" target="_blank" rel="noopener noreferrer">whatsapp</a> |
                    <a href="https://www.instagram.com/bumunisl?igsh=dzg1NmkxZ3hza3cx" target="_blank" rel="noopener noreferrer">Instagram</a> |
                    <a href="mailto:reach.ieeebahria@gmail.com" target="_blank" rel="noopener noreferrer">Gmail</a>
                </p>
            </div>
            
</div>



     
 );
}
export default Pna;