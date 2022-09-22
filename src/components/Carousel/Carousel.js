import React from "react";
import "./Carousel.scss";

export function Carousel(props) {
    return (
        <div className={props.isArrowLeft ? "arrow-left" : "arrow-right"}>
            <img src={props.imgURL} alt="Arrow" className="img-carousel"/>
        </div>
    );
}