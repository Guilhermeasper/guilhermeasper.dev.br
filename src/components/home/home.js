import React from "react";
import "./index.css";
import Header from "../header/header";
import Body from "../body/body";
import Footer from "../footer/footer";

function Home() {
	return <div className="home">
        <div>
            <Header />
        </div>
        <div>
            <Body />
        </div>
        <div>
            <Footer />
        </div>
    </div>;
}

export default Home;
