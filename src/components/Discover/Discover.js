import React from "react";
import "./Discover.scss";
import { Navs } from "../Navs/Navs";
import { HotBid } from "../HotBid/HotBid";
import { Dropdown } from "../Dropdown/Dropdown";
import { Length } from "../../consts/lenght";
import { LoadButton } from "../LoadButton/LoadButton";
import { RangeBar } from "../RangeBar/RangeBar";

export function Discover(props) {
    return (
        <div className="discover">
            <div className="discover__title h3">Discover</div>
            <div className="discover__horizontal-filter">
                <div className="filter">
                    <Dropdown
                        name={"Recently added"}
                        type={Length.Short}
                    />
                    <Navs/>
                    <button className="close-button button">
                        Filter
                        <img src="img/cross.svg" alt="Close" className="img-close"/>
                    </button>
                </div>
                <div className="filter-divider"></div>
                <div className="filter-categories">
                    <div className="filter-category">
                        <div className="category-name hairline-small">Price</div>
                        <Dropdown
                            name={"Highest price"}
                            type={Length.Long}
                        />
                    </div>
                    <div className="filter-category">
                        <div className="category-name hairline-small">Likes</div>
                        <Dropdown
                            name={"Most liked"}
                            type={Length.Long}
                        />
                    </div>
                    <div className="filter-category">
                        <div className="category-name hairline-small">Creator</div>
                        <Dropdown
                            name={"Verified only"}
                            type={Length.Long}
                        />
                    </div>
                    <div className="scroll-bar">
                        <div className="scroll-bar-title">Price range</div>
                        <div className="scroll-bar-value caption-bold-2">5 ETH</div>
                        <div className="scroll-bar-arrow"></div>
                        <RangeBar/>
                    </div>
                </div>
            </div>
            <div className="discover__card-item">
                <HotBid
                    className="card-item_top"
                    imgURL={"img/d1.svg"}
                    avatarURL1={"img/avatar2.svg"}
                    avatarURL2={"img/avatar3.svg"}
                    avatarURL3={"img/avatar4.svg"}
                />
                <HotBid
                    className="card-item_top"
                    imgURL={"img/hot-bid.svg"}
                    avatarURL1={"img/avatar2.svg"}
                    avatarURL2={"img/avatar3.svg"}
                    avatarURL3={"img/avatar4.svg"}
                />
                <HotBid
                    className="card-item_top"
                    imgURL={"img/hot-bid.svg"}
                    avatarURL1={"img/avatar2.svg"}
                    avatarURL2={"img/avatar3.svg"}
                    avatarURL3={"img/avatar4.svg"}
                />
                <HotBid
                    className="card-item_top"
                    imgURL={"img/d2.svg"}
                    avatarURL1={"img/avatar2.svg"}
                    avatarURL2={"img/avatar3.svg"}
                    avatarURL3={"img/avatar4.svg"}
                />
                <HotBid
                    className="card-item_top"
                    imgURL={"img/hot-bid.svg"}
                    avatarURL1={"img/avatar2.svg"}
                    avatarURL2={"img/avatar3.svg"}
                    avatarURL3={"img/avatar4.svg"}
                />
                <HotBid
                    className="card-item_top"
                    imgURL={"img/d3.svg"}
                    avatarURL1={"img/avatar2.svg"}
                    avatarURL2={"img/avatar3.svg"}
                    avatarURL3={"img/avatar4.svg"}
                />
                <HotBid
                    className="card-item_top"
                    imgURL={"img/hot-bid.svg"}
                    avatarURL1={"img/avatar2.svg"}
                    avatarURL2={"img/avatar3.svg"}
                    avatarURL3={"img/avatar4.svg"}
                />
                <HotBid
                    className="card-item_top"
                    imgURL={"img/hot-bid.svg"}
                    avatarURL1={"img/avatar2.svg"}
                    avatarURL2={"img/avatar3.svg"}
                    avatarURL3={"img/avatar4.svg"}
                />
            </div>
            <div className="discover__load">
                <LoadButton/>
            </div>

        </div>
    );
}