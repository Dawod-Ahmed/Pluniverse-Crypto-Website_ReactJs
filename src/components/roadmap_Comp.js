
import React from "react";

import { RoadMap_Images } from "../svg/assets";
const roadmap_Comp = () => {
  return (
 
<>
        <div className="roadmap-subparent d-flex align-items-center">
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
          <div className="d-flex roadmap-content-parent">
            <img
              src={RoadMap_Images.Horizontal_line}
              alt=""
              className="roadmap-horizonatal-line"
            />
            <div className="content-sub-parent">
              <p className="roadmap-header-content">Year 2020</p>
              <p className="roadmap-para-content">
                Idea &  research <br />
                 Game Development Consultations <br />
                  Blockchain Tech Consultations  <br />
                  Business plan <br /> 
                  Team creation <br /> 
                  Characters and Gameplay concept development <br /> Private fund allocation <br /> 
                  Network selection Negotiation
              </p>  
            </div>         
          </div>
        </div>
</>

  );
};

export default roadmap_Comp;
