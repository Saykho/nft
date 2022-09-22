import React from "react";
import "./HotCollection.scss";

export function HotCollection(props) {
    return (
        <div className="hot-collections-collection">
            <img src={props.imgURL} alt="Collection 1" className="img-collection"/>
            <div className="image-stack">
                <img src={props.smallImgURL1} alt="Collection 2" className="small-img"/>
                <img src={props.smallImgURL2} alt="Collection 3" className="small-img"/>
                <img src={props.smallImgURL3} alt="Collection 4" className="small-img"/>
            </div>
            <div className="collection-title body-bold">Awesome collection</div>
            <div className="collection-info">
                <div className="collection-creator">
                    <img src={props.avatarURL} alt="Avatar" className="img-collection-creator"/>
                    <div className="collection-creator-name caption-2">By Kennith Olson</div>
                </div>
                <div className="collection-amount hairline-small">28 ITEMS</div>
            </div>
        </div>
    );
}