import React from 'react'
import "./header-mobile.css"

function Header_Mobile({isOpen, setIsOpen}) {
    return (
        <div className="header-mobile">
            <div className="close-icon" onClick={()=> setIsOpen(!isOpen)}>
                <i class="fi-rr-cross-small"></i>
            </div>
            <div className="mobile-options">
                <div className="mobile-option">
                    <a href="#project">
                        <i class="fi-rr-edit option-icon"></i>
                        Projects
                    </a>
                </div>
                <div className="mobile-option">
                    <a href="#skills">
                        <i class="fi-rr-diploma option-icon"></i>
                        Skills
                    </a>
                </div>
                <div className="mobile-option">
                    <a href="#work">
                        <i class="fi-rr-briefcase option-icon"></i>
                        Work
                    </a>
                </div>
                <div className="mobile-option">
                    <a href="#contact">
                        <i class="fi-rr-portrait option-icon"></i>
                        Contact
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Header_Mobile
