import React from 'react'
import SocialContact from '../../common/social-contact/social-contact'
import "./about.css"

function About() {
    return (
        <div className="about">
            <div className="about-top">
                <div className="about-info">
                    <span className="welcome">Bem vindo</span>
                    <br /> Me chamo Guilherme Afonso, 
                    <br /> estudante de Ciência da computação, 
                    <br /> futuro engenheiro de software e
                    <br /> youtuber nas horas vagas
                </div>
                <div className="about-photo">
                    <img alt="" 
                    src={require("../../../assets/photo.jpg").default}
                    className="profile-photo"></img>
                </div>
            </div>
            <div className="about-bottom">
                <SocialContact />
            </div>
        </div>
    )
}

export default About
