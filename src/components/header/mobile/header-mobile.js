import React from 'react'
import "./header-mobile.css"
import "./../../../assets/css/uicons-regular-rounded.css"


function HeaderMobile({isOpen, setIsOpen}) {
    return (
        <div className="header-mobile">
            <div className="close-icon" onClick={()=> setIsOpen(!isOpen)}>
                <i className="fi-rr-cross-small"></i>
            </div>
            <div className="mobile-options">
                <div className="mobile-option" onClick={()=> setIsOpen(!isOpen)}>
                    <a href="#projects">
                        <i class="fi-rr-edit option-icon"></i>
                        Projects
                    </a>
                </div>
                <div className="mobile-option" onClick={()=> setIsOpen(!isOpen)}>
                    <a href="#skills">
                        <i class="fi-rr-diploma option-icon"></i>
                        Skills
                    </a>
                </div>
                <div className="mobile-option" onClick={()=> setIsOpen(!isOpen)}>
                    <a href="#work">
                        <i class="fi-rr-briefcase option-icon"></i>
                        Work
                    </a>
                </div>
                <div className="mobile-option" onClick={()=> setIsOpen(!isOpen)}>
                    <a href="#contact">
                        <i class="fi-rr-portrait option-icon"></i>
                        Contact
                    </a>
                </div>
            </div>
        </div>
    )
}

export default HeaderMobile
