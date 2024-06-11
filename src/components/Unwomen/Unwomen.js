
import React, { useState,useEffect } from 'react';
import Navbar from '../../Navbar';
import { Link } from 'react-router-dom';
import './Unwomen.css'; // Import the corresponding CSS file
import unwomenlogo from '../Images/unwomenlogo.png';
import unwomenbg from '../Images/unwomenbg2.jpg';
import bumunlogo from '../Images/bumunlogo.png';
import configureScrollReveal from '../../configureScrollReveal';
const Unwomen = () => {
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
          src={unwomenbg}
          alt="Header Background"
          className="header-background"
        />
        <div className="overlay"></div>
     
        <div className="center-text">
          <p><h1>UNITED NATIONS WOMEN</h1></p>
        </div>
      </header>

      {/*-----------------------------------------*/}
      <div className="line-container">
        <hr className="line" />
      </div>
            <div className="socialadditional-content">
                <div className="sociallogo-container">
                    <img src={unwomenlogo} alt="New Logo" className="sociallogo3" />
                </div>
                <div className="socialtext-content">
                    <h3>UNITED NATIONS WOMEN (UNWOMEN) </h3>
                    <p>EMPOWERING WOMEN FUELS THRIVING ECONOMIES, SPURRING
                      PRODUCTIVITY AND GROWTH.<br/> YET GENDER INEQUALITIES REMAIN
                      DEEPLY ENTRENCHED IN EVERY SOCIETY. <br/>A GLOBAL CHAMPION FOR
                      WOMEN AND GIRLS, UN WOMEN IS THE UNITED NATIONS ENTITY
                      DEDICATED TO GENDER EQUALITY AND <br/>THE EMPOWERMENT OF
                      WOMEN. WHETHER IT CONCERNS GOVERNMENT, CIVIL OR SOCIAL
                      ISSUES, <br/>HELP WOMEN FIGHT THE INEQUALITIES OF THEIR SOCIETY AND
                      BREAK FREE FROM THE SHACKLES OF PATRIARCHY.</p>
                                          
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
export default Unwomen;