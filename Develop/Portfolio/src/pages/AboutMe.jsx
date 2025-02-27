import React from 'react';
import profileImage from '../assets/Professional Picture.jpeg';

const AboutMe = () => {
    return (
      <section>
        <h2>About Me</h2>
        <img src={profileImage} alt="Chad Broome-Webster" />
        <p>Former Professional Football player looking for a role in Software Engineering. Recently completed Columbia's full stack engineering bootcamp. Prior experience in Data Analytics.</p>
      </section>
    );
  };
  
  export default AboutMe;