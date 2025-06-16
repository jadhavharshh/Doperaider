import React from "react";
import { NavTabs } from "../../components/NavTabs"; // Add this import
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


          <div className="ellipse-43" />

          <div className="ellipse-44" />

          <div className="ellipse-45" />

          <div className="ellipse-47" />
        </div>
      </div>

      <PlayersWrapper />
      <div className="SHADOW" />

      <News />
      {/* Replace BottomNav1 with NavTabs */}
      <NavTabs
        property1="MAP"
        className=""
        icon="/img/icon.svg"
        layer="/img/layer-1-1.svg"
        img="/img/icon-1.svg"
        icon1="/img/icon-2.svg"
      />
      <Top1 />
    </div>
  );
};