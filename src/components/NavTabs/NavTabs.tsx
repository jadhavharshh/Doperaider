/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

interface Props {
  property1: "MAP";
  className: any;
  icon: string;
  layer: string;
  img: string;
  icon1: string;
}

export const NavTabs = ({
  property1,
  className,
  icon = "/img/icon.svg",
  layer = "/img/layer-1-1.svg",
  img = "/img/icon-1.svg",
  icon1 = "/img/icon-2.svg",
}: Props): JSX.Element => {
  return (
    <div className={`NAV-TABS ${className}`}>
      <div className="NAV-8">
        <div className="nav-9">
          <Link className="div-23" to="/doperaider-u8212-you-u8212-inventory">
            <div className="text-wrapper-236">YOU</div>

            <img className="icon-109" alt="Icon" src={icon} />
          </Link>

          <Link className="div-23" to="/doperaider-u8212-market">
            <div className="text-wrapper-237">MARKET</div>

            <div className="icon-110">
              <img className="layer-33" alt="Layer" src="/img/layer-1.svg" />
            </div>
          </Link>

          <Link className="div-23" to="/doperaider-u8212-production">
            <div className="text-wrapper-238">PRODUCE</div>

            <div className="icon-111">
              <img className="layer-34" alt="Layer" src={layer} />
            </div>
          </Link>

          <Link className="MAP" to="/doperaider-u8212-map">
            <div className="text-wrapper-239">MAP</div>

            <img className="icon-109" alt="Icon" src={img} />
          </Link>

          <div className="RAID-9">
            <div className="text-wrapper-240">RAID</div>

            <img className="icon-112" alt="Icon" src={icon1} />
          </div>
        </div>
      </div>
    </div>
  );
};

NavTabs.propTypes = {
  property1: PropTypes.oneOf(["MAP"]),
  icon: PropTypes.string,
  layer: PropTypes.string,
  img: PropTypes.string,
  icon1: PropTypes.string,
};
