import React, { useState, useRef } from "react";
import { ProjectsArray } from "../DataFiles/ProjectsData";
import Modal from "react-modal";
import '../CSS/Projects.css'

Modal.setAppElement("#root"); // Set the root element for accessibility

export default function Projects() {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);
    const imgRef = useRef(null);

    const openModal = (image) => {
        setSelectedImage(image);
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setSelectedImage(null);
        setModalIsOpen(false);
    };

    const calculateImageWidth = (imageCount) => {
        return imageCount >= 5 ? "10%" : "20%";
    };

    return (
        <div className="ProjectsBody">
            <h1>Projects</h1>
            {ProjectsArray.map((category, categoryIndex) => (
                <div key={categoryIndex}>
                    <h2>{category.Category}</h2>
                    {category.Project.map((project, projectIndex) => (
                        <div key={`${categoryIndex}-${projectIndex}`}>
                            <h1>
                                <a
                                    href={project.GithubLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {project.Title}
                                </a>
                            </h1>
                            <p>{project.Description}</p>
                            <div className="image-gallery">
                                {project.ImageLinks.map((imageLink, imgIndex) => (
                                    <img
                                        key={imgIndex}
                                        src={imageLink}
                                        alt={`Project ${imgIndex + 1}`}
                                        onClick={() => openModal(imageLink)}
                                        style={{ width: calculateImageWidth(project.ImageLinks.length), height: "200px" }}
                                        ref={imgRef}
                                    />
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            ))}
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="Image Modal"
            >
                <button onClick={closeModal}>Close</button>
                {selectedImage && (
                    <img
                        src={selectedImage}
                        alt="Selected Project Image"
                        style={{ width: "100%", height: "100%" }}
                    />
                )}
            </Modal>
        </div>
    );
}
