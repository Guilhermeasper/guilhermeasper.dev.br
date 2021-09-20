import React from 'react'
import "./skill-card.css"

function SkillCard( {skill}) {
    return (
        <div className="skill-card">
            <div className="skill-level" tabIndex="0">{skill.level}</div>
            <div className="skill-icon">{skill.icon}</div>
            <label className="skill-name">{skill.name}</label>
        </div>
    )
}

export default SkillCard
