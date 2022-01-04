import React from "react";
import { Footer_Logo, Footer_soicalIcons } from "../svg/assets";
const Foooter = () => {
  return (
    <footer className="footer-parent d-flex justify-content-center ">
      <div className="footer-leftpart">
        <img src={Footer_Logo} alt="" className="footer-img" />
        <div className="footer-social-links-parent d-flex">
          <p className="socialconnected-text text-light mr-4">Stay Conected!</p>
      <div className="social-icons-parent d-flex justify-content-center ml-2  ">
          <img
            src={Footer_soicalIcons[0].SoicalIcon}
            alt=""
            className="soical-icon instagram-icon"
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
      <div className="footer-rightpart">
      <div className="form-floating mb-3">
  <input type="email" className="form-control f-email-input " id="floatingInput" placeholder="Email address"/>
  <button className="btn btn-success f-btn-subscribe">Subscribe</button>
</div>
        <div className="footer-menu">
          <ul className="footer-menu-ul  text-decoration-none d-flex list-unstyled my-0">
            <li className="footer-menu-li f-home-li">HOME</li>
            <li className="footer-menu-li f-whitepaper-li">WHITEPAPER</li>
            <li className="footer-menu-li f-tokenomics-li">TOKENOMICS</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Foooter;
