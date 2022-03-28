import React, { useState } from "react";
import { Timelinebacked } from "./components";
import Roadmap_Comp from "./roadmap_Comp";
import { RoadMap_Images } from "../svg/assets";

const Timelineroadmap = () => {
  return (
    <div className="Timeline_Parent d-flex flex-column align-items-center pt-5">
      <div className=" roadmap-parent mb-5  ">
        <div className="roadmap-header d-flex justify-content-center align-items-center text-white">
         Road Map
        </div>

        <div>
          <Roadmap_Comp
            contentParent=""
            contentImage=""
            contentdiv=""
            righttimline="right-timeline"
            lefttimeline=""
            leftXline=""
            lefttimlineContent=""
            heading="Year 2020"
            text1="Idea &  research"
            text2="Game Development Consultations "
            text3="Blockchain Tech Consultations"
            text4=" Business plan"
            text5="Team creation"
            text6="Characters and Gameplay concept development"
            text7="Network selection Negotiation"
          />
          ;
          <Roadmap_Comp
            contentParent=""
            contentImage=""
            contentdiv=""
            righttimline=""
            lefttimeline="left-timeline"
            leftXline="left-x-line"
            lefttimlineContent="left-timline-content"
            heading="Q2 2021"
            text1="Game concept adjustments."
            text2=""
            text3=""
            text4=""
            text5=""
            text6=""
            text7=""
          />
          <Roadmap_Comp
            contentParent=""
            contentImage=""
            contentdiv=""
            righttimline="right-timeline"
            lefttimeline=""
            leftXline=""
            lefttimlineContent=""
            heading="Q3 2021"
            text1="Game concept adjustments."
            text2="Mini Website Launch."
            text3=""
            text4=""
            text5=""
            text6=""
            text7=""
          />
          <Roadmap_Comp
            contentParent=""
            contentImage=""
            contentdiv=""
            righttimline=""
            lefttimeline="left-timeline"
            leftXline="left-x-line"
            lefttimlineContent="left-timline-content"
            heading="Q4 2021"
            text1="Full Website Launch"
            text2="Founders Badge Sale."
            text3="Token Presale 1&2"
            text4="Airdrop 1&2"
            text5="Pancakeswap Listing."
            text6="Locked Pancakeswap Liquidity Pool."
            text7=""
          />
          <Roadmap_Comp
            contentParent=""
            contentImage=""
            contentdiv=""
            righttimline="right-timeline"
            lefttimeline=""
            leftXline=""
            lefttimlineContent=""
            heading="Q4 2021"
            text1="Plu Origin Sale"
            text2="NFT Marketplace"
            text3=""
            text4=""
            text5=""
            text6=""
            text7=""
          />
          <Roadmap_Comp
            contentParent=""
            contentImage=""
            contentdiv=""
            righttimline=""
            lefttimeline="left-timeline"
            leftXline="left-x-line"
            lefttimlineContent="left-timline-content"
            heading="Q6 2021"
            text1="Multi Chain connectivity."
            text2="Major Exchange Listing, Preferably Binance."
            text3="Mainstream release of Pluniverse Mini Games on Android"
            text4="Land sale"
            text5=""
            text6=""
            text7=""
          />
          <Roadmap_Comp
            contentParent=""
            contentImage=""
            contentdiv=""
            righttimline="right-timeline"
            lefttimeline=""
            leftXline=""
            lefttimlineContent=""
            heading="Q2 2021"
            text1="Game concept adjustments."
            text2=""
            text3=""
            text4=""
            text5=""
            text6=""
            text7=""
          />
        </div>
      </div>
      {/* <Timelinebacked /> */}
    </div>
  );
};

export default Timelineroadmap;
