// Home.js

import React, { useState, useEffect } from 'react';
import './Home.css';
import Navbar from '../../Navbar';
import bumunlogo from '../Images/bumunlogo.png';
import Ahsan from '../Images/Ahsan.png';
import bahriae8 from '../Images/bahriae8.jpg';
import ScrollReveal from 'scrollreveal';
import configureScrollReveal from '../../configureScrollReveal';
import { Link } from 'react-router-dom';

const Home = () => {
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

 /* const sr = ScrollReveal({
    origin: 'bottom',
    distance: '20px',
    duration: 1000,
    delay: 200,
    easing: 'ease',
    reset: true,
  });
  
  useEffect(() => {
    sr.reveal('.ceenter-text', {});
    
  }, []);*/


    useEffect(() => {
      configureScrollReveal();
    }, []);
  


  return (
    <div className="home">
      <Navbar/>
      <header className="heaader">
        <img
          src={bahriae8}
          alt="Header Background"
          className="heaader-background"
        />
        <div className="overlay"></div>
      
        
        <div className="ceenter-text">
          <p><h1>BAHRIA UNIVERSITY</h1></p>
          <p><h1>Model United Nations</h1></p>
          <p><h3>The annual session will take place on 7th March - 9th March, 2024</h3></p>
          <button className="register-button"><Link to="/info" className="reg-link">Register Now</Link></button>
        </div>
       
      </header>
      <div className="lletter-container">
        <div className="lletter">
          <h2>A Letter from the President:</h2>
          <p>Esteemed Delegates,</p>
         <p>It is with great enthusiasm that I invite you to participate in the grandest diplomatic event of the year – BUMUN'24, the Bahria University Model United Nations Conference! Marking a significant milestone, this year's conference promises to be an unforgettable experience, exceeding even the most ambitious expectations not only in Islamabad but across Pakistan.</p>
         <p>As we embark on this exciting journey, we carry the legacy of fostering dialogue and understanding, a tradition established by countless passionate individuals who have contributed to BUMUN's success over the years. We are honored to build upon this legacy and create a platform for young minds from across Pakistan and beyond to engage in meaningful discussions on the most pressing global challenges.</p>
        <p>BUMUN'24 will transcend the boundaries of a mere academic exercise. We envision it as a vibrant space where diverse perspectives converge, fueled by intellectual discourse, collaboration, and the spirit of diplomacy. Our esteemed committees – the United Nations Security Council (UNSC), UN Women (UNWOMEN), UN Human Rights Council (UNHRC), Crisis Cell, Pakistan National Assembly (PNA), and C40 Cities – will offer delegates the opportunity to delve deep into critical issues, from international security and human rights to environmental sustainability and national governance.</p>
          <p>Beyond committee sessions, BUMUN'24 promises a captivating social experience. We have meticulously curated exciting evening events that will allow you to unwind, build lasting friendships, and forge connections that transcend geographical and cultural boundaries.</p>
          <p>This year, BUMUN'24 aims to be more than just a conference; it aspires to be a transformative experience. We invite you to join us on this remarkable journey, where you will hone your negotiation skills, develop critical thinking, and learn the art of respectful disagreement. Together, we will strive to find innovative solutions to the world's most pressing problems, all while fostering a spirit of unity and understanding.</p>
          <p>We eagerly await your participation and contributions to BUMUN’24. Mark your calendars, prepare for engaging debates, and get ready to be a part of history!
</p>
          <p>Sincerely, <br />Chaudhry Ahsan Munir</p>
          <p>President</p>
          <p>BAHRIA UNIVERSITY Model United Nations 2023-24</p>
        </div>
        


        <div className="imageee-container">
        <img src={Ahsan} alt="Your Image" className="your-imageee-class" />
      </div>
      </div>
    {/* Footer */}

    <div className="ffooter-container">
            <img src={bumunlogo} alt="Footer Logo" className="ffooter-logo" />
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

export default Home;
