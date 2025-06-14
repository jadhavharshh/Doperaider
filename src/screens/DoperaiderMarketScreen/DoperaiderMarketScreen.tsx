import React from "react";
import { BottomNav1 } from "./sections/BottomNav1";
import { MarketPrices2 } from "./sections/MarketPrices2";
import { MarketPrices3 } from "./sections/MarketPrices3";
import { OverlapWrapper } from "./sections/OverlapWrapper";
import "./style.css";

export const DoperaiderMarketScreen = (): JSX.Element => {
  return (
    <div className="doperaider-MARKET-screen" data-model-id="412:2671">
      <div className="overlap-54">
        <div className="BG-4">
          <div className="overlap-group-41">
            <img className="element-22" alt="Element" src="/img/5-1-1.png" />

            <div className="rectangle-16" />

            <div className="ellipse-44" />

            <div className="ellipse-45" />

            <div className="ellipse-46" />

            <div className="ellipse-47" />
          </div>
        </div>

        <div className="TRAVEL-AREAS-2">
          <div className="text-wrapper-259">SWIPE TO EXPLORE</div>

          <div className="TRAVEL-LEFT-3">
            <img
              className="mask-group-10"
              alt="Mask group"
              src="/img/mask-group-9.png"
            />

            <img className="vector-30" alt="Vector" src="/img/vector-24.svg" />
          </div>

          <div className="TRAVEL-LEFT-4">
            <img
              className="mask-group-11"
              alt="Mask group"
              src="/img/mask-group-10.png"
            />

            <img className="vector-31" alt="Vector" src="/img/vector-25.svg" />
          </div>
        </div>

        <BottomNav1 />
        <div className="text-wrapper-260">LITTLE ITALY</div>

        <OverlapWrapper />
        <MarketPrices2 />
        <MarketPrices3 />
      </div>
    </div>
  );
};
