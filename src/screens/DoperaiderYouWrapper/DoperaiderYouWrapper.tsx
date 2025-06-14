import React from "react";
import { BottomNav4 } from "./sections/BottomNav4";
import { RaidList } from "./sections/RaidList";
import { Top1 } from "./sections/Top1";
import { Wallet } from "./sections/Wallet";
import { YourStats1 } from "./sections/YourStats1";
import "./style.css";

export const DoperaiderYouWrapper = (): JSX.Element => {
  return (
    <div className="doperaider-YOU-wrapper" data-model-id="464:2262">
      <div className="overlap-57">
        <img
          className="telegram-cloud-photo-3"
          alt="Telegram cloud photo"
          src="/img/telegram-cloud-photo-size-4-5809685116522448568-y-3.png"
        />

        <Top1 />
        <RaidList />
        <BottomNav4 />
        <YourStats1 />
        <img className="LOGO-3" alt="Logo" src="/img/logo-2.svg" />

        <div className="TOP-3">
          <div className="element-at-hga-wrapper">
            <img
              className="element-at-hga"
              alt="Element hga"
              src="/img/9athga-11.png"
            />
          </div>

          <div className="icon-117">
            <img className="vector-32" alt="Vector" src="/img/vector-38.svg" />
          </div>

          <div className="icon-118">
            <img className="vector-33" alt="Vector" src="/img/vector-39.svg" />
          </div>

          <div className="text-wrapper-261">FRIENDS</div>
        </div>

        <Wallet />
      </div>
    </div>
  );
};
