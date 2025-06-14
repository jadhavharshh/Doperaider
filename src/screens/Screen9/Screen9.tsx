import React from "react";
import { BottomNav5 } from "./sections/BottomNav5";
import { Top2 } from "./sections/Top2";
import { Upgrades } from "./sections/Upgrades";
import { YourStats2 } from "./sections/YourStats2";
import "./style.css";

export const Screen9 = (): JSX.Element => {
  return (
    <div className="screen-9" data-model-id="412:1820">
      <div className="overlap-58">
        <img
          className="telegram-cloud-photo-4"
          alt="Telegram cloud photo"
          src="/img/telegram-cloud-photo-size-4-5809685116522448568-y-3.png"
        />

        <Top2 />
        <Upgrades />
        <BottomNav5 />
        <YourStats2 />
        <img className="LOGO-4" alt="Logo" src="/img/logo-3.svg" />
      </div>
    </div>
  );
};
