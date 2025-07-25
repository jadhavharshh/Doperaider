import React from "react";
import { BottomNav2 } from "./sections/BottomNav2";
import { NewsWrapper } from "./sections/NewsWrapper";
import { RaidListWrapper } from "./sections/RaidListWrapper";
import { Top2 } from "./sections/Top2";
import { NavTabs } from "../../components/NavTabs"; // Add this import

import "./style.css";

export const Screen8 = (): JSX.Element => {
  return (
    <div className="screen-8" data-model-id="412:3986">
      <div className="BG-5">
        <div className="overlap-group-38">
          <img className="image-4" alt="Image" src="/img/image-7.png" />


          <div className="ellipse-48" />

          <div className="ellipse-49" />

          <div className="ellipse-50" />
        </div>
      </div>

      <RaidListWrapper />
      <div className="SHADOW-2" />

      <NewsWrapper />
      <NavTabs />
      <Top2 />
    </div>
  );
};
