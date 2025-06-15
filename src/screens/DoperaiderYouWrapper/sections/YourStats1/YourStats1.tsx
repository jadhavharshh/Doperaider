import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

export const YourStats1 = (): JSX.Element => {
  return (
    <div className="YOUR-STATS-1">
      <div className="navbar-3">
        <Link
          className="text-wrapper-203"
          to="/you/inventory"
        >
          INVENTORY
        </Link>

        <Link
          className="text-wrapper-203"
          to="/doperaider-u8212-you-u8212-upgrades2"
        >
          UPGRADES
        </Link>

        <Link
          className="text-wrapper-204"
          to="/doperaider-u8212-you-u8212-upgrades"
        >
          SOCIAL
        </Link>

        <Link
          className="text-wrapper-203"
          to="/doperaider-u8212-you-u8212-trophies"
        >
          TROPHIES
        </Link>
      </div>

      <div className="rectangle-9" />
    </div>
  );
};
