import React from "react";

const Cardcomponent = (props) => {
  const {
    className,
    CardImage,
    Card_ContentList,
    CardHeading,
    usdc,
    card_btn,
    remainings,
  } = props;

  const {
    background,
    header,
    li_color,
    cardBottom_border_color,
    btnbackground_color,
  } = props.Cardscolors;
  //   const { background, header, li_color } = props;
  return (
    <>
      <div
        className={` badge-card ${className}-badge-card  d-flex flex-column align-items-center py-3 mr-5`}
      >
        <img className="card-img m-0" src={CardImage} alt="" />
        <div className="card-content-parent mt-3">
          <h2
            className={`card-main-header ${className}-card-main-header text-center `}
          >
            {CardHeading}
          </h2>
          <ul className="card-content-ul text-decoration-none list-unstyled">
            {Card_ContentList.map((value, index) => {
              return (
                <div key={index}>
                  <li
                    className={`card-content-header ${className}-card-content-header `}
                  >
                    {value.Header}
                  </li>
                  <li
                    className={`card-content-detail ${className}-card-content-detail `}
                  >
                    {value.Detail}
                  </li>
                </div>
              );
            })}
          </ul>

          <div className="card-usdc-nft-remaining-parent d-flex flex-column align-items-center">
            <p
              className={`usdc-card-text ${className}-usdc-card-text  text-center mb-2`}
            >
              {usdc}
            </p>
            <button
              type="button"
              className={`nft-btn ${className}-nft-btn  text-light d-flex align-items-center justify-content-center border-0`}
            >
              {card_btn}
            </button>
            <p
              className={`ramaining-card-text ${className}-ramaining-card-text  text-center mb-0 mt-2`}
            >
              {remainings}
            </p>
          </div>
        </div>
      </div>
      <style>
        {`
          .${className}-badge-card {
            background-color: ${background};
            border-bottom: 20px solid ${cardBottom_border_color};
          }

          .${className}-badge-card {
            background-color: ${background};
          }

          .${className}-card-main-header {
            color: ${header};
          }

          .${className}-card-content-header,
            .${className}-card-content-detail,
            .${className}-usdc-card-text,
            .${className}-ramaining-card-text {
            color: ${li_color};
          }

          .${className}-nft-btn {
            background-color: ${btnbackground_color};
          }
        `}
      </style>
    </>
  );
};

export default Cardcomponent;
