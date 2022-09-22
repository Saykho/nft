import React from "react";
import "./HotBid.scss";

export function HotBid(props) {
    return (
        <div className={`hot-bid-list ${props.className}`}>
            <img src={props.imgURL} alt="Hot Bid" className="img-hot-bid"/>
            <div className="hot-bid-title-price">
                <div className="hot-bid-title body-bold-2">Amazing digital art</div>
                <div className="hot-bid-price hairline-small">
                    2.45 ETH
                </div>
            </div>
            <div className="owner-creator-collection">
                <div className="owner-creator">
                    <img src={props.avatarURL1} alt="Creator" className="img-av avatar-1"/>
                    <img src={props.avatarURL2} alt="Creator" className="img-av avatar-2"/>
                    <img src={props.avatarURL3} alt="Creator" className="img-av avatar-3"/>
                </div>
                <div className="hot-bid-presence caption-2">3 in stocks</div>
            </div>
            <div className="hot-bid-divider"></div>
            <div className="bid">
                <div className="bid-left">
                    <img src="img/line.svg" alt="Line" className="img-line"/>
                    <div className="highest-bid caption-bold">Highest bid</div>
                    <div className="bid-value caption-bold-2">0.001 ETH</div>
                </div>
                <div className="update caption-bold">New bid 🔥</div>
            </div>
        </div>
    );
}