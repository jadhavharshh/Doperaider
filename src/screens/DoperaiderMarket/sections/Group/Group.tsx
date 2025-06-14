import React from "react";
import "./style.css";

export const Group = (): JSX.Element => {
  return (
    <div className="group">
      <div className="MARKET-PRICES-5">
        <div className="text-wrapper-16">ITEM</div>

        <div className="text-wrapper-17">BUY</div>

        <div className="text-wrapper-18">SELL</div>

        <img className="line-2" alt="Line" src="/img/line-1-1.svg" />

        <div className="overlap-group-3">
          <div className="COKE-2">
            <div className="text-wrapper-19">COKE</div>

            <div className="text-wrapper-20">$6.66</div>

            <div className="text-wrapper-21">$6.33</div>

            <div className="icon-4">
              <img className="vector-3" alt="Vector" src="/img/vector-10.svg" />
            </div>
          </div>

          <div className="trade-3">
            <div className="text-wrapper-22">TRADE</div>
          </div>
        </div>

        <div className="WEED-2">
          <div className="text-wrapper-19">WEED</div>

          <div className="text-wrapper-23">$3.73</div>

          <div className="text-wrapper-21">$3.54</div>

          <div className="icon-5">
            <img className="vector-4" alt="Vector" src="/img/vector-11.svg" />
          </div>

          <div className="trade-3">
            <div className="text-wrapper-22">TRADE</div>
          </div>
        </div>
      </div>

      <div className="MARKET-PRICES-6">
        <div className="SEEDS">
          <div className="text-wrapper-19">SEEDS</div>

          <div className="text-wrapper-24">$2.50</div>

          <div className="layer-wrapper">
            <img className="layer-3" alt="Layer" src="/img/layer-1-6.svg" />
          </div>

          <div className="trade-4">
            <div className="text-wrapper-22">BUY $2.50</div>
          </div>

          <div className="trade-5">
            <div className="polygon-wrapper">
              <img
                className="polygon"
                alt="Polygon"
                src="/img/polygon-1-4.png"
              />
            </div>

            <div className="text-wrapper-25">1</div>

            <div className="polygon-wrapper-2">
              <img
                className="polygon-2"
                alt="Polygon"
                src="/img/polygon-1-7.png"
              />
            </div>
          </div>
        </div>

        <div className="CHEMICALS">
          <div className="text-wrapper-19">CHEMICALS</div>

          <div className="text-wrapper-24">$4.50</div>

          <div className="icon-6">
            <img className="img-2" alt="Group" src="/img/group-6.png" />
          </div>

          <div className="trade-6">
            <div className="text-wrapper-22">BUY $13.50</div>
          </div>

          <div className="trade-5">
            <div className="polygon-wrapper">
              <img
                className="polygon"
                alt="Polygon"
                src="/img/polygon-1-6.png"
              />
            </div>

            <div className="text-wrapper-25">3</div>

            <div className="polygon-wrapper-2">
              <img
                className="polygon-2"
                alt="Polygon"
                src="/img/polygon-1-7.png"
              />
            </div>
          </div>
        </div>

        <div className="trade-7">
          <div className="text-wrapper-26">TRADE</div>
        </div>
      </div>
    </div>
  );
};
