import React from "react";
import { BottomNav3 } from "./sections/BottomNav3";
import { Scroll } from "./sections/Scroll";
import { TopWrapper } from "./sections/TopWrapper";
import { YourStatsWrapper } from "./sections/YourStatsWrapper";
import "./style.css";

export const DoperaiderYouScreen = (): JSX.Element => {
  return (
    <div className="doperaider-YOU-screen" data-model-id="412:1574">
      <div className="overlap-56">
        <img
          className="telegram-cloud-photo-2"
          alt="Telegram cloud photo"
          src="/img/telegram-cloud-photo-size-4-5809685116522448568-y-1.png"
        />

        <TopWrapper />
        <Scroll />
        <BottomNav3 />
        <YourStatsWrapper />
        <img className="LOGO-2" alt="Logo" src="/img/logo-1.svg" />
      </div>
    </div>
  );
};
