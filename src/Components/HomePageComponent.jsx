import React from "react";
import { HomePageSections } from '../DataFiles/HomePageData.js'

export default function TextSection() {
    return (
        <div className="gridContainer">
            {HomePageSections.map((section, index) => 
                (<div key={index} className="gridItem">
                    <h3>{section.title}</h3>
                    <p>{section.description}</p>
                </div>
                ))}
        </div>
    )
}