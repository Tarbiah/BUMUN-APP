// Teams.js

import React, { useState, useEffect } from 'react';
import Navbar from '../../Navbar';
import bahriaImage from '../Images/bahria.jpg';
import configureScrollReveal from '../../configureScrollReveal';
import temasbg from '../Images/teambg.jpg';
import bumunlogo from '../Images/bumunlogo.png';
import Noor from '../Images/Noor.png';
import saad from '../Images/Saad.png';
import Daniyal from '../Images/Danial.png';
import usman from '../Images/Usman.png';
import Moiz from '../Images/Moiz.png';
import Mohsin from '../Images/Mohsin.png';
import sadia from '../Images/Sadia.png';
import ahad from '../Images/Ahad.png';
import kamran from '../Images/Kamran.png';
import alfahad from '../Images/Alfahad.png';
import hammadashfaq from '../Images/Hmmad.png';
import junaid from '../Images/Junaid.png';
import abdullahsagir from '../Images/AbdullahSagir.png';
import sanaullah from '../Images/Sanaullah.png';
import hammad from '../Images/Hammad.png';
import momna from'../Images/Momna.png';
import hanzala from'../Images/hanzala.png';
import { Link } from 'react-router-dom';
import './Directorates.css'; // Import the corresponding CSS file


const Directorates = () => {
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
    <div className="directorates">
        <Navbar/>
      <header className="hheader">
        <img
          src={temasbg}
          alt="Header Background"
          className="hheader-background"
        />
        <div className="overlay"></div>
      
        <div className="center-text">
          <p><h1>THE TEAM</h1></p>
        </div>
      </header>

   {/* Container with "The Directorate" heading */}
   <div className="directorates-heading-container">
        <h2 className="directorates-heading">The Directorate</h2>
      </div>

      {/* Container with a straight line */}
      <div className="line-container">
        <hr className="line" />
      </div>
      {/*------------------------------------------------------------------------------------*/}
      {/* Container with two sub-containers horizontally */}
      <div className="sub-containers">
        {/* Sub-container 1 */}
        <div className="sub-container">
          <h3>Registeration</h3>
          <div className="images-container">
            {/* Image 1 */}
            <div className="image-container">
              <img src={Noor} alt="Image 1" className="image" />
              <div className="image-info">
                <p>Noor Naseer</p>
                
              </div>
            </div>

            {/* Image 2 */}
            <div className="image-container">
              <img src={Daniyal} alt="Image 2" className="image" />
              <div className="image-info">
                <p>Daniyal Iftikhar</p>
                <p>Contact: 03115563395</p>
              </div>
            </div>
          </div>
        </div>

        {/* Sub-container 2 */}
        <div className="sub-container">
          <h3>Media</h3>
          <div className="images-container">
            {/* Image 3 */}
            <div className="image-container">
              <img src={Moiz} alt="Image 3" className="image" />
              <div className="image-info">
                <p>Abdul Moiz Raza</p>
                <p>Contact: 03345156445</p>
              </div>
            </div>

            {/* Image 4 */}
            <div className="image-container">
              <img src={Mohsin} alt="Image 4" className="image" />
              <div className="image-info">
                <p>Muhammad Mohsin Murtaza</p>
                <p>Contact: 03157602454</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*--------------------------------------------------------------------------------------------------------------*/}
      <div className="sub-containers">
        {/* Sub-container 1 */}
        <div className="sub-container">
          <h3>Marketing</h3>
          <div className="images-container">
            {/* Image 1 */}
            <div className="image-container">
              <img src={sadia} alt="Image 1" className="image" />
              <div className="image-info">
                <p>Sadia Sagheer </p>
                
              </div>
            </div>

            {/* Image 2 */}
            <div className="image-container">
              <img src={ahad} alt="Image 2" className="image" />
              <div className="image-info">
                <p>Abdul Ahad Razzaq</p>
                <p>Contact: 03086900830</p>
              </div>
            </div>
          </div>
        </div>

        {/* Sub-container 2 */}
        <div className="sub-container">
          <h3>Finance</h3>
          <div className="images-container">
            {/* Image 3 */}
            <div className="image-container">
              <img src={saad} alt="Image 3" className="image" />
              <div className="image-info">
                <p>Saad Kamran</p>
                <p>Contact: 03215155019</p>
              </div>
            </div>

            {/* Image 4 */}
            <div className="image-container">
              <img src={alfahad} alt="Image 4" className="image" />
              <div className="image-info">
                <p>Alfahad Bin Jan</p>
                <p>Contact: 03443353024</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*------------------------------------------------------------------------------------*/}
      <div className="sub-containers">
        {/* Sub-container 1 */}
        <div className="sub-container">
          <h3>Socials</h3>
          <div className="images-container">
            {/* Image 1 */}
            <div className="image-container">
              <img src={hammadashfaq} alt="Image 1" className="image" />
              <div className="image-info">
                <p>Hammad Ishfaq</p>
                <p>Contact: 03115670073</p>
              </div>
            </div>

            {/* Image 2 */}
            <div className="image-container">
              <img src={junaid} alt="Image 2" className="image" />
              <div className="image-info">
                <p>Junaid Ahmed</p>
                <p>Contact: 03435601710</p>
              </div>
            </div>
          </div>
        </div>

        {/* Sub-container 2 */}
        <div className="sub-container">
          <h3>Logistics</h3>
          <div className="images-container">
            {/* Image 3 */}
            <div className="image-container">
              <img src={sanaullah} alt="Image 3" className="image" />
              <div className="image-info">
                <p>Sanaullah Abbasi</p>
                <p>Contact: 03335633922</p>
              </div>
            </div>

            {/* Image 4 */}
            <div className="image-container">
              <img src={abdullahsagir} alt="Image 4" className="image" />
              <div className="image-info">
                <p>Abdullah Saghir</p>
                <p>Contact: 03100862677
</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*--------------------------------------------------------------------------------------------------------------*/}
     
      {/*--------------------------------------------------------------------------------------------------------------*/}
      <div className="sub-containers-new">
  {/* Sub-container 3 */}
  <div className="sub-container-new">
  <h3>Security & Protocol</h3>
    <div className="image-container-new">
      {/* Image 5 */}
      <img src={usman} alt="Image 5" className="imagee" />
    </div>
    <div className="image-info">
      <p>Usman Ahmed</p>
      <p>Contact: 03321914907</p>
    </div>
  </div>

  {/* Sub-container 4 */}
  <div className="sub-container-new">
  <h3>Publications</h3>
    <div className="image-container-new">
      {/* Image 6 */}
      <img src={momna} alt="Image 6" className="imagee" />
    </div>
    <div className="image-info">
      <p>Momna Majeed</p>
     
    </div>
  </div>
      </div>
      {/*--------------------------------------------------------------------------------------------------------------*/}
      <div className="sub-containers-new">
      {/* Sub-container 3 */}
      <div className="sub-container-new">
      <h3>Outreach</h3>
        <div className="image-container-new">
          {/* Image 5 */}
          <img src={hammad} alt="Image 5" className="imagee" />
        </div>
        <div className="image-info">
          <p>Hammad Mahmood khan</p>
          <p>Contact: 03348638841</p>
        </div>
      </div>

  {/* Sub-container 4 */}
  <div className="sub-container-new">
  <h3>IT & Support</h3>
    <div className="image-container-new">
      {/* Image 6 */}
      <img src={hanzala} alt="Image 6" className="imagee" />
    </div>
    <div className="image-info">
      <p>Muhammad Hanzala</p>
      <p>Contact: 03035270137
</p>
    </div>
  </div>

 { /*lassst*/}



 
      </div>







      <div className="sub-containers-new">
  {/* Sub-container 3 */}
  <div className="sub-container-new">
  <h3>IT & Support</h3>
    <div className="image-container-new">
      {/* Image 5 */}
      <img src={kamran} alt="Image 5" className="imagee" />
    </div>
    <div className="image-info">
      <p>Syed Kamran Hussain Shah</p>
      <p>Contact: 03155123871</p>
    </div>
  </div>



 { /*lassst*/}



 
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
};

export default Directorates;
