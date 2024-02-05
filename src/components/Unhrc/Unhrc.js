
import React, { useState } from 'react';

import { Link } from 'react-router-dom';
import './Unhrc.css'; // Import the corresponding CSS file
import unhclogo from '../Images/unhrclogo.png';
import unhcbg from '../Images/unhrcbd.jpeg';
import bumunlogo from '../Images/bumunlogo.png';
const Unhrc = () => {
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
          src={unhcbg}
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
          <p><h1>UNITED NATIONS HUMAN RIGHTS COUNCIL</h1></p>
        </div>
      </header>

      {/*-----------------------------------------*/}
      <div className="line-container">
        <hr className="line" />
      </div>
            <div className="socialadditional-content">
                <div className="sociallogo-container">
                    <img src={unhclogo} alt="New Logo" className="sociallogo3" />
                </div>
                <div className="socialtext-content">
                    <h3>UNITED NATIONS HUMAN RIGHTS COUNCIL (UNHRC) </h3>
                    <p>THE UN HUMAN RIGHTS COUNCIL (UNHRC) IS A UNITED NATIONS BODY
                    WHOSE OBJECTIVE IS TO PROMOTE AND <br/>DEFEND HUMAN RIGHTS
                    AROUND THE WORLD. IN THE INTERNATIONAL COMMUNITY, ITS ROLE IS
                    TO EXAMINE <br/>HUMAN RIGHTS VIOLATIONS AND RECOMMEND HOW
                    THEY SHOULD BE ADDRESSED.<br/> FURTHERMORE, THE COUNCIL LOOKS TO
                    PROMOTE FUNDAMENTAL HUMAN RIGHTS AND FREEDOMS IN A
                    UNIVERSAL MANNER-AT <br/>THE INTERNATIONAL LEGAL LEVEL. WITH
                    THESE RESPONSIBILITIES IN MIND, THE UNHRC LOOKS TO DISCUSS
                    TOPICS OF <br/>GLOBAL CONCERN, WHILE CONSIDERING UNIVERSALLY
                    APPLIED STANDARDS OF HUMANE TREATMENT.
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
export default Unhrc;