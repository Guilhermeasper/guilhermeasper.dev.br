import React from "react";
import "./project-card.css";

function ProjectCard({ project }) {
	return (
		<div className="project-card">
			<div className="project-info">
				<label className="project-title">{project.title}</label>
				<div className="project-links">
					{project.demo && (
						<a className="project-link" href="{project.demo}">
							<div className="link-button">
								<i className="fi-rr-globe icon-link"></i>Demo
							</div>
						</a>
					)}
                    {project.github && (
						<a className="project-link" href={project.github}>
							<div className="link-button">
                                <i className="devicon-github-original icon-link"></i>Github
							</div>
						</a>
					)}
				</div>
                <p className="project-description">{project.description}</p>
                <div className="project-tags">
                    {project.tags.map((tag) => {
                        return <label className="tag">{tag}</label>
                    })}
                </div>
			</div>
			<img src={project.image} className="project-photo" />
		</div>
	);
}

export default ProjectCard;
