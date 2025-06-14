import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

export const YourStats2 = (): JSX.Element => {
  return (
    <div className="YOUR-STATS-2">
      <div className="navbar-4">
        <Link
          className="text-wrapper-234"
          to="/doperaider-u8212-you-u8212-inventory"
        >
          INVENTORY
        </Link>

        <Link
          className="text-wrapper-235"
          to="/doperaider-u8212-you-u8212-upgrades2"
        >
          UPGRADES
        </Link>

        <Link
          className="text-wrapper-234"
          to="/doperaider-u8212-you-u8212-upgrades"
        >
          SOCIAL
        </Link>

        <Link
          className="text-wrapper-234"
          to="/doperaider-u8212-you-u8212-trophies"
        >
          TROPHIES
        </Link>
      </div>

      <div className="rectangle-11" />
    </div>
  );
};
