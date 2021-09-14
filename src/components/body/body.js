import React from 'react'
import Separator from '../common/separator/separator'
import About from './about/about'
import "./body.css"
import Contact from './contact/contact'
import Projects from './projects/projects'
import Skills from './skills/skills'
import Work from './work/work'

function Body() {
    return (
        <div className="body">
            <section id="about">
                <About />
            </section>
            <section id="projects">
                <Separator />
                <Projects />
            </section>
            <section id="skills">
                <Separator />
                <Skills />
            </section>
            <section id="work">
                <Separator />
                <Work />
            </section>
            <section id="contact">
                <Separator />
                <Contact />
            </section>
        </div>
    )
}

export default Body
