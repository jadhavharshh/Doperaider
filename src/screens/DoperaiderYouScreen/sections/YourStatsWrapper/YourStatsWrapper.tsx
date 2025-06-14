import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

export const YourStatsWrapper = (): JSX.Element => {
  return (
    <div className="YOUR-STATS-wrapper">
      <div className="navbar-2">
        <div className="text-wrapper-181">INVENTORY</div>

        <Link
          className="text-wrapper-182"
          to="/doperaider-u8212-you-u8212-upgrades2"
        >
          UPGRADES
        </Link>

        <Link
          className="text-wrapper-182"
          to="/doperaider-u8212-you-u8212-upgrades"
        >
          SOCIAL
        </Link>

        <Link
          className="text-wrapper-182"
          to="/doperaider-u8212-you-u8212-trophies"
        >
          TROPHIES
        </Link>
      </div>

      <div className="rectangle-8" />
    </div>
  );
};
