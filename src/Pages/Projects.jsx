import React, { useState } from "react";
import { ProjectsArray } from "../DataFiles/ProjectsData";
import Modal from "react-modal";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import "../CSS/Projects.css";

Modal.setAppElement("#root"); // Set the root element for accessibility

export default function Projects() {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [selectedImages, setSelectedImages] = useState([]);
    const [selectedImageIndex, setSelectedImageIndex] = useState(0);

    const openModal = (images, index) => {
        setSelectedImages(images);
        setSelectedImageIndex(index);
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setSelectedImages([]);
        setSelectedImageIndex(0);
        setModalIsOpen(false);
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
                                <ImageGallery
                                    items={project.ImageLinks.map(imageLink => ({
                                        original: imageLink,
                                        thumbnail: imageLink
                                    }))}
                                    showThumbnails={true}
                                    onClickThumbnail={(e, index) => openModal(project.ImageLinks, index)}
                                />
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
                {selectedImages.length > 0 && (
                    <ImageGallery
                        items={selectedImages.map(imageLink => ({
                            original: imageLink,
                            thumbnail: imageLink
                        }))}
                        startIndex={selectedImageIndex}
                        showIndex={true}
                    />
                )}
            </Modal>
        </div>
    );
}
