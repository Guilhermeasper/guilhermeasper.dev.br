import React from 'react'
import "./social-contact.css"
import { SocialData} from "../../data/social"

function SocialContact() {
    const data = SocialData;
    return (
        <div className="social-contact">
            {data.map((item) => {
                return (
                    <a href={item.link} key={item.platform} target="_blank" rel="noopener noreferrer">
                        <div className="social-icon-div">
                            <img alt={item.platform} src={item.icon} className="social-icon" />
                        </div>
                    </a>
                )
            })}
        </div>
    )
}

export default SocialContact
