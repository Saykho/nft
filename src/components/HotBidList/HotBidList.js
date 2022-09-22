import React from "react";
import "./HotBidList.scss";
import { HotBid } from "../HotBid/HotBid";
import { Carousel } from "../Carousel/Carousel";

export function HotBidList() {
    return (
        <div className="hot-bid">
            <div className="hot-bid__top">
                <div className="hot-bid-title h3">Hot bid</div>
                <div className="hot-bid-carousel">
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

            <div className="hot-bid__list">

                <HotBid
                    imgURL={"img/hot-bid.svg"}
                    avatarURL1={"img/avatar2.svg"}
                    avatarURL2={"img/avatar3.svg"}
                    avatarURL3={"img/avatar4.svg"}
                />
                <HotBid
                    imgURL={"img/hot-bid2.svg"}
                    avatarURL1={"img/avatar2.svg"}
                    avatarURL2={"img/avatar3.svg"}
                    avatarURL3={"img/avatar4.svg"}
                />
                <HotBid
                    imgURL={"img/hot-bid.svg"}
                    avatarURL1={"img/avatar2.svg"}
                    avatarURL2={"img/avatar3.svg"}
                    avatarURL3={"img/avatar4.svg"}
                />
                <HotBid
                    imgURL={"img/hot-bid.svg"}
                    avatarURL1={"img/avatar2.svg"}
                    avatarURL2={"img/avatar3.svg"}
                    avatarURL3={"img/avatar4.svg"}
                />
            </div>
        </div>
    );
}
