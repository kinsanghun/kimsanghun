import { projectData } from "assets/projectData";
import React, { useEffect, useState } from "react";
import Project from "./project/project";
import './projects.scss';

export default function Projects() {
    const [windowSize, setWindowSize] = useState(window.innerWidth);

    useEffect(()=>{
        window.addEventListener('resize', ()=>{
            setWindowSize(window.innerWidth);
        }, false)
    }, [])
    
    const projectList:JSX.Element[] = [];
    projectData.map((data, index) => {
        const list = (<Project key={data.id} data={data} size={windowSize}/>)
        projectList.push(list);
    })
    return (
        <div className="container projects">
            <div className="content">
                <h2>Projects</h2>
                {projectList}
            </div>
        </div>
    )
}