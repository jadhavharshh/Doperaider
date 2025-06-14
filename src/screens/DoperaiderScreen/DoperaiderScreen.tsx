import React from "react";
import { Div } from "./sections/Div";
import { Frame } from "./sections/Frame";
import { MarketPrices1 } from "./sections/MarketPrices1";
import { SectionComponentNode } from "./sections/SectionComponentNode";
import "./style.css";

export const DoperaiderScreen = (): JSX.Element => {
  return (
    <div className="doperaider-screen" data-model-id="412:2986">
      <div className="overlap-52">
        <div className="BG-3">
          <div className="overlap-group-40">
            <img className="image-2" alt="Image" src="/img/image-2.png" />

            <div className="rectangle-15" />

            <div className="ellipse-39" />

            <div className="ellipse-40" />

            <div className="ellipse-41" />

            <div className="ellipse-42" />

            <div className="ellipse-43" />
          </div>
        </div>

        <Div />
        <div className="text-wrapper-257">PRODUCTION</div>

        <SectionComponentNode />
        <MarketPrices1 />
        <div className="frame-78">
          <div className="overlap-53">
            <div className="text-wrapper-258">LET’S GET TO WORK...</div>
          </div>
        </div>

        <Frame />
      </div>
    </div>
  );
};
