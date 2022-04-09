import React from "react";
import { Footer_Logo, Footer_soicalIcons } from "../svg/assets";
const Foooter = () => {
  return (
    <footer
      className="footer-parent d-flex justify-content-center d-flex
    flex-column
    flex-lg-row px-3 px-sm-4 px-md-0"
    >
      <div className="footer-leftpart">
        <img src={Footer_Logo} alt="" className="footer-img" />
        <div className="footer-social-links-parent d-flex d-flex flex-column flex-lg-row ">
          <p
            className="socialconnected-text text-light mx-4 mx-lg-4
  mx-xl-5 "
          >
            Stay Conected!
          </p>
          <div className="social-icons-parent d-flex justify-content-center ml-2  ">
            <img
              src={Footer_soicalIcons[0].SoicalIcon}
              alt=""
              className="soical-icon instagram-icon ml-2 "
            />
            <img
              src={Footer_soicalIcons[1].SoicalIcon}
              alt=""
              className="soical-icon discord-icon"
            />
            <img
              src={Footer_soicalIcons[2].SoicalIcon}
              alt=""
              className="soical-icon twitter-icon"
            />
            <img
              src={Footer_soicalIcons[3].SoicalIcon}
              alt=""
              className="soical-icon facebook-icon"
            />
          </div>
        </div>
      </div>
      <div className="footer-rightpart px-3 px-sm-4 px-md-0">
        <div
          class="input-group mb-3  mb-md-4
  mb-lg-5"
        >
          <input
            type="text"
            class="form-control subscribe-input fw-bold"
            placeholder="abc@gmail.com"
            aria-label="Recipient's username"
            aria-describedby="button-addon2"
          />
          <button
            class="btn btn-success subscribe-btn fw-bold"
            type="button"
            id="button-addon2"
          >
            Subscribe
          </button>
        </div>

        <div className="footer-menu">
          <ul
            className="footer-menu-ul justify-content-center
  justify-content-lg-start text-decoration-none d-flex flex-column flex-sm-row align-items-center list-unstyled my-0 "
          >
            <a href="#earnAdventure" className="text-decoration-none">
              <li className="footer-menu-li f-home-li my-3 my-sm-0">
                Adventure
              </li>
            </a>
            <a href="#specialFeatures" className="text-decoration-none">
              <li className="footer-menu-li f-whitepaper-li mb-3 mb-sm-0">
                Features
              </li>
            </a>
            <a href="#roadmap" className="text-decoration-none">
              <li className="footer-menu-li f-tokenomics-li ">Roadmap</li>
            </a>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Foooter;
