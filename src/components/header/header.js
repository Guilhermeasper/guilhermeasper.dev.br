import React, { useState } from "react";
import "./header.css";
import Header_Mobile from "./mobile/header-mobile";
import Header_Web from "./web/header-web";

function Header() {
    const [isOpen, setIsOpen] = useState(false);
	return (
		<div className="header">
			<div className="logo">Overreact</div>
			<div className="menu">
				<div className="web-menu">
					<Header_Web />
				</div>
				<div className="mobile-menu">
					<div onClick={()=> setIsOpen(!isOpen)}>
						<i class="fi-rr-apps"></i>
					</div>
                    {isOpen && <Header_Mobile isOpen={isOpen} setIsOpen={setIsOpen} />}
				</div>
			</div>
		</div>
	);
}

export default Header;
