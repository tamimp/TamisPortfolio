import React from "react";
import "./SoftwareEngineerPage.scss"; // Import the SCSS file

const SoftwareEngineerPage = () => {
  const projects = [
    {
      title: "Save A Smile",
      description:
        "Save-A-Smile is a mobile app designed to help users capture and revisit moments of happiness. Users can upload photos, write descriptions of why the moments made them smile, and store these memories in a personalized gallery. The app features a shuffle function to randomly display a saved memory, providing a joyful reminder on days when users need a pick-me-up.",
      mainImage: "/src/assets/sas/demo.mov",
      additionalImages: [
        // Directly use relative paths for additional images
        "/src/assets/sas/Desktop_login.png",
        "/src/assets/sas/Desktop_main.png",
        "/src/assets/sas/Desktop_gallery.png",
        "/src/assets/sas/Desktop_upload.png",
        "/src/assets/sas/codesnippet-animation.png",
        "/src/assets/sas/codesnippet-random.png",
      ],
    },
    {
      title: "Project 2",
      description: "This is the description for Project 2.",
      mainImage: "", // No video
      additionalImages: [
        "https://via.placeholder.com/100",
        "https://via.placeholder.com/100",
        "https://via.placeholder.com/100",
        "https://via.placeholder.com/100",
        "https://via.placeholder.com/100",
        "https://via.placeholder.com/100",
      ],
    },
    {
      title: "Project 3",
      description: "This is the description for Project 3.",
      mainImage: "path/to/video.mp4", // Replace with your local video path
      additionalImages: [],
    },
  ];

  return (
    <div className="software-engineer-page">
      <h1 className="software-engineer-page__title">My Projects</h1>

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
    </div>
  );
};

export default SoftwareEngineerPage;
