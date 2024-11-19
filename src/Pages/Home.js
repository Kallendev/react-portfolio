import React from 'react';
import karenImage from '../Images/posture.jpg';

function Home() {
  return (
    <div className="home-container">
      <div className="main-content">
        <h2><i>Frontend Developer.</i></h2>
        <h3>Hi, I'm Kallen</h3>
        <h4>Mugambi From Kenya.</h4>
      </div>

      <div className="hero-section">
        <img src={karenImage} alt="Karen" className="profile-image" />
      </div>
    </div>
  );
}

export default Home;

