import React from "react";
import "./Feed.scss";
import { FeaturedItem } from "../FeaturedItem/FeaturedItem";
import { ItemList } from "../ItemList/ItemList";
import { CreatorsList } from "../CreatorsList/CreatorsList";

export function Feed() {
    return (
        <div className="feed">
            <FeaturedItem/>

            <div className="feed__item-list">
                <ItemList
                    className="item-list_bottom"
                    imgURL={"img/item1.svg"}
                    name={"ETH never die"}
                    avatarURL={"img/avatar2.svg"}
                    availability={"1 of 12"}
                    isWhite={true}
                />
                <ItemList
                    imgURL={"img/item2.svg"}
                    name={"Future coming soon"}
                    avatarURL={"img/avatar3.svg"}
                    availability={"1 of 3"}
                    isWhite={false}
                    className="item-list_bottom"
                />
                <ItemList
                    imgURL={"img/item3.svg"}
                    name={"Elon Musk silver coin 3d print"}
                    avatarURL={"img/avatar2.svg"}
                    availability={"1 of 4"}
                    isWhite={true}
                />
            </div>
            <div className="feed__divider"></div>
            <div className="feed__creators-list">
                <div className="creators-list-title caption-bold-2">Latest upload from creators 🔥</div>
                <CreatorsList
                    avatarURL={"img/avatar2.svg"}
                    number={"6"}
                    name={"Payton Harris"}
                />
                <CreatorsList
                    avatarURL={"img/avatar_2.svg"}
                    number={"2"}
                    name={"Anita Bins"}
                />
                <CreatorsList
                    avatarURL={"img/avatar4.svg"}
                    number={"3"}
                    name={"Joana Wuckert"}
                />
                <CreatorsList
                    avatarURL={"img/avatar3.svg"}
                    number={"4"}
                    name={"Lorena Ledner"}
                />
                <button className="feed-button button-small">Discover more
                    <img src="img/arrowR.svg" alt="" className="img-more"/>
                </button>
            </div>
        </div>
    );
}