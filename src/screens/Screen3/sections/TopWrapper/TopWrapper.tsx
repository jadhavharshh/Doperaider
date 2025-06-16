import React from "react";
import "./style.css";

export const TopWrapper = (): JSX.Element => {
  return (
    <div className="TOP-wrapper">
      <div className="element-at-hga-wrapper">
        <img
          className="element-at-hga"
          alt="Element hga"
          src="/img/9athga-11.png"
        />
      </div>

      <div className="icon-8">
        <img className="vector-3" alt="Vector" src="/img/vector-14.svg" />
      </div>

      <div className="icon-9">
        <img className="vector-4" alt="Vector" src="/img/vector-15.svg" />
      </div>

      <div className="text-wrapper-22">PLAYERS</div>

      <div className="text-wrapper-23">RAID</div>
    </div>
  );
};
