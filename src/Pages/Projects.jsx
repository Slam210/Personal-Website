import React, { useState } from "react";
import { ProjectsArray } from "../DataFiles/ProjectsData";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import "../CSS/Projects.css";

export default function Projects() {
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
                                />
                            </div>
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
}
