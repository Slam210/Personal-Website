import React from 'react';
import '../CSS/AboutMe.css';
import { AboutMeSections } from '../DataFiles/AboutMeData.js';

export default function AboutMe() {
  return (
    <div className="AboutMeBody">
        <div className="ProfilePicture"></div>
        {AboutMeSections.map((section, index) => (
            <div key={index} className="AboutMeSection">
            <h3>{section.sectionTitle}</h3>
            <ul>
                {section.content.split('\n').map((point, pointIndex) => (
                <li key={pointIndex}>{point.trim()}</li>
                ))}
            </ul>
            </div>
        ))}
    </div>
  );
}