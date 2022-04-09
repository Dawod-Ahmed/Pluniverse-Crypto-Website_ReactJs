import React, { useState } from "react";
import { HeaderData } from "../Data/components";
import { Logo, Tooglebtn } from "../svg/assets";

const Header = () => {
  const [menu, setMenu] = useState(false);

  const MenuVisibility = () => {
    setMenu(!menu);
    console.log(menu);
  };

  return (
    <>
      <header className="position-fixed w-100">
        <div
          className={`overlay position-fixed ${
            menu ? "d-block" : "d-none"
          } h-100 w-100 `}
          onClick={MenuVisibility}
        ></div>
        <div className="header-top-bar d-flex justify-content-between px-2 px-sm-3 px-md-0 d-md-none position-fixed w-100 ">
          {" "}
          <img
            src={Logo}
            alt="img"
            className="logo1 logo top-0 position-relative align-self-start mt-md-4 mt-xxl-5 w-auto "
          />
          <img
            src={Tooglebtn}
            alt="img"
            className="h-toogle-btn "
            onClick={MenuVisibility}
          />
        </div>

        <div
          className={`header-left-bar h-container align-items-start d-flex  align-items-md-center h-100  ${
            menu ? "menushow" : "menuhide"
          } `}
        >
          <div className="header-sub-parent d-flex w-100 justify-content-lg-around align-items-start align-items-md-center   justify-content-md-between px-3 px-sm-4 px-lg-0 flex-column justify-content-center flex-md-row ">
            <div className="header-left-side d-flex align-items-start flex-column justify-content-center flex-md-row align-items-md-center ">
              <div className="logo-and-cross-parent d-flex justify-content-between d-md-block w-100">
                <img
                  src={Logo}
                  alt="img"
                  className="logo top-0 position-relative align-self-start mt-md-4 mt-xxl-5 w-auto "
                />
                <div
                  className="cross-parent  d-md-none"
                  onClick={MenuVisibility}
                >
                  <div className="cross-left cross-line w-100 "></div>
                  <div className="cross-right cross-line w-100 "></div>
                </div>
              </div>

              <div className="h-menu-ul-parent h-100 mt-5 mt-md-0 ">
                <ul className="h-menu-ul text-decoration-none d-flex list-unstyled my-0 h-100 align-items-start align-items-md-center  flex-column justify-content-center flex-md-row ">
                  {HeaderData.map((value, index) => (
                    <>
                      <li className={`h-menu-li ${value.classsName}`}>
                        <a
                          href={value.link}
                          className={`h-li-navlink text-decoration-none text-light fw-bold`}
                        >
                          {value.header_menu}
                        </a>
                      </li>
                    </>
                  ))}
                </ul>
              </div>
            </div>

            <button className="btn h-btn text-light rounded-1  fw-bold ">
              Founder Badges
            </button>
          </div>
        </div>
      </header>
      <style jsx>{``}</style>
    </>
  );
};

export default Header;
