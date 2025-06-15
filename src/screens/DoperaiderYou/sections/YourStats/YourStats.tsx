import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

export const YourStats = (): JSX.Element => {
  return (
    <div className="YOUR-STATS">
      <div className="navbar">
        <Link
          className="text-wrapper-149"
          to="/you/inventory"
        >
          INVENTORY
        </Link>

        <Link
          className="text-wrapper-149"
          to="/doperaider-u8212-you-u8212-upgrades2"
        >
          UPGRADES
        </Link>

        <Link
          className="text-wrapper-149"
          to="/doperaider-u8212-you-u8212-upgrades"
        >
          SOCIAL
        </Link>

        <Link
          className="text-wrapper-150"
          to="/doperaider-u8212-you-u8212-trophies"
        >
          TROPHIES
        </Link>
      </div>

      <div className="rectangle-6" />
    </div>
  );
};
