import React from "react";
import "./style.css";
import LordImg from "../BagdePage/badge_Section/loard.png";
import LegendaryImg from "../BagdePage/badge_Section/legendary.png";
import KingImg from "../BagdePage/badge_Section/king.png";
import ConqureImg from "../BagdePage/badge_Section/conqure.png";
import {
  Conqueror_ListData,
  King_ListData,
  Lord_ListData,
  Legendary_ListData,
} from "./BadgeCardsData/components";

// import second from "../BagdePage/badge_Section";
import Cardcomponent from "./cardComponent";

const foundarbadge = () => {
  return (
    <>
      <div
        id="founderbadge"
        className="badge-section-parent d-flex flex-column align-items-center"
      >
        <div className="badge-section-main ">
          <div className="badge-heading-section d-flex justify-content-center d-flex flex-column mb-5">
            <h1 className="founder-header text-center text-light mb-4">
              Founders Badge Sale!
            </h1>
            <p className="founder-para text-center text-light">
              To enable anyone from the community to show support to the project
              We will be releasing our Founder’s badges! The badge will be NFT’s
              and will serve as proof that you were there from the start of the
              Project!
            </p>
          </div>

          <div className="badge-cards-parent d-flex justify-content-around">
            <Cardcomponent
              className="lord"
              Cardscolors={{
                background: "#FDECDC",
                header: "#b97b08",
                li_color: "#ed8a25",
                btnbackground_color: "#EE8924",
                cardBottom_border_color: "#e6a222",
              }}
              CardImage={LordImg}
              CardHeading="LORD"
              Card_ContentList={Lord_ListData}
              usdc="150 USDC"
              card_btn="Mint NFT"
              remainings="800/800 Remaining"
            />

            <Cardcomponent
              className="king"
              Cardscolors={{
                background: "#FEFAFD",
                header: "#089EB6",
                li_color: "#09B2D3",
                btnbackground_color: "#05B4CB",

                cardBottom_border_color: "#0BC2E9",
              }}
              CardImage={KingImg}
              CardHeading="KING"
              Card_ContentList={King_ListData}
              usdc="300 USDC"
              card_btn="Mint NFT"
              remainings="425/425 Remaining"
            />

            <Cardcomponent
              className="legendary"
              Cardscolors={{
                background: "#E6F0E7",
                header: "#1A6715",
                li_color: "#1BAF4D",
                btnbackground_color: "#1BAF4D",

                cardBottom_border_color: "#199E45",
              }}
              CardImage={LegendaryImg}
              CardHeading="LEGENDARY"
              Card_ContentList={Legendary_ListData}
              usdc="500 USDC"
              card_btn="Mint NFT"
              remainings="205/205 Remaining"
            />

            <Cardcomponent
              className="conqueror"
              Cardscolors={{
                background: "#FBF0EE",
                header: "#BB3C1D",
                li_color: "#EB7B3B",
                btnbackground_color: "#E96D28",
                cardBottom_border_color: "#E96D28",
              }}
              CardImage={ConqureImg}
              CardHeading="CONQUEROR"
              Card_ContentList={Conqueror_ListData}
              usdc="1,000 USDC"
              card_btn="Mint NFT"
              remainings="100/100 Remaining"
            />
          </div>
          <p className="badge-note text-light mt-4 mb-5">
            *Note: Badges are immediately transferred to founding partners’
            wallet after minting. <br /> *Note: Founding Plus, Headstart Packs
            and PLV tokens will be distributed in Q2 2022 Before game launch.
          </p>
        </div>
      </div>
    </>
  );
};

export default foundarbadge;
