import React from 'react';
import './about.css';
import bio from '../assets/bio-image.jpg'

export const About = () => {
  return (
    <div className="about">
      <h2>About Me</h2>
      <div className="bio">
        <div className="bio-image">
          <img src={bio} alt="Peak" />
        </div>
        <div className="bio-text">
          <h3>Personal Bio</h3>
          <p>
            I am a rising senior at the University of California, Santa Barbara, majoring in Computer Engineering. My passion for coding and gaming inspired me to create a platform that merges these interests. Through this endeavor, I aim to enhance my coding skills in HTML, CSS, and JavaScript while providing entertainment to a global audience and raising awareness about the exciting world of esports.
          </p>
          <h3>Objective</h3>
          <p>
            Peak Gaming is designed to be a comprehensive resource for the latest tech news and game reviews. The website features engaging gaming videos and offers a detailed guide to computer hardware, highlighting its significance for gaming PCs in terms of both budget and performance. Additionally, it includes a summary of the biggest esports games, aiming to draw more people into this vibrant community. Stay tuned for more exciting developments and future projects at Peak Gaming!
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;