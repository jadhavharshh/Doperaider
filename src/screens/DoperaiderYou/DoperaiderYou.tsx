import React from "react";
import { BottomNav2 } from "./sections/BottomNav2";
import { ScrollTrophies } from "./sections/ScrollTrophies";
import { Top } from "./sections/Top";
import { YourStats } from "./sections/YourStats";
import "./style.css";

export const DoperaiderYou = (): JSX.Element => {
  return (
    <div className="doperaider-YOU" data-model-id="412:2054">
      <div className="overlap-55">
        <img
          className="telegram-cloud-photo"
          alt="Telegram cloud photo"
          src="/img/telegram-cloud-photo-size-4-5809685116522448568-y-3.png"
        />

        <Top />
        <ScrollTrophies />
        <BottomNav2 />
        <YourStats />
        <img className="LOGO" alt="Logo" src="/img/logo.svg" />
      </div>
    </div>
  );
};
