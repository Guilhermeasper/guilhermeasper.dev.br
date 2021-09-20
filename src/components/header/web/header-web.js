import React from 'react'
import "./header-web.css"

function HeaderWeb() {
    return (
        <div className="header-web">
            <div className="web-option">
                <a href="#projects">
                    <i className="fi-rr-edit option-icon"></i>
                    Projetos
                </a>
            </div>
            <div className="header-separator"></div>
            <div className="web-option">
                <a href="#skills">
                    <i className="fi-rr-diploma option-icon"></i>
                    Skills
                </a>
            </div>
            <div className="header-separator"></div>
            <div className="web-option">
                <a href="#work">
                    <i className="fi-rr-briefcase option-icon"></i>
                    Trabalho
                </a>
            </div>
            <div className="header-separator"></div>
            <div className="web-option">
                <a href="#contact">
                    <i className="fi-rr-portrait option-icon"></i>
                    Contato
                </a>
            </div>
        </div>
    )
}

export default HeaderWeb
