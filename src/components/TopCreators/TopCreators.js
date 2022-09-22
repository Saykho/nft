import React from "react";
import "./TopCreators.scss";
import { BackgroundColors } from "../../consts/backgroundColors";

export function TopCreators(props) {
    let backgroundColor = "top-rate";

    switch (props.type) {
        case BackgroundColors.PrimaryBlue:
            backgroundColor += " top-rate_blue";
            break;
        case BackgroundColors.PrimaryViolet:
            backgroundColor += " top-rate_violet";
            break;
        case BackgroundColors.PrimaryGreen:
            backgroundColor += " top-rate_green";
            break;
        case BackgroundColors.PrimaryBlack:
            backgroundColor += " top-rate_black";
            break;
        case BackgroundColors.PrimaryGrey:
            backgroundColor += " top-rate_grey";
            break;
        default:
            backgroundColor += " top-rate_blue";
    }

    return (
        <>
            <div className="top-creators-info">
                <div className="top-creator-top">
                    <div className={backgroundColor}>
                        <img src={props.iconURL} alt="Cup" className="img-cup"/>
                        <div className="top-number caption-bold-2">#{props.number}</div>
                    </div>
                    <div className="add"><img src="img/plus.svg" alt="Add"/></div>
                    <div className="open"><img src="img/arrow.svg" alt="Open"/></div>
                </div>
                <div className="top-divider"></div>
                <div className="top-creator-avatar">
                    <img src={props.imgURL} alt="Avatar" className="img-top"/>
                    <img src="img/icon-top.svg" alt="Top Creator" className="icon-img"/>
                </div>
                <div className="top-creator-name caption-2">{props.name}</div>
                <div className="user-coins">
                    <div className="value caption-bold-2">2.456</div>
                    &nbsp;
                    <div className="eth caption-bold">ETH</div>
                </div>
            </div>
        </>
    );
}