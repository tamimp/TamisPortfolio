import React from "react";
import { Link } from "react-router-dom"; // Import Link for routing
import "./Header.scss"; // Import the SCSS file
import logo from "../../assets/images/header_logo.png"; // Logo image
import login from "../../assets/images/Netflix-avatar-software.png"; // Profile image (if needed)
import photo from "../../assets/images/profile.png"; // About image

const Header = () => {
  return (
    <header className="header">
      <nav>
        <div className="header__logo">
          <Link to="/software-engineer">
            <img src={logo} alt="Logo" />
          </Link>
        </div>
        <nav className="header__nav">
          <ul className="header__nav-list">
            <li className="header__nav-item">
              <Link to="/software-engineer">Home</Link>
            </li>
            <li className="header__nav-item">
              <a
                href="https://www.linkedin.com/in/tamipoliwoda/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </li>
            <li className="header__nav-item">
              <a
                href="https://github.com/tamimp"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </li>
            <li className="header__nav-item">
              <Link to="/About">About</Link>
            </li>
            <li className="header__nav-item">
              <a href="mailto:tamipoliwoda@me.com">Contact</a>
            </li>
          </ul>
        </nav>
        <div className="header__profile">
          <Link to="/">
            {/* Link to the landing page */}
            <img
              src={login}
              alt="Profile"
              className="header__profile-image"
              title="Back to profile selection?" // Tooltip text
            />
          </Link>
        </div>
      </nav>
      {/* About Section Moved Here */}
      <div className="header__about">
        <img src={photo} alt="Profile photo" />
        <p>
          Hi, I'm Tami! <br></br>
          As a Designer and Developer with a background in animation, a diploma
          in software engineering, and a Master's degree in Computer Animation,
          I bring a unique combination of technical expertise and creative
          problem-solving to my work.<br></br> After a successful career in the
          animation industry, where I honed my attention to detail and artistic
          vision, I decided to grow my knowledge by diving into software
          development. What drew me to this field is the way it blends logic and
          creativity, allowing me to solve complex problems while building
          innovative and impactful digital solutions.<br></br> I am passionate
          about developing user-friendly applications that not only function
          seamlessly but also deliver an engaging experience. My experience in
          animation has given me a sharp eye for design and user experience,
          which I now apply to front-end development. <br></br>I am particularly
          excited about building responsive and dynamic applications with
          technologies like React, Node, and MySQL, and I find joy in creating
          visually appealing user interfaces that prioritize usability. My goal
          is to create impactful digital experiences that merge design and
          technology.{" "}
        </p>
      </div>
    </header>
  );
};

export default Header;
