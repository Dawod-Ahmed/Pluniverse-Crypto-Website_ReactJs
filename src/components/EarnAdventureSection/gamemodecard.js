import React from "react";
// import CardImage from '../..svg/'
// import moduleName from '../'
import {
  card_Img,
  Card_header_back,
  header_underline,
  GameMode_CardText,
  card_border,
} from "../../svg/assets.js";

const GameModeCard = () => {
  return (
    <div className="card-parent  d-flex justify-content-center align-items-center flex-column flex-lg-row  position-relative">
      {/* <img src={card_border} alt="" className="position-absolute w-100 h-100" /> */}

      <img src={card_Img} alt="" className="card-img m-auto " />
      <div className="card-parent-right-sec d-flex flex-column align-items-start px-lg-5">
        <div className="card-header d-flex justify-content-center align-items-center text-white fw-bold display-4 pb-4 ">
          Game Mode
        </div>
        <img src={header_underline} className="card-header-underline" alt="" />
        <div className="card-content-parent d-flex flex-column justify-content-center align-items-center  w-100 mt-4 mt-sm-0">
          <p className="card-slider-para-head fw-bold">GUILD QUEST</p>
          <p className="cards-slider-para fw-bold text-white px-4">
            Join Hands with other players and for a Guild in order to go
            overcome and defeat the ancient Gods and siege their territories for
            grand rewards and various treasures{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default GameModeCard;
