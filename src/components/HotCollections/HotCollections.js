import React from "react";
import "./HotCollections.scss";
import { HotCollection } from "../HotCollection/HotCollection";

export function HotCollections(props) {
    return (
        <div className="hot-collections">
            <div className="hot-collections__title h3">Hot collections</div>
            <div className="hot-collections__list">
                <HotCollection
                    imgURL={"img/img1.svg"}
                    smallImgURL1={"img/img2.svg"}
                    smallImgURL2={"img/img3.svg"}
                    smallImgURL3={"img/img4.svg"}
                    avatarURL={"img/avatar_2.svg"}
                />
                <HotCollection
                    imgURL={"img/img1.svg"}
                    smallImgURL1={"img/img2.svg"}
                    smallImgURL2={"img/img3.svg"}
                    smallImgURL3={"img/img4.svg"}
                    avatarURL={"img/avatar_2.svg"}
                />
                <HotCollection
                    imgURL={"img/img1.svg"}
                    smallImgURL1={"img/img4.svg"}
                    smallImgURL2={"img/img5.svg"}
                    smallImgURL3={"img/img6.svg"}
                    avatarURL={"img/avatar_2.svg"}
                />
            </div>
        </div>
    );
}