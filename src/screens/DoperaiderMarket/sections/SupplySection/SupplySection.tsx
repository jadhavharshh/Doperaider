import React from "react";
import "./style.css";

export const SupplySection = (): JSX.Element => {
  return (
    <div className="SUPPLY-SECTION">
      <div className="overlap-3">
        <div className="coke-supply">
          <div className="text-wrapper-36">COKE SUPPLY</div>

          <div className="text-wrapper-37">COKE POOL</div>

          <div className="text-wrapper-38">751 oz</div>

          <div className="text-wrapper-39">$5000</div>

          <div className="overlap-group-5">
            <img className="line-3" alt="Line" src="/img/line-1-5.svg" />

            <div className="icon-15">
              <img className="vector-5" alt="Vector" src="/img/vector-14.svg" />
            </div>
          </div>
        </div>

        <div className="weed-supply">
          <div className="text-wrapper-40">WEED SUPPLY</div>

          <div className="text-wrapper-37">WEED POOL</div>

          <div className="text-wrapper-38">165 oz</div>

          <div className="text-wrapper-41">$615</div>

          <div className="overlap-group-5">
            <img className="line-3" alt="Line" src="/img/line-1-5.svg" />

            <div className="icon-16">
              <img className="vector-6" alt="Vector" src="/img/vector-15.svg" />
            </div>
          </div>
        </div>

        <img className="FLAG" alt="Flag" src="/img/flag-1.svg" />
      </div>
    </div>
  );
};
