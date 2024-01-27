import React from "react";
import { HomePageSections } from '../DataFiles/HomePageData.js'
import {useNavigate} from "react-router-dom"

export default function TextSection() {

    let navigate=useNavigate()
    function routeChange(fileName) {
        let path = fileName;
        if (fileName === "HomePage"){
            document.documentElement.scrollTop = 0;
            return;
        }
        navigate(path)
    }
    
    return (
        <div className="gridContainer">
            {HomePageSections.map((section, index) => 
                (<div key={index} className="gridItem" onClick={
                    ()=>{
                        if(section.SectionID){
                            routeChange(section.SectionID)
                        }
                    }}>
                    <h3>{section.title}</h3>
                    <p>{section.description}</p>
                </div>
                ))}
        </div>
    )
}