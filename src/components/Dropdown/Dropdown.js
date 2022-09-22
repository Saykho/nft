import React from "react";
import "./Dropdown.scss";
import { Length } from "../../consts/lenght";

export function Dropdown(props) {
    let currentLength = "dropdown__button";

    switch (props.type) {
        case Length.Short:
            currentLength += " dropdown__button_short";
            break;
        case Length.Long:
            currentLength += " dropdown__button_long";
            break;
        default:
            currentLength += " dropdown__button_short";
    }
    return (
        <div className="dropdown">
            <button className={`${currentLength} caption-2`}>{props.name}
                <div className="dropdown-arrow"><img src="img/arrow-down.svg" alt="Open" className="img-open"/></div>
            </button>
        </div>
    );
}