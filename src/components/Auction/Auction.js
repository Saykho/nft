import React from "react";
import "./Auction.scss";
import { Video } from "../Video/Video";
import { Creator } from "../Creator/Creator";

export function Auction() {
    return (
        <div className="auction">
            <Video/>
            <Creator/>
        </div>
    );
}