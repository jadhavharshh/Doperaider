import React from "react";
import { BottomNav3 } from "./sections/BottomNav3";
import { NewsInstanceWrapper } from "./sections/NewsInstanceWrapper";
import { RaidList1 } from "./sections/RaidList1";
import { Top3 } from "./sections/Top3";
import "./style.css";

export const Screen9 = (): JSX.Element => {
  return (
    <div className="screen-9" data-model-id="412:3605">
      <div className="BG-6">
        <div className="overlap-group-39">
          <img className="image-5" alt="Image" src="/img/image-7.png" />

          <div className="rectangle-30" />

          <div className="ellipse-53" />

          <div className="ellipse-54" />

          <div className="ellipse-55" />

          <div className="ellipse-56" />

          <div className="ellipse-57" />
        </div>
      </div>

      <RaidList1 />
      <div className="SHADOW-3" />

      <NewsInstanceWrapper />
      <BottomNav3 />
      <Top3 />
    </div>
  );
};
