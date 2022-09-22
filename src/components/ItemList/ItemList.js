import React from "react";
import "./ItemList.scss";

export function ItemList(props) {
    return (
        <div className={`item-list ${props.className}`}>
            <img src={props.imgURL} alt="Item" className="img-item-list"/>
            <div className="item-list-content">
                <div className="item-list-name body-bold-2">{props.name}</div>
                <div className="item-list-info">
                    <img src={props.avatarURL} alt="Avatar" className="creator-img"/>
                    <button className="button-coins hairline-small">0.27 ETH</button>
                    <div className="item-availability caption">{props.availability}</div>
                </div>
                <button className={props.isWhite ? "button-white button-small" : "button-blue button-small"}>Place a
                    bid
                </button>
            </div>

        </div>
    );
}