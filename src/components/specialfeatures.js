import React, { useState } from "react";

import {
  Feature_underline1,
  Feature_underline2,
  Circle_icon,
  Deflationary,
  Guild,
  Marketplace,
  Ownerships,
} from "../svg/assets";
const Specialfeatures = () => {
  const [featuresData, setFeaturesData] = useState([
    {
      heading: "OWNERSHIPS",
      details:
        "All game assets are securely stores on the blockchain giving players exclusive ownership",
      img: Ownerships,
    },
    {
      heading: "MARKETPLACE",
      details:
        "Trade with various players while creating your own impact to the marketplace",
      img: Marketplace,
    },
    {
      heading: "DEFLATIONARY TOKEN",
      details:
        "Various burning mechanisms allow preservation of the token value",
      img: Deflationary,
    },
    {
      heading: "GUILD SYSTEM",
      details:
        "Create an exciting ecosystem for the cmunity to earn more & connect with others",
      img: Guild,
    },
  ]);

  return (

    <>
    <div className="special-features-background">
      <div
      
      className="Specialfeatures-parent h-auto  px-3 px-sm-4 px-md-0 "
    >
      <div id="specialFeatures" className="content-parent">
        <div className="content-header-parent">
          <h2 className="content-header">SPECIAL FEATURES</h2>
          <img
            src={Feature_underline1}
            alt=""
            className="content-header-underline"
          />
        </div>
        {featuresData.map((value, index) => {
          return (
            <div className="feature-parent d-flex flex-column w-100">
              <div className="d-flex flex-column flex-lg-row align-items-start align-items-lg-center justify-content-start">
                <img
                  src={value.img}
                  alt=""
                  className={`feature-icon ${
                    index === featuresData.length - 1 ? "last-feature-icon" : ""
                  }`}
                />
                <div className="feature-content-parent  mt-2 mt-sm-3 mt-lg-0 ">
                  <h2 className="feature-heading ">{value.heading}</h2>
                  <img
                    src={Feature_underline2}
                    alt=""
                    className="feature-underline"
                  />
                  <p className="fearture-detail text-light">{value.details}</p>
                </div>
              </div>
              <div className="Feature_bottom_border" />
            </div>
          );
        })}
      </div>
      </div>
    </div>
    </>
  
  );
};

export default Specialfeatures;
