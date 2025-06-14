import React from "react";
import "./style.css";

export const Top3 = (): JSX.Element => {
  return (
    <div className="TOP-3">
      <div className="icon-64">
        <img
          className="element-hga-2"
          alt="Element hga"
          src="/img/9athga-15.png"
        />
      </div>

      <div className="icon-65">
        <img className="vector-10" alt="Vector" src="/img/vector-30.svg" />
      </div>

      <div className="icon-66">
        <img className="vector-11" alt="Vector" src="/img/vector-31.svg" />
      </div>

      <div className="text-wrapper-138">PLAYERS</div>

      <div className="text-wrapper-139">RAID</div>
    </div>
  );
};
