import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

export const SectionComponentNode = (): JSX.Element => {
  return (
    <div className="section-component-node">
      <div className="WEED-5">
        <div className="icon-40">
          <img className="vector-13" alt="Vector" src="/img/vector-22.svg" />
        </div>

        <div className="text-wrapper-79">GROW WEED</div>
      </div>

      <div className="frame-10">
        <div className="frame-11">
          <div className="icon-41">
            <img className="layer-13" alt="Layer" src="/img/layer-1-12.svg" />
          </div>
        </div>

        <div className="text-wrapper-80">20 SEEDS</div>

        <div className="text-wrapper-81">REQUIRES</div>

        <div className="text-wrapper-82">20 available</div>
      </div>

      <div className="frame-12">
        <div className="max-yield-time-cost-3">
          Max Yield:
          <br />
          Time:
          <br />
          Cost:
        </div>

        <div className="element-minutes-2">
          {" "}
          15oZ
          <br />3 Minutes
          <br />
          $0.25
        </div>
      </div>

      <Link
        className="trade-11"
        to="/you/production-u8212-weed-active"
      >
        <div className="text-wrapper-83">GROW</div>
      </Link>
    </div>
  );
};
