import React from "react";
import { Timelinebacked} from "./components";
import Roadmap_Comp from './roadmap_Comp'
import { RoadMap_Images } from "../svg/assets";
const Timelineroadmap = () => {
  return (
    <div className="Timeline_Parent d-flex flex-column align-items-center pt-5">
      <div className="roadmap-parent mb-5">
        <div className="roadmap-header d-flex justify-content-center align-items-center">
          <img
            src={RoadMap_Images.Roadmap_image}
            alt=""
            className="roadmap-header-textimage"
          />
        </div>

       
        <div>
          {/* <roadmap_Comp /> */}
          <Roadmap_Comp/>
        </div>
      </div>
      <Timelinebacked />
    </div>
  );
};

export default Timelineroadmap;
