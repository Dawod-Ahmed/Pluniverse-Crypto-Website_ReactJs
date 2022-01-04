import React from "react";
import Circle_icon from "../svg/specials_features/circle_icon.png";
import Feature_underline1 from "../svg/specials_features/feature-underline1.png";
import Feature_underline2 from "../svg/specials_features/feature_underline2.png";


const Specialfeatures = () => {
  return (
    <div className="Specialfeatures-parent">
      <div className="content-parent">
        <div className="content-header-parent">
          <h2 className="content-header">SPECIAL FEATURES</h2>
          <img
            src={Feature_underline1}
            alt=""
            className="content-header-underline"
          />
        </div>

        <div className="feature-parent d-flex flex-column">
          <div className="d-flex ">
            <img src={Circle_icon} alt="" className="feature-icon" />
            <div className="feature-content-parent">
              <h2 className="feature-heading ">OWNERSHIPS</h2>
              <img
                src={Feature_underline2}
                alt=""
                className="feature-underline"
              />
              <p className="fearture-detail text-light">
                All game assets are securely stores on the blockchain giving
                players exclusive ownership
              </p>
            </div>
          </div>
          <div className="Feature_bottom_border" />
        </div>



        <div className="feature-parent d-flex flex-column">
          <div className="d-flex ">
            <img src={Circle_icon} alt="" className="feature-icon" />
            <div className="feature-content-parent">
              <h2 className="feature-heading ">OWNERSHIPS</h2>
              <img
                src={Feature_underline2}
                alt=""
                className="feature-underline"
              />
              <p className="fearture-detail text-light">
                All game assets are securely stores on the blockchain giving
                players exclusive ownership
              </p>
            </div>
          </div>
          <div className="Feature_bottom_border" />
        </div>



        <div className="feature-parent d-flex flex-column">
          <div className="d-flex ">
            <img src={Circle_icon} alt="" className="feature-icon" />
            <div className="feature-content-parent">
              <h2 className="feature-heading ">OWNERSHIPS</h2>
              <img
                src={Feature_underline2}
                alt=""
                className="feature-underline"
              />
              <p className="fearture-detail text-light">
                All game assets are securely stores on the blockchain giving
                players exclusive ownership
              </p>
            </div>
          </div>
          <div className="Feature_bottom_border" />
        </div>

         

        <div className="feature-parent d-flex flex-column">
          <div className="d-flex ">
            <img src={Circle_icon} alt="" className="feature-icon" />
            <div className="feature-content-parent">
              <h2 className="feature-heading ">OWNERSHIPS</h2>
              <img
                src={Feature_underline2}
                alt=""
                className="feature-underline"
              />
              <p className="fearture-detail text-light">
                All game assets are securely stores on the blockchain giving
                players exclusive ownership
              </p>
            </div>
          </div>
         
        </div>




      </div>
    </div>
  );
};

export default Specialfeatures;
