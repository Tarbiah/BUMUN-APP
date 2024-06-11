
import React, { useState,useEffect } from 'react';
import configureScrollReveal from '../../configureScrollReveal';
import { Link } from 'react-router-dom';
import './C40.css'; // Import the corresponding CSS file
import c40logo from '../Images/c40logo.png';
import Navbar from '../../Navbar';
import c40bg from '../Images/cc.jpeg';
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

    useEffect(() => {
      configureScrollReveal();
    }, []);
 return (
    <div className="unsc">
        <Navbar/>
      <header className="header">
        <img
          src={c40bg}
          alt="Header Background"
          className="header-background"
        />
        <div className="overlay"></div>
      
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