import React, { useState } from "react";
import "./header.css";
import HeaderMobile from "./mobile/header-mobile";
import HeaderWeb from "./web/header-web";

function Header() {
    const [isOpen, setIsOpen] = useState(false);
	return (
		<div className="header">
			<div className="logo"></div>
			<div className="menu">
				<div className="web-menu">
					<HeaderWeb />
				</div>
				<div className="mobile-menu">
					<div onClick={()=> setIsOpen(!isOpen)}>
                        {!isOpen && <i className="fi-rr-apps menu-icon"></i>}
					</div>
                    {isOpen && <HeaderMobile isOpen={isOpen} setIsOpen={setIsOpen} />}
				</div>
			</div>
		</div>
	);
}

export default Header;
