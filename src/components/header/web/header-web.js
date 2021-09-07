import React from 'react'
import "./header-web.css"

function Header_Web() {
    return (
        <div className="header-web">
            <div className="web-option">
                <a href="#project">
                    <i class="fi-rr-edit option-icon"></i>
                    Projects
                </a>
            </div>
            <div className="web-option">
                <a href="#skills">
                    <i class="fi-rr-diploma option-icon"></i>
                    Skills
                </a>
            </div>
            <div className="web-option">
                <a href="#work">
                    <i class="fi-rr-briefcase option-icon"></i>
                    Work
                </a>
            </div>
            <div className="web-option">
                <a href="#contact">
                    <i class="fi-rr-portrait option-icon"></i>
                    Contact
                </a>
            </div>
        </div>
    )
}

export default Header_Web
