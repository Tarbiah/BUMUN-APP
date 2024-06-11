import React, { useState, useEffect } from 'react';
import bahriaImage from '../Images/regbg2.jpg';
import bumunlogo from '../Images/bumunlogo.png';
import { Link } from 'react-router-dom';
import configureScrollReveal from '../../configureScrollReveal';
import './Information.css'; // Import the corresponding CSS file
import Navbar from '../../Navbar';
const Information = () => {
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
          src={bahriaImage}
          alt="Header Background"
          className="header-background"
        />
        <div className="overlay"></div>
      
        <div className="center-text">
          <p><h1>INFORMATION</h1></p>
        </div>
      </header>

      {/* How to Register Section */}
      <hr className="section-line" />
      <div className="register-container">
        <h2>How to Register:</h2>
        <ol>
          <li>Click the "Register Now" button on the home page or visit the Information section.</li>
          <li>Select the appropriate category from the options mentioned below and click the "Register Now" button to register for the particular category.</li>
          <li>Upon clicking the "Register Now" button, you will be directed to a Google Form. Fill in the details correctly and then press "Submit".</li>
        </ol>
      </div>
      <hr className="section-line" />
      <h2 className="sec">Registration Section</h2>
      {/* Six Separate Containers */}
      <div className="category-container">
        <div className="category-text">
          <p>Ambassadors Registration</p>
        </div>
        <div className="register-button-container">
        <a href="https://forms.gle/4dCfZoSTSeRSskEYA" className="register-button" target="_blank" rel="noopener noreferrer">
        Register Now
        </a>

        </div>
      </div>
      <div className="category-container">
        <div className="category-text">
          <p>Delegate Registration</p>
        </div>
        <div className="register-button-container">
        <a href="https://forms.gle/tpiMGiqfjgWogVTAA" className="register-button" target="_blank" rel="noopener noreferrer">
        Register Now
        </a>

        </div>
      </div>
      {/* Repeat the above structure for the other 5 categories */}
      <div className="category-container">
        <div className="category-text">
          <p>Delegation Registration</p>
        </div>
        <div className="register-button-container">
        <a href="https://forms.gle/AJzKgEoMQGfMt39D9" className="register-button" target="_blank" rel="noopener noreferrer">
        Register Now
        </a>

        </div>
      </div>


      <div className="category-container">
        <div className="category-text">
          <p>Observer Registration</p>
        </div>
        <div className="register-button-container">
        <a href="https://forms.gle/FcufdhgzFdvwCBtw7" className="register-button" target="_blank" rel="noopener noreferrer">
        Register Now
        </a>

        </div>
      </div>


      <div className="category-container">
        <div className="category-text">
          <p>Socials Registration</p>
        </div>
        <div className="register-button-container">
        <a href="https://forms.gle/wQEF36UPzcbtQqUV8" className="register-button" target="_blank" rel="noopener noreferrer">
        Register Now
        </a>

        </div>
      </div>

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
};

export default Information;
