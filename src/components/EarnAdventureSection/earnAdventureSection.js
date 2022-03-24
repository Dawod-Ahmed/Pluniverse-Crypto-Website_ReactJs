import React from "react";
// import {header_underline1} from '.../svg/assets'
import { Gamemodecard } from "../components";
import { satan_sahdow, Satan, header_underline } from "../../svg/assets.js";

const EarnAdventure = () => {
  return (
    // <div className="earn-adv-parent d-flex justify-content-center flex-column align-items-center">
    <div className="earn-adv-parent d-flex flex-column justify-content-center align-items-center px-2 px-sm-3 px-md-0">
      <div className="earn-adv-subparent1 w-100   d-flex flex-column flex-lg-row align-items-center   justify-content-lg-around  ">
        <div className="earn-adv-subparent-left-sec py-5 px-lg-0 ">
          <p className="earn-adv-small-h mb-0">The most awaited play to</p>
          <h1 className="earn-adv-h mb-0">EARN ADVENTURE!</h1>
          <img
            src={header_underline}
            alt=""
            className="earn-adv-underline-image mb-5"
          />
          <p className="earn-adv-para1">
            Pluniverse is a multiplayer NFT game wherein the main characters are
            called Plu’s which are elemental species from an alternate universe.
            Embark on a grand expedition to gain items that you can sell into
            the marketplace for Real Money
          </p>
          <p className="earn-adv-para2">
            Lastly, form a guild with other players to extend your influence and
            keep building your empire during this era of peace in preparation
            for the fated “Great War”
          </p>
        </div>
        <div className="earn-adv-subparent-right-sec  d-flex flex-column align-items-center ">
          <img className="satan" src={Satan} alt="satan" />
          <img className="satan-shadow" src={satan_sahdow} alt="satan-shadow" />
        </div>
      </div>
      <Gamemodecard />
    </div>
  );
};

export default EarnAdventure;
