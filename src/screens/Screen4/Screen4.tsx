import React from "react";
import { Div } from "./sections/Div";
import { DivWrapper } from "./sections/DivWrapper";
import { NewsInstanceWrapper } from "./sections/NewsInstanceWrapper";
import { RaidListWrapper } from "./sections/RaidListWrapper";
import "./style.css";

export const Screen4 = (): JSX.Element => {
  return (
    <div className="screen-4" data-model-id="412:3986">
      <div className="BG-5">
        <div className="overlap-group-16">
          <img className="image-5" alt="Image" src="/img/image-4.png" />

          <div className="rectangle-13" />

          <div className="ellipse-30" />

          <div className="ellipse-31" />

          <div className="ellipse-32" />

          <div className="ellipse-33" />

          <div className="ellipse-34" />
        </div>
      </div>

      <RaidListWrapper />
      <div className="SHADOW-3" />

      <NewsInstanceWrapper />
      <DivWrapper />
      <Div />
    </div>
  );
};
