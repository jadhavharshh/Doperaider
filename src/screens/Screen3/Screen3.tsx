import React from "react";
import { BottomNavWrapper } from "./sections/BottomNavWrapper";
import { NewsWrapper } from "./sections/NewsWrapper";
import { PlayersWrapper } from "./sections/PlayersWrapper";
import { TopWrapper } from "./sections/TopWrapper";
import "./style.css";

export const Screen3 = (): JSX.Element => {
  return (
    <div className="screen-3" data-model-id="412:4429">
      <div className="BG-4">
        <div className="overlap-group-15">
          <img className="image-4" alt="Image" src="/img/image-4.png" />

          <div className="rectangle-12" />

          <div className="ellipse-25" />

          <div className="ellipse-26" />

          <div className="ellipse-27" />

          <div className="ellipse-28" />

          <div className="ellipse-29" />
        </div>
      </div>

      <PlayersWrapper />
      <div className="SHADOW-2" />

      <NewsWrapper />
      <BottomNavWrapper />
      <TopWrapper />
    </div>
  );
};
