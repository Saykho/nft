import React from "react";
import "./MainTitle.scss";
import { useNavigate } from "react-router-dom";

export function MainTitle() {
    const navigator = useNavigate();

    return (
        <div className="title">
            <div className="title__description hairline-small">Create, explore, & collect digital art NFTs.</div>
            <div className="title__name h3">The new creative economy.</div>
            <button onClick={() => navigator("/upload")} className="title__button-start button">
                Go to Upload Page
            </button>
        </div>
    );
}