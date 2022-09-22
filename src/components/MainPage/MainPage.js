import React from "react";
import { MainTitle } from "../MainTitle/MainTitle";
import { Auction } from "../Auction/Auction";
import { Feed } from "../Feed/Feed";
import { TopCreatorsList } from "../TopCreatorsList/TopCreatorsList";
import { HotBidList } from "../HotBidList/HotBidList";
import { HotCollections } from "../HotCollections/HotCollections";
import { Discover } from "../Discover/Discover";
import { CallToAction } from "../CallToAction/CallToAction";

export function MainPage() {
    return (
        <>
            <MainTitle/>
            <Auction/>
            <Feed/>
            <TopCreatorsList/>
            <HotBidList/>
            <HotCollections/>
            <Discover/>
            <CallToAction/>
        </>
    );
}