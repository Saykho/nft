import React from "react";
import "./Item.scss";

export function Item(props) {
    return (
        <div className="options">
            <img src={props.imgURL}/>
            <button
                onClick={props.onUpload}
                className={props.isSingle ? "single-button small" : "multiple-button small"}>
                {props.name}
            </button>
        </div>
    );
}