import React from "react";
import { TimeLines_BackedImages } from "../svg/assets";

const Timelinebacked = () => {
  return (
    <>
      <div className="backedby_part d-flex flex-column align-items-center">
        <h1 className="backedby_header fw-bold">BACKED BY</h1>
        <div className="backed_cards_parent d-flex justify-content-around w-100 flex-column flex-lg-row mb-4 mb-sm-5 mb-lg-0">
          {TimeLines_BackedImages.map((value, index) => {
            return (
              <>
                <div className="backed_card d-flex justify-content-center align-items-center px-3 mb-4 mb-sm-5 mb-lg-0">
                  <img
                    className="backed_card_img"
                    src={value.BackedbyCard}
                    alt=""
                  />
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Timelinebacked;
