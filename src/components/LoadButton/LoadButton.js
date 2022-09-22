import React from "react";
import "./LoadButton.scss";

export function LoadButton() {
    return (
        <button className="load-button button-small">
            Load more
            <img src="img/loading.svg" alt="Load" className="load"/>
        </button>
    );
}