import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import "./LandingPage.scss"; // Import the SCSS file for styling
import pic1 from "../../assets/images/Netflix-avatar-software.png";
import pic2 from "../../assets/images/Netflix-avatar-art.png";
import pic3 from "../../assets/images/Netflix-avatar-generic.png";

const LandingPage = () => {
  return (
    <div className="landing-page">
      <h1 className="landing-page__title">What are you looking for?</h1>

      <div className="landing-page__images-container">
        {/* Link to Software Engineer Page */}
        <Link to="/software-engineer" className="landing-page__link">
          <img src={pic1} alt="Site 1" className="landing-page__image" />
          <h3>
            Tami as a<br /> Software Engineer
          </h3>
        </Link>

        {/* External link to your Wixsite */}
        <a
          href="https://tamipoliwoda.wixsite.com/home"
          target="_blank"
          rel="noopener noreferrer"
          className="landing-page__link"
        >
          <img src={pic2} alt="Site 2" className="landing-page__image" />
          <h3>
            Tami as an
            <br /> Animator
          </h3>
        </a>

        {/* Link to the About page */}
        <Link to="/about" className="landing-page__link">
          <img src={pic3} alt="Site 3" className="landing-page__image" />
          <h3>
            Learn more
            <br /> about me
          </h3>
        </Link>
      </div>
      <a
        href="mailto:tamipoliwoda@me.com"
        className="landing-page__contact-button"
      >
        <p>Contact Me</p>
      </a>
    </div>
  );
};

export default LandingPage;
