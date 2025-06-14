import React from "react";
import "./style.css";

export const MarketPrices1 = (): JSX.Element => {
  return (
    <div className="MARKET-PRICES-1">
      <div className="WEED-6">
        <div className="icon-42">
          <img className="vector-14" alt="Vector" src="/img/vector-23.svg" />
        </div>

        <div className="text-wrapper-84">PRODUCE COKE</div>
      </div>

      <div className="frame-13">
        <div className="frame-14">
          <div className="icon-43">
            <img className="group-6" alt="Group" src="/img/group-6-2.png" />
          </div>
        </div>

        <div className="text-wrapper-85">20 CHEMICALS</div>

        <div className="text-wrapper-86">REQUIRES</div>

        <div className="text-wrapper-87">20 available</div>
      </div>

      <div className="frame-15">
        <div className="max-yield-time-cost-4">
          Max Yield:
          <br />
          Time:
          <br />
          Cost:
        </div>

        <div className="element-minutes-3">
          {" "}
          15oZ
          <br />3 Minutes
          <br />
          $0.25
        </div>
      </div>

      <div className="trade-12">
        <div className="text-wrapper-88">PRODUCE</div>
      </div>
    </div>
  );
};
