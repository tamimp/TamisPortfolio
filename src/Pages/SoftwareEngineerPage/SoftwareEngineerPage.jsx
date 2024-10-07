import React from "react";
import "./SoftwareEngineerPage.scss"; // Import the SCSS file for styling
import Header from "../../Components/Header/Header"; // Header component
import Footer from "../../Components/Footer/Footer"; // Footer component

// Media imports for 'Save A Smile' project
import SaveASmileMainVideo from "/src/assets/sas/demo.mov";
import SaveASmileImage1 from "/src/assets/sas/Desktop_login.png";
import SaveASmileImage2 from "/src/assets/sas/Desktop_main.png";
import SaveASmileImage3 from "/src/assets/sas/Desktop_gallery.png";
import SaveASmileImage4 from "/src/assets/sas/Desktop_upload.png";

// Media imports for 'Online Xylophone' project
import XylophoneMainVideo from "/src/assets/xylophone/demo.mov";
import XylophoneImage1 from "/src/assets/xylophone/sample1.png";
import XylophoneImage2 from "/src/assets/xylophone/sample2.png";
import XylophoneImage3 from "/src/assets/xylophone/sample3.png";
import XylophoneImage4 from "/src/assets/xylophone/sample4.png";

// Media imports for 'HorseHorseHorse' project
import HorseHorseHorseMainVideo from "/src/assets/horse/Demo.mov";
import HorseHorseHorseImage1 from "/src/assets/horse/sample1.png";
import HorseHorseHorseImage2 from "/src/assets/horse/sample2.png";
import HorseHorseHorseImage3 from "/src/assets/horse/sample3.png";
import HorseHorseHorseImage4 from "/src/assets/horse/sample4.png";

const SoftwareEngineerPage = () => {
  const projects = [
    {
      title: "Save A Smile",
      description:
        "Save-A-Smile is a mobile app designed to help users capture and revisit moments of happiness. Users can upload photos, write descriptions of why the moments made them smile, and store these memories in a personalized gallery. The app features a shuffle function to randomly display a saved memory, providing a joyful reminder on days when users need a pick-me-up. Built with React, and Node.js, the app allows users to upload photos and save meaningful moments, enhancing emotional well-being through interactive design.",
      link: "https://github.com/tamimp/SaveASmile",
      mainImage: SaveASmileMainVideo,
      additionalImages: [
        SaveASmileImage1,
        SaveASmileImage2,
        SaveASmileImage3,
        SaveASmileImage4,
      ],
    },
    {
      title: "Online Xylophone",
      description:
        "The Xylophone App is a playful, interactive musical experience built with React, HTML, CSS, and JavaScript. It offers a responsive design, ensuring a smooth and colorful experience on mobile, tablet, and desktop. The app allows users to play different notes, with sounds implemented using audio assets, providing an engaging, cross-platform music tool.",
      link: "https://xylophone-chi.vercel.app/",
      mainImage: XylophoneMainVideo,
      additionalImages: [
        XylophoneImage1,
        XylophoneImage2,
        XylophoneImage3,
        XylophoneImage4,
      ],
    },
    {
      title: "HorseHorseHorse",
      description:
        "Enjoy this simple site where users can click to generate a randomly coloured horse. HorseHorseHorse is an interactive web app that generates randomly colored horses with each click, using React and SCSS. There is a playful feature which allows users to pet the horses, triggering a friendly greeting, enhancing user engagement and adding a whimsical touch to the experience.",
      link: "https://horsehorsehorse.netlify.app/",
      mainImage: HorseHorseHorseMainVideo,
      additionalImages: [
        HorseHorseHorseImage1,
        HorseHorseHorseImage2,
        HorseHorseHorseImage3,
        HorseHorseHorseImage4,
      ],
    },
  ];

  return (
    <div className="software-engineer-page">
      <Header /> {/* Integrate the Header here */}
      {projects.map((project, index) => (
        <div className="software-engineer-page__project" key={index}>
          <div className="software-engineer-page__project-main">
            {project.mainImage ? (
              <video
                className="software-engineer-page__project-main-image"
                src={project.mainImage}
                controls
                alt={project.title}
              />
            ) : (
              <div className="software-engineer-page__project-placeholder">
                No video available
              </div>
            )}
            <div className="software-engineer-page__project-info">
              <h2 className="software-engineer-page__project-title">
                {project.title}
              </h2>
              <p className="software-engineer-page__project-description">
                {project.description}
              </p>
              {project.link && (
                <a
                  className="software-engineer-page__project-link"
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Try me out here
                </a>
              )}
            </div>
          </div>

          <div className="software-engineer-page__project-gallery">
            {project.additionalImages.length > 0 ? (
              project.additionalImages.map((image, idx) => (
                <img
                  key={idx}
                  className="software-engineer-page__project-gallery-image"
                  src={image}
                  alt={`${project.title} ${idx + 1}`}
                />
              ))
            ) : (
              <div className="software-engineer-page__project-placeholder">
                No additional images available
              </div>
            )}
          </div>
        </div>
      ))}
      <Footer /> {/* Include the Footer here */}
    </div>
  );
};

export default SoftwareEngineerPage;
