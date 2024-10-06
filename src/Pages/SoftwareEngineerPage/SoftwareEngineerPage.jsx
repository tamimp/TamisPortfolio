import React from "react";
import "./SoftwareEngineerPage.scss"; // Import the SCSS file for the page
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer"; // Import the Footer

const SoftwareEngineerPage = () => {
  const projects = [
    {
      title: "Save A Smile",
      description:
        "Save-A-Smile is a mobile app designed to help users capture and revisit moments of happiness. Users can upload photos, write descriptions of why the moments made them smile, and store these memories in a personalized gallery. The app features a shuffle function to randomly display a saved memory, providing a joyful reminder on days when users need a pick-me-up. Built with React, and Node.js, the app allows users to upload photos and save meaningful moments, enhancing emotional well-being through interactive design.",
      link: "https://github.com/tamimp/SaveASmile",
      mainImage: "/src/assets/sas/demo.mov",
      additionalImages: [
        "/src/assets/sas/Desktop_login.png",
        "/src/assets/sas/Desktop_main.png",
        "/src/assets/sas/Desktop_gallery.png",
        "/src/assets/sas/Desktop_upload.png",
      ],
    },
    {
      title: "Online Xylophone",
      description:
        "The Xylophone App is a playful, interactive musical experience built with React, HTML, CSS, and JavaScript. It offers a responsive design, ensuring a smooth and colorful experience on mobile, tablet, and desktop. The app allows users to play different notes, with sounds implemented using audio assets, providing an engaging, cross-platform music tool.",
      link: "https://xylophone-chi.vercel.app/",
      mainImage: "/src/assets/xylophone/demo.mov",
      additionalImages: [
        "/src/assets/xylophone/sample1.png",
        "/src/assets/xylophone/sample2.png",
        "/src/assets/xylophone/sample3.png",
        "/src/assets/xylophone/sample4.png",
      ],
    },
    {
      title: "HorseHorseHorse",
      description:
        "Enjoy this simple site where users can click to generate a randomly coloured horse. HorseHorseHorse is an interactive web app that generates randomly colored horses with each click, using React and SCSS. There is a playful feature which allows users to pet the horses, triggering a friendly greeting, enhancing user engagement and adding a whimsical touch to the experience.",
      link: "https://horsehorsehorse.netlify.app/",
      mainImage: "/src/assets/horse/Demo.mov", // Replace with your local video path
      additionalImages: [
        "/src/assets/horse/sample1.png",
        "/src/assets/horse/sample2.png",
        "/src/assets/horse/sample3.png",
        "/src/assets/horse/sample4.png",
      ],
    },
  ];

  return (
    <div className="software-engineer-page">
      <Header /> {/* Integrate the Header here */}
      {/* <h1 className="software-engineer-page__title">My Projects</h1> */}
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
