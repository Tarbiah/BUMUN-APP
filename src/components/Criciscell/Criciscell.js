
import React, { useState,useEffect } from 'react';
import configureScrollReveal from '../../configureScrollReveal';
import { Link } from 'react-router-dom';
import './Criciscell.css'; // Import the corresponding CSS file
import celllogo from '../Images/criciscelllogo.jpg';
import unscbg from '../Images/cricisbg.jpg';
import bumunlogo from '../Images/bumunlogo.png';
import Navbar from '../../Navbar';
const Criciscell = () => {
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
    useEffect(() => {
      configureScrollReveal();
    }, []);
    
 return (
    <div className="unsc">
        <Navbar/>
      <header className="header">
        <img
          src={unscbg}
          alt="Header Background"
          className="header-background"
        />
        <div className="overlay"></div>
     
        <div className="center-text">
          <p><h1>CRICIS CELL</h1></p>
        </div>
      </header>

      {/*-----------------------------------------*/}
      <div className="line-container">
        <hr className="line" />
      </div>
            <div className="socialadditional-content">
                <div className="sociallogo-container">
                    <img src={celllogo} alt="New Logo" className="sociallogo3" />
                </div>
                <div className="socialtext-content">
                    <h3>CRICIS CELL </h3>
                    <p>A CRISIS CELL IN A MODEL UNITED NATIONS (MUN) IS A SPECIALIZED
                    COMMITTEE OR BODY THAT SIMULATES REAL-TIME,<br/> DYNAMIC
                    INTERNATIONAL CRISES. DELEGATES IN A CRISIS CELL MUST RESPOND
                    TO UNPREDICTABLE <br/>AND EVOLVING SCENARIOS, OFTEN INVOLVING
                    COMPLEX POLITICAL, DIPLOMATIC, MILITARY, OR HUMANITARIAN
                    CHALLENGES.<br/> THIS UNIQUE MUN COMMITTEE FORMAT ENCOURAGES
                    QUICK THINKING, ADAPTABILITY, <br/>AND STRATEGIC DECISION-MAKING AS
                    PARTICIPANTS WORK TOGETHER OR AGAINST EACH OTHER TO
                    NAVIGATE AND RESOLVE <br/>THE CRISIS.
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
export default Criciscell;