import React from "react";
import { BottomNavWrapper } from "./sections/BottomNavWrapper";
import { Group } from "./sections/Group";
import { Notifications } from "./sections/Notifications";
import { SupplySection } from "./sections/SupplySection";
import "./style.css";

export const DoperaiderMarket = (): JSX.Element => {
  return (
    <div className="doperaider-MARKET" data-model-id="412:2802">
      <div className="overlap-49">
        <div className="BG">
          <div className="overlap-group-38">
            <img className="element-21" alt="Element" src="/img/5-1-1.png" />

            <div className="rectangle-12" />

            <div className="ellipse-30" />

            <div className="ellipse-31" />

            <div className="ellipse-32" />

            <div className="ellipse-33" />
          </div>
        </div>

        <Group />
        <div className="TRAVEL-AREAS">
          <div className="text-wrapper-253">SWIPE TO TRAVEL AREAS</div>

          <div className="TRAVEL-LEFT">
            <img
              className="mask-group-8"
              alt="Mask group"
              src="/img/mask-group-9.png"
            />

            <img className="vector-28" alt="Vector" src="/img/vector-24.svg" />
          </div>

          <div className="TRAVEL-LEFT-2">
            <img
              className="mask-group-9"
              alt="Mask group"
              src="/img/mask-group-10.png"
            />

            <img className="vector-29" alt="Vector" src="/img/vector-25.svg" />
          </div>
        </div>

        <div className="rectangle-13" />

        <BottomNavWrapper />
        <SupplySection />
        <div className="text-wrapper-254">LITTLE ITALY</div>

        <Notifications />
      </div>
    </div>
  );
};
