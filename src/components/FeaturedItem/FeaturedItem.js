import React from "react";
import "./FeaturedItem.scss";

export function FeaturedItem() {
    return (
        <div className="feed__feature-item">
            <img src="img/feature.svg" alt="Featured Item" className="img-feature-item"/>
            <div className="feature-item-info">
                <img src="img/avatar_2.svg" alt="Creator" className="img-avatar-creator"/>
                <div className="item-info">
                    <div className="item-name body-bold">The future of ETH®</div>
                    <div className="item-stock caption-2">18 in stock</div>
                </div>
                <div className="feature-item-price">
                    <div className="item-bid caption-bold">Highest bid</div>
                    <button className="button-price hairline-small">1.125 ETH</button>
                </div>
            </div>
        </div>
    );
}