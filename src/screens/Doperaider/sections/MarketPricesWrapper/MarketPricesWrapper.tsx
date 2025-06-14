import React from "react";
import "./style.css";

export const MarketPricesWrapper = (): JSX.Element => {
  return (
    <div className="MARKET-PRICES-wrapper">
      <div className="WEED-4">
        <div className="icon-30">
          <img className="vector-12" alt="Vector" src="/img/vector-21.svg" />
        </div>

        <div className="text-wrapper-65">PRODUCE COKE</div>
      </div>

      <div className="frame-7">
        <div className="frame-8">
          <div className="icon-31">
            <img className="group-5" alt="Group" src="/img/group-6-2.png" />
          </div>
        </div>

        <div className="text-wrapper-66">20 CHEMICALS</div>

        <div className="text-wrapper-67">REQUIRES</div>

        <div className="text-wrapper-68">20 available</div>
      </div>

      <div className="frame-9">
        <div className="max-yield-time-cost-2">
          Max Yield:
          <br />
          Time:
          <br />
          Cost:
        </div>

        <div className="element-oz-minutes">
          {" "}
          15oZ
          <br />3 Minutes
          <br />
          $0.25
        </div>
      </div>

      <div className="trade-10">
        <div className="text-wrapper-69">PRODUCE</div>
      </div>
    </div>
  );
};
