import React from "react";
import { BottomNav } from "./sections/BottomNav";
import { Popup } from "./sections/Popup";
import "./style.css";

export const DoperaiderMapScreen = (): JSX.Element => {
  return (
    <div className="doperaider-MAP-screen" data-model-id="412:3351">
      <div className="overlap-48">
        <BottomNav />
        <div className="text-wrapper-252">MAP</div>

        <Popup />
      </div>
    </div>
  );
};
