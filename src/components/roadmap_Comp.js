import React from "react";

import { RoadMap_Images } from "../svg/assets";
const roadmap_Comp = (props) => {
  const { heading, text1, text2, text3, text4, text5, text6, text7 } = props;
  const { contentParent, contentImage, contentdiv } = props;
  const { righttimline, lefttimeline, leftXline, lefttimlineContent } = props;
  // console.log("Test", props.timelinedetails.classes.contentImage);
  // console.log("Test", props.timelinedetails.timeline);
  console.log("Test", props.heading);
  return (
    <>
      <div className="roadmap-subparent d-flex align-items-center flex-column flex-lg-row">
        <div className="d-flex flex-column align-items-center">
          <img
            src={RoadMap_Images.Timeline_circleImage}
            alt=""
            className="roadmap-circleImage"
          />
          <img
            src={RoadMap_Images.Timeline_vertical_line}
            alt=""
            className="roadmap-vertical-line"
          />
        </div>
        <div
          className={`d-flex roadmap-content-parent ${righttimline} ${lefttimeline}`}
        >
          <img
            src={RoadMap_Images.Horizontal_line}
            alt=""
            className={`roadmap-horizonatal-line ${leftXline} d-none  d-lg-block`}
          />
          <div className={`content-sub-parent ${lefttimlineContent} `}>
            <p className="roadmap-header-content">{heading}</p>
            <p className="roadmap-para-content">{text1}</p>
            <p className="roadmap-para-content">{text2}</p>
            <p className="roadmap-para-content">{text3}</p>
            <p className="roadmap-para-content">{text4}</p>
            <p className="roadmap-para-content">{text5}</p>
            <p className="roadmap-para-content">{text6}</p>
            <p className="roadmap-para-content">{text7}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default roadmap_Comp;
