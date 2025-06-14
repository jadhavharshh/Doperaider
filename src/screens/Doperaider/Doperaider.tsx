import React from "react";
import { DivWrapper } from "./sections/DivWrapper";
import { MarketPrices } from "./sections/MarketPrices";
import { MarketPricesWrapper } from "./sections/MarketPricesWrapper";
import "./style.css";

export const Doperaider = (): JSX.Element => {
  return (
    <div className="doperaider" data-model-id="412:3065">
      <div className="overlap-50">
        <div className="BG-2">
          <div className="overlap-group-39">
            <img className="image" alt="Image" src="/img/image-2.png" />

            <div className="rectangle-14" />

            <div className="ellipse-34" />

            <div className="ellipse-35" />

            <div className="ellipse-36" />

            <div className="ellipse-37" />

            <div className="ellipse-38" />
          </div>
        </div>

        <DivWrapper />
        <div className="text-wrapper-255">PRODUCTION</div>

        <MarketPrices />
        <MarketPricesWrapper />
        <div className="frame-77">
          <div className="overlap-51">
            <p className="text-wrapper-256">THAT WEED IS COMING ALONG...</p>
          </div>
        </div>
      </div>
    </div>
  );
};
