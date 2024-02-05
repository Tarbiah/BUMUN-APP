
import React, { useState } from 'react';

import { Link } from 'react-router-dom';
import './C40.css'; // Import the corresponding CSS file
import c40logo from '../Images/c40logo.png';
import unscbg from '../Images/c40bg.jpg';
import bumunlogo from '../Images/bumunlogo.png';
const C40 = () => {
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
          src={unscbg}
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
          <p><h1>C-40 CITIES</h1></p>
        </div>
      </header>

      {/*-----------------------------------------*/}
      <div className="line-container">
        <hr className="line" />
      </div>
            <div className="socialadditional-content">
                <div className="sociallogo-container">
                    <img src={c40logo} alt="New Logo" className="sociallogo3" />
                </div>
                <div className="socialtext-content">
                    <h3>C-40 CITIES </h3>
                    <p>IN THE DYNAMIC REALM OF THE BAHRIA UNIVERSITY MODEL UNITED NATIONS 2024, THE C40 COMMITTEE EMERGES AS<br/> 
                        A PIVOTAL PLATFORM FOR DELIBERATIONS ON PRESSING GLOBAL ISSUES RELATED TO 
                        URBAN SUSTAINABILITY AND CLIMATE ACTION. <br/>AS THE WORLD GRAPPLES WITH THE CHALLENGES 
                        POSED BY RAPID URBANIZATION <br/>AND ENVIRONMENTAL CONCERNS, THE C40 COMMITTEE TAKES CENTER STAGE, 
                        BRINGING TOGETHER DELEGATES WITH A<br/> SHARED COMMITMENT TO SHAPING INNOVATIVE AND IMPACTFUL SOLUTIONS. 
                        CHAIRED BY EXPERIENCED <br/>AND DEDICATED LEADERS, THE C40 COMMITTEE AT BUMUN SERVES AS A CRUCIBLE FOR
                         DIPLOMATIC DISCOURSE <br/>AND STRATEGIC COLLABORATION, WHERE DELEGATES WILL NAVIGATE THE INTRICATE LANDSCAPE
                          OF INTERNATIONAL <br/>RELATIONS TO ADDRESS THE URGENT MATTERS SURROUNDING CLIMATE CHANGE AND SUSTAINABLE 
                          URBAN DEVELOPMENT. <br/>GET READY FOR ENGAGING DEBATES, NUANCED NEGOTIATIONS, AND COLLABORATIVE PROBLEM-SOLVING
                           WITHIN <br/>THE CONFINES OF THE C40 COMMITTEE, AS IT SEEKS TO DRIVE MEANINGFUL CHANGE IN THE GLOBAL PURSUIT 
                           OF A SUSTAINABLE FUTURE.</p>
                    
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
export default C40;