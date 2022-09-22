import React from "react";
import "./RangeBar.scss";

export function RangeBar() {
    return (
        <div className="range-bar">
            <input type="range" min="0.01" max="10" id="price" name="price"/>
        </div>
    );
}