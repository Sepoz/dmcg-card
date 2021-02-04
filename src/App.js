import React, { useState } from "react";

import card from "./img/card.png";
import description from "./img/description.png";
import name from "./img/name.png";
import circleLogo from "./img/circleLogo.png";
import bottomBar from "./img/bottomBar.png";

import "./App.css";

function App() {
    const [xAxis, setXAxis] = useState(null);
    const [yAxis, setYAxis] = useState(null);
    const [translate, setTranslate] = useState("translateZ(0px)");
    const [rotateX, setRotateX] = useState("rotateX(0deg)");
    const [rotateY, setRotateY] = useState("rotateY(0deg)");

    const handleMouseMove = (e) => {
        setXAxis((window.innerWidth / 2 - e.pageX) / 8);
        setRotateX(`rotateX(${yAxis}deg)`);
        setYAxis((window.innerHeight / 2 - e.pageY) / 8);
        setRotateY(`rotateY(${xAxis}deg)`);
    };

    const handleMouseEnter = () => {
        setTranslate("translateZ(25px)");
    };

    const handleMouseLeave = () => {
        setRotateX("rotateX(0deg)");
        setRotateY("rotateY(0deg)");
        setTranslate("translateZ(0px)");
    };

    const clCard = {
        transform: rotateY + rotateX,
    };

    const clTranslate = {
        transform: translate,
    };

    return (
        <div
            className="container"
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <div className="card" style={clCard}>
                <div className="full-card">
                    <img src={card} alt="Dario Moccia circle logo" />
                    <img
                        className="name"
                        style={clTranslate}
                        src={name}
                        alt="Dario Moccia name"
                    />

                    <img
                        className="description"
                        style={clTranslate}
                        src={description}
                        alt="Dario Moccia description"
                    />
                    <img
                        className="circleLogo"
                        style={clTranslate}
                        src={circleLogo}
                        alt="Dario Moccia circleLogo"
                    />
                    <img
                        className="bottomBar"
                        style={clTranslate}
                        src={bottomBar}
                        alt="Dario Moccia bottomBar"
                    />
                </div>
            </div>
        </div>
    );
}

export default App;
