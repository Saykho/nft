import React from "react";
import "./UploadItem.scss";
import "../Item/Item";
import { Item } from "../Item/Item";

export function UploadItem() {
    return (
        <div className="main">
            <div className="main__title h2">
                Upload item
            </div>
            <div className="main__description caption">
                Choose <span style={{'color': '#23262F'}}>“Single”</span> if you want your collectible to be one of a
                kind or <span style={{'color': '#23262F'}}>“Multiple”</span> if you want to sell one <br/>
                collectible multiple times
            </div>
            <div className="main__options">

                <Item
                    imgURL="img/single.svg"
                    name="Create Single"
                    isSingle={true}
                    onUpload={() => alert("Create Single")}
                />
                <Item
                    imgURL="img/multiple.svg"
                    name="Create Multiple"
                    isSingle={false}
                    onUpload={() => alert("Create Multiple")}
                />
            </div>

            <div className="main__warning caption-bold">We do not own your private keys and cannot access your funds
                without your
                confirmation
            </div>
        </div>
    );
}