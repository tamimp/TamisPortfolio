import React from "react";
import "./About.scss"; // Ensure you have styles for your new layout
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer"; // Import the Footer

const About = () => {
  const skills = [
    "2D & 3D Animation",
    "Motion Graphics",
    "Compositing",
    "Storyboard Design",
    "Character Design",
    "Illustration",
    "Scene Planning",
    "FX Animation",
    "Fine Art",
    "HTML, CSS, JavaScript",
    "React, Node.js, Express",
    "MySQL, GitHub, Heroku",
    "Agile Development",
    "Web APIs, DOM API Integration",
    "Automation & AI Tools",
    "Visual Design",
    "UX/UI Design",
  ];

  return (
    <div className="about-page">
      <Header /> {/* Integrate the Header here */}
      <h1 className="about-page__title">My Skills</h1>
      <ul className="about-page__skills-list">
        {skills.map((skill, index) => (
          <li className="about-page__skills-item" key={index}>
            {skill}
          </li>
        ))}
      </ul>
      <Footer /> {/* Include the Footer here */}
    </div>
  );
};

export default About;
