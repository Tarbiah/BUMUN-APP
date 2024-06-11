
import React, { useState,useEffect } from 'react';
import configureScrollReveal from '../../configureScrollReveal';
import { Link } from 'react-router-dom';
import Navbar from '../../Navbar';
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

    useEffect(() => {
      configureScrollReveal();
    }, []);
 return (
    <div className="unsc">
        <Navbar/>
      <header className="header">
        <img
          src={pnabg}
          alt="Header Background"
          className="header-background"
        />
        <div className="overlay"></div>
    
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