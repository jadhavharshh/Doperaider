import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

export const MarketPrices = (): JSX.Element => {
  return (
    <div className="MARKET-PRICES">
      <div className="WEED-3">
        <div className="icon-27">
          <img className="vector-9" alt="Vector" src="/img/vector-18.svg" />
        </div>

        <div className="text-wrapper-62">GROW WEED</div>
      </div>

      <div className="frame-5">
        <div className="overlap-7">
          <div className="text-wrapper-63">IN PROGRESS...</div>

          <div className="ellipse" />

          <div className="ellipse-2" />

          <div className="ellipse-3" />

          <div className="icon-wrapper">
            <div className="icon-28">
              <img
                className="vector-10"
                alt="Vector"
                src="/img/vector-19.svg"
              />
            </div>
          </div>

          <div className="group-3">
            <div className="overlap-group-8">
              <img
                className="mask-group-2"
                alt="Mask group"
                src="/img/mask-group-4.png"
              />

              <img
                className="mask-group-3"
                alt="Mask group"
                src="/img/mask-group-5.png"
              />
            </div>
          </div>

          <img className="line-4" alt="Line" src="/img/line-3.svg" />
        </div>
      </div>

      <div className="frame-6">
        <div className="max-yield-time-cost">
          Max Yield:
          <br />
          Time:
          <br />
          Cost:
        </div>

        <div className="element-minutes">
          {" "}
          15oZ
          <br />3 Minutes
          <br />
          $0.25
        </div>
      </div>

      <div className="weed-4">
        <div className="icon-29">
          <img className="vector-11" alt="Vector" src="/img/vector-20.svg" />
        </div>

        <div className="grow-power-TIER">GROW POWER TIER 1</div>
      </div>

      <Link className="trade-9" to="/doperaider-u8212-production">
        <div className="group-4">
          <div className="overlap-group-9">
            <img
              className="mask-group-4"
              alt="Mask group"
              src="/img/mask-group-7.png"
            />

            <img
              className="mask-group-5"
              alt="Mask group"
              src="/img/mask-group-8.png"
            />
          </div>
        </div>

        <div className="text-wrapper-64">2min 12secs</div>
      </Link>
    </div>
  );
};
