import React, { useEffect, useState } from "react";
import { HomePageSections } from '../DataFiles/HomePageData.js';
import { useNavigate } from "react-router-dom";

export default function TextSection() {
    const navigate = useNavigate();
    const [animationIndex, setAnimationIndex] = useState(-1);

    useEffect(() => {
        const interval = setInterval(() => {
            setAnimationIndex((prevIndex) => {
                if (prevIndex < HomePageSections.length - 1) {
                    return prevIndex + 1;
                } else {
                    clearInterval(interval); // Stop the interval when all elements are animated
                    return prevIndex;
                }
            });
        }, 500); // Adjust the delay between animations (in milliseconds)
        
        return () => clearInterval(interval);
    }, []);

    function routeChange(fileName) {
        let path = fileName;
        console.log(path);
        if (fileName === "/HomePage") {
            document.documentElement.scrollTop = 0;
            return;
        }
        navigate(path);
    }

    return (
        <div className="gridContainer">
            {HomePageSections.map((section, index) => (
                <div
                    key={index}
                    className={`gridItem ${index <= animationIndex ? 'animated' : ''}`}
                    onClick={() => {
                        if (section.SectionID) {
                            routeChange('/' + section.SectionID);
                        }
                    }}
                >
                    <h3>{section.title}</h3>
                    <p>{section.description}</p>
                </div>
            ))}
        </div>
    );
}