import React from "react";
import "./TopCreatorsList.scss";
import { TopCreators } from "../TopCreators/TopCreators";
import { BackgroundColors } from "../../consts/backgroundColors";
import { Dropdown } from "../Dropdown/Dropdown";
import { Carousel } from "../Carousel/Carousel";
import { Length } from "../../consts/lenght";

export function TopCreatorsList() {
    return (
        <div className="top-creators">
            <div className="top-creators__filter">
                <div className="filter-title">
                    <div className="top-creators-title body-bold">Popular</div>
                    <div className="filter-category h3">Sellers
                        <img src="img/arrowDown.svg" alt="Open" className="img-down"/>
                    </div>
                </div>

                <Dropdown
                    name="Today"
                    type={Length.Long}
                />
            </div>

            <div className="top-creators__list">
                <div className="top-creators-left">
                    <Carousel
                        imgURL={"img/arrowLeft.svg"}
                        isArrowLeft={true}
                    />
                </div>
                <TopCreators
                    iconURL={"img/cup.svg"}
                    number={1}
                    imgURL={"img/avatar5.svg"}
                    name={"Edd Harris"}
                    type={BackgroundColors.PrimaryBlue}
                />
                <TopCreators
                    iconURL={"img/icon1.svg"}
                    number={2}
                    imgURL={"img/avatar5.svg"}
                    name={"Odell Hane"}
                    type={BackgroundColors.PrimaryViolet}
                />
                <TopCreators
                    iconURL={"img/icon2.svg"}
                    number={3}
                    imgURL={"img/avatar5.svg"}
                    name={"Marlee Kuphal"}
                    type={BackgroundColors.PrimaryGreen}
                />
                <TopCreators
                    iconURL={"img/icon3.svg"}
                    number={4}
                    imgURL={"img/avatar5.svg"}
                    name={"Payton Kunde"}
                    type={BackgroundColors.PrimaryBlack}
                />
                <TopCreators
                    iconURL={"img/icon3.svg"}
                    number={5}
                    imgURL={"img/avatar5.svg"}
                    name={"Payton Buckridge"}
                    type={BackgroundColors.PrimaryGrey}
                />

                <div className="top-creators-right">
                    <Carousel
                        imgURL={"img/arrowRight.svg"}
                        isArrowLeft={false}
                    />
                </div>
            </div>

        </div>
    );
}