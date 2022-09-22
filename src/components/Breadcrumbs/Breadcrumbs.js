import React from "react";
import "./Breadcrumbs.scss";
import { Link } from "react-router-dom";

export function Breadcrumbs() {
    return (
        <div className="breadcrumbs">
            <Link to="/">
                <button className="breadcrumbs__home small">
                    <img src="img/arrowLeft.svg" alt="Arrow" className="img-arrow"/>
                    Back to home
                </button>
            </Link>
            <div className="breadcrumbs__current">
                <div className="home small">Home</div>
                <img src="img/shape.svg" alt="Shape" className="img-shape"/>
                <div className="loading small">Upload Item</div>
            </div>
        </div>
    );
}
