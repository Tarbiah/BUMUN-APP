
import React, { useState,useEffect } from 'react';
import Navbar from '../../Navbar';
import configureScrollReveal from '../../configureScrollReveal';
import bahriaImage from '../Images/bahria.jpg';
import { Link } from 'react-router-dom';
import './Unsc.css'; // Import the corresponding CSS file
import unsclogo from '../Images/unsc.png';
import unscbg from '../Images/unscbg2.jpg';
import bumunlogo from '../Images/bumunlogo.png';
const Unsc = () => {
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
          <p><h1>UNITED NATIONS SECURITY COUNCIL</h1></p>
        </div>
      </header>

      {/*-----------------------------------------*/}
      <div className="line-container">
        <hr className="line" />
      </div>
            <div className="socialadditional-content">
                <div className="sociallogo-container">
                    <img src={unsclogo} alt="New Logo" className="sociallogo3" />
                </div>
                <div className="socialtext-content">
                    <h3>UNITED NATIONS SECURITY COUNCIL (UNSC) </h3>
                    <p>THE UNITED NATIONS SECURITY COUNCIL (UNSC) IS THE
                        PRIMARY PEACE KEEPING ORGAN OF THE UNITED NATIONS.<br/>
                            THE UNSC WORKS TO DIFFUSE ACTS OF AGGRESSION AND
                            THREATS TO THE MAINTENANCE OF PEACE BOTH
                            INTERNATIONALLY AND NATIONALLY;<br/> IN THE WORDS OF
                            THE UN CHARTER, THE UNSC SERVES TO "INVESTIGATE ANY
                            DISPUTE, <br/>OR ANY SITUATION WHICH MIGHT LEAD TO
                            INTERNATIONAL FRICTION OR GIVE RISE TO A DISPUTE, IN
                            ORDER TO DETERMINE WHETHER<br/> THE CONTINUANCE OF
                            THE DISPUTE OR SITUATION IS LIKELY TO ENDANGER THE
                            MAINTENANCE OF INTERNATIONAL <br/>PEACE AND SECURITY.</p>
                    
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
export default Unsc;