import React from 'react'
import SocialContact from '../../common/social-contact/social-contact'
import "./contact.css"

function Contact() {
    return (
        <div className="contact">
            <label className="section-title">Contato</label>
            <div className="contact-container">
                <div className="contact-left">
                    <p className="message">Gostou do que viu até aqui? Me chama pra gente bater um papo</p>
                    <SocialContact />
                </div>
                <div className="download">
                    <a download href={require("../../../assets/Resume.pdf").default}>
                        <i class="fi-rr-download icon"></i>
                        <span className="download-message">Baixar Curriculo</span>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Contact
