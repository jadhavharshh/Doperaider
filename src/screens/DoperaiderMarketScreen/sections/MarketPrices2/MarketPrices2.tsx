import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

export const MarketPrices2 = (): JSX.Element => {
  return (
    <div className="MARKET-PRICES-2">
      <div className="text-wrapper-107">ITEM</div>

      <div className="text-wrapper-108">BUY</div>

      <div className="text-wrapper-109">SELL</div>

      <img className="line-6" alt="Line" src="/img/line-1-6.svg" />

      <div className="overlap-9">
        <div className="COKE-3">
          <div className="text-wrapper-110">COKE</div>

          <div className="text-wrapper-111">$6.66</div>

          <div className="text-wrapper-112">$6.33</div>

          <div className="icon-55">
            <img className="vector-17" alt="Vector" src="/img/vector-28.svg" />
          </div>
        </div>

        <Link
          className="trade-13"
          to="/you/market-u8212-trade-popup"
        >
          <div className="text-wrapper-113">TRADE</div>
        </Link>
      </div>

      <div className="WEED-7">
        <div className="text-wrapper-110">WEED</div>

        <div className="text-wrapper-114">$3.73</div>

        <div className="text-wrapper-115">$3.54</div>

        <div className="icon-56">
          <img className="vector-18" alt="Vector" src="/img/vector-29.svg" />
        </div>

        <div className="trade-13">
          <div className="text-wrapper-113">TRADE</div>
        </div>
      </div>
    </div>
  );
};
