import React from "react";
import "./CreatorsList.scss";

export function CreatorsList(props) {
    return (
        <div className="user">
            <div className="user-avatar">
                <img src={props.avatarURL} alt="Creator's avatar" className="img-user"/>
                <div className="rating caption-bold-2">{props.number}</div>
            </div>
            <div className="user-info">
                <div className="user-name caption-2">{props.name}</div>
                <div className="user-coins">
                    <div className="value caption-bold-2">2.456</div>
                    &nbsp;
                    <div className="eth caption-bold">ETH</div>
                </div>
            </div>
        </div>
    );
}