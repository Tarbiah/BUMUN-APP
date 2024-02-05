// Teams.js

import React, { useState } from 'react';
import bahriaImage from '../Images/bahria.jpg';
import bumunlogo from '../Images/bumunlogo.png';
import afridi from '../Images/Afridi.PNG';
import ahsan from '../Images/Ahsan.png';
import Rehan from '../Images/Rehan.png';
import marwat from '../Images/Marwat.png';
import teambg from '../Images/teambg.jpg';
import { Link } from 'react-router-dom';
import './Teams.css'; // Import the corresponding CSS file


const Teams = () => {
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
    <div className="teams">
      <header className="headder">
        <img
          src={teambg}
          alt="Header Background"
          className="headder-background"
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
          <p><h1>THE TEAM</h1></p>
        </div>
      </header>

   

<section className="executive-council">
  <h2 className="section-heading">The Executive Council</h2>
  <hr className="section-line" />

  <div className="blue-container">
    <div className="container-content">
      <div className="image-container">
        {/* Replace 'path_to_your_image' with the actual path to your image */}
        <img src={afridi} alt="Executive Council" className="councilpics" />
      </div>
      <div className="text-content">
        
      <p>Hazrat Shah Afridi, an accomplished individual in his fourth year pursuing studies in Electrical Engineering at Bahria University Islamabad, stands as a prominent figure in both leadership and academic spheres. It is with great honor and enthusiasm that he extends a warm welcome to all participants of the esteemed Bahria University Model United Nations 2024, where he holds the pivotal position of Branch Chair, IEEE.</p>

      <p>Throughout his academic journey, Hazrat Shah Afridi has demonstrated a keen commitment to leadership roles, starting as a dedicated member and steadily progressing into influential positions. He has been a driving force within various Host Teams, contributing significantly to their success over the years. Hazrat Shah Afridi's diverse experiences have provided him with a profound understanding of the positive impact that active engagement in leadership and effective communication activities can have on personal development and awareness.</p>

      <p>As he approaches the culmination of his leadership tenure, Hazrat Shah Afridi is eager to share a wealth of memories and insights with the BUMUN’24 host team, directorates, and delegates. His dedication to fostering an environment characterized by collaboration, growth, and shared experiences underscores his commitment to ensuring that BUMUN'24 becomes an indelible chapter in the Model United Nations journey for all participants. Hazrat Shah Afridi's leadership is poised to leave a lasting legacy, making the upcoming conference a memorable and enriching experience for everyone involved.</p>

      </div>
    </div>
  </div>
  <hr className="section-line" />

  <div className="blue-container">
    <div className="container-content">
      <div className="text-content">
        
        <p>Ahsan Munir is a fourth-year student at Bahria University Islamabad, majoring in Electrical Engineering. He finds it to be his immense pleasure and privilege to welcome you all to the most awaited event of Bahria University Islamabad, Bahria University Model United Nations as this year’s President of the BUMUN.</p>

        <p>Leadership as a sport and BUMUN, in particular, have had a tremendous impact on Ahsan’s high school and university life, first as a member and later as a leader in different portfolios of AIESEC and part of the several Host Teams for the past several years. He has seen the tremendous impact that leadership and communication skills as an activity can have on himself and his peers in terms of personal growth and awareness and hopes to provide an even more enriching experience to all the delegates attending the BUMUN’24 this year. Outside of Model UN, Ahsan can be found watching documentaries, reading books, and traveling around the country with his friends.</p>

        <p>As he reaches the final stages of his leadership and everlasting legacy with BUMUN, Ahsan is excited to share many memories and experiences with the BUMUN’24 host team, directorates, and delegates at the conference and looks forward to welcoming you all very soon.</p>
  
      </div>
      <div className="image-container">
        {/* Replace 'path_to_your_image' with the actual path to your image */}
        <img src={ahsan} alt="Executive Council" className="councilpics1" />
      </div>
    </div>
  </div>
  <hr className="section-line" />

  <div className="blue-container">
    <div className="container-content">
      <div className="image-container">
        {/* Replace 'path_to_your_image' with the actual path to your image */}
        <img src={Rehan} alt="Executive Council" className="councilpics1" />
      </div>
      <div className="text-content">
        
      <p>Muhammad Rehan, a distinguished fourth-year student majoring in Electrical Engineering at Bahria University Islamabad, stands at the forefront of leadership and academic pursuits. It is with immense pleasure and privilege that he extends a heartfelt welcome to all participants of the highly anticipated Bahria University Model United Nations 2024, serving as this year's General Secretary for BUMUN.</p>

      <p>Rehan's journey through high school and university has been marked by his active involvement in various leadership roles. Commencing as a member and progressively assuming leadership positions, he has played an integral role in several Host Teams over the past several years. Through these diverse experiences, Rehan has observed firsthand the transformative impact that engagement in leadership and communication activities can have on personal growth and awareness.</p>

      <p>Approaching the final stages of his leadership and leaving an enduring legacy with BUMUN, Rehan is eager to share numerous memories and experiences with the BUMUN’24 host team, directorates, and delegates at the upcoming conference. His commitment to fostering an environment of collaboration, growth, and shared experiences reflects his dedication to making BUMUN'24 an unforgettable chapter in the Model United Nations journey for all participants.</p>

      </div>
    </div>
  </div>
  <hr className="section-line" />

  <div className="blue-container">
    <div className="container-content">
      <div className="text-content">
      <p>Abdul Wadood Marwat, an accomplished fourth-year student pursuing a major in Electrical Engineering at Bahria University Islamabad, stands as a notable figure in the realms of both academia and leadership. With a sense of pride and enthusiasm, he extends a warm welcome to all participants of the highly anticipated Bahria University Model United Nations 2024, where he holds the vital position of Under Secretary.</p>

      <p>Throughout his academic journey, Abdul Wadood Marwat has demonstrated a steadfast commitment to leadership roles. Starting as a dedicated member and progressing into influential positions within various teams, he has been instrumental in contributing to their success over the years. Abdul Wadood Marwat's diverse experiences have provided him with valuable insights into the transformative impact of active engagement in leadership and effective communication activities on personal development and awareness.</p>

      <p>Approaching his role as Under Secretary with a sense of responsibility and enthusiasm, Abdul Wadood Marwat is poised to share his wealth of experiences and insights with the BUMUN’24 host team, directorates, and delegates. His commitment to fostering an environment characterized by collaboration, growth, and shared experiences reflects his dedication to ensuring that BUMUN'24 becomes an indelible chapter in the Model United Nations journey for all participants. Abdul Wadood Marwat's leadership is set to contribute significantly to the success of the conference, creating a memorable and enriching experience for everyone involved.</p>

      </div>
      <div className="image-container">
        {/* Replace 'path_to_your_image' with the actual path to your image */}
        <img src={marwat} alt="Executive Council" className="councilpics1" />
      </div>
    </div>
  </div>
</section>



<div className="footeerr-container">
            <img src={bumunlogo} alt="Footer Logo" className="footeerr-logo" />
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

export default Teams;
