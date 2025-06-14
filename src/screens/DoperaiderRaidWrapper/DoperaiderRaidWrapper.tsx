import React from "react";
import { BottomNav1 } from "./sections/BottomNav1";
import { News } from "./sections/News";
import { PlayersWrapper } from "./sections/PlayersWrapper";
import { Top1 } from "./sections/Top1";
import "./style.css";

export const DoperaiderRaidWrapper = (): JSX.Element => {
  return (
    <div className="doperaider-RAID-wrapper" data-model-id="412:4429">
      <div className="BG-4">
        <div className="overlap-group-37">
          <img className="image-3" alt="Image" src="/img/image-7.png" />

          <div className="rectangle-28" />

          <div className="ellipse-43" />

          <div className="ellipse-44" />

          <div className="ellipse-45" />

          <div className="ellipse-46" />

          <div className="ellipse-47" />
        </div>
      </div>

      <PlayersWrapper />
      <div className="SHADOW" />

      <News />
      <BottomNav1 />
      <Top1 />
    </div>
  );
};
