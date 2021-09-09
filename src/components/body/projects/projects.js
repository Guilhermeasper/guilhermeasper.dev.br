import React from 'react'
import "./projects.css"
import { ProjectData } from "../../data/projects"
import ProjectCard from './project-card/project-card';

function Projects() {
    const data = ProjectData;
    return (
        <div className="projects">
            <label className="section-title">Projetos</label>
            <div className="projects-list">
                {data.map((project) => {
                    return <ProjectCard project={project} />;
                })}
            </div>
        </div>
    )
}

export default Projects
