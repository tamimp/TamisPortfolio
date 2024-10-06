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
      <p className="about-page__mobile">
        {" "}
        Hi, I'm Tami! <br></br>
        As a Designer and Developer with a background in animation, a diploma in
        software engineering, and a Master's degree in Computer Animation, I
        bring a unique combination of technical expertise and creative
        problem-solving to my work.<br></br> After a successful career in the
        animation industry, where I honed my attention to detail and artistic
        vision, I decided to grow my knowledge by diving into software
        development. What drew me to this field is the way it blends logic and
        creativity, allowing me to solve complex problems while building
        innovative and impactful digital solutions. I find joy in creating
        visually appealing user interfaces that prioritize usability. My goal is
        to create impactful digital experiences that merge design and
        technology.{" "}
      </p>
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
