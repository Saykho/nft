import React from "react";
import "./Creator.scss";
import { Carousel } from "../Carousel/Carousel";

export function Creator() {
    return (
        <div className="auction__creator">
            <div className="creator-title h1">
                the creator network®
            </div>
            <div className="creator-data">
                <div className="creator-name">
                    <img src="img/creator-avatar.svg" alt="Avatar" className="img-creator"/>
                    <div className="creator-info">
                        <div className="creator-role caption-bold">Creator</div>
                        <div className="creator-name caption-2">Enrico Cole</div>
                    </div>
                </div>
                <div className="price">
                    <img src="img/icon.svg" alt="Icon" className="img-icon"/>
                    <div className="price-info">
                        <div className="price-instant caption-bold">Instant price</div>
                        <div className="coins caption-2">3.5 ETH</div>
                    </div>
                </div>
            </div>
            <div className="creator-current-bid">
                <div className="current-bid-title body-bold-2">Current Bid</div>
                <div className="current-bid-amount h2">1.00 ETH</div>
                <div className="current-bid-price body-bold">$3,618.36</div>

                <div className="current-bid-ending body-bold-2">Auction ending in</div>
                <div className="date">
                    <div className="date-value">
                        <div className="number h4">19</div>
                        <div className="unit body-bold-2">Hrs</div>
                    </div>
                    <div className="date-value">
                        <div className="number h4">24</div>
                        <div className="unit body-bold-2">mins</div>
                    </div>
                    <div className="date-value">
                        <div className="number h4">19</div>
                        <div className="unit body-bold-2">secs</div>
                    </div>
                </div>
            </div>
            <button className="creator-bid button">Place a bid</button>
            <button className="creator-view button">View item</button>

            <div className="creator-carousel">
                <Carousel
                    imgURL={"img/arrowLeft.svg"}
                    isArrowLeft={true}
                />
                <Carousel
                    imgURL={"img/arrowRight.svg"}
                    isArrowLeft={false}
                />
            </div>
        </div>
    );
}