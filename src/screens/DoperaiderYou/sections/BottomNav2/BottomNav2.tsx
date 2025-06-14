import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

export const BottomNav2 = (): JSX.Element => {
  return (
    <div className="BOTTOM-NAV-2">
      <div className="YOUR-STATS-8">
        <div className="stats-6">
          <div className="div-11">
            <div className="text-wrapper-140">$120.64</div>
          </div>

          <div className="respect-6">
            <div className="icon-63" />

            <div className="text-wrapper-140">100</div>
          </div>

          <div className="coke-7">
            <img className="icon-64" alt="Icon" src="/img/icon-57.png" />

            <div className="text-wrapper-140">10</div>
          </div>

          <div className="weed-9">
            <img className="icon-65" alt="Icon" src="/img/icon-58.png" />

            <div className="text-wrapper-140">20</div>
          </div>

          <div className="div-11">
            <div className="icon-66" />

            <p className="element-8">
              <span className="text-wrapper-141">30</span>

              <span className="text-wrapper-142">/70</span>
            </p>
          </div>
        </div>

        <div className="NOTIFICAITONS-6">
          <div className="overlap-group-16">
            <div className="notif-icon-8">
              <div className="layer-18">
                <img
                  className="xt-h-fgl-6"
                  alt="Xt h fgl"
                  src="/img/xthfgl-10.png"
                />
              </div>
            </div>

            <div className="notif-number-6">
              <div className="text-wrapper-143">2</div>
            </div>
          </div>
        </div>
      </div>

      <div className="NAV-TABS-5">
        <div className="NAV-4">
          <div className="nav-5">
            <Link className="YOU" to="/doperaider-u8212-you-u8212-inventory">
              <div className="text-wrapper-144">YOU</div>

              <div className="icon-67" />
            </Link>

            <Link className="div-12" to="/doperaider-u8212-market">
              <div className="text-wrapper-145">MARKET</div>

              <div className="icon-68">
                <img className="layer-19" alt="Layer" src="/img/layer-1.svg" />
              </div>
            </Link>

            <Link className="div-12" to="/doperaider-u8212-production">
              <div className="text-wrapper-146">PRODUCE</div>

              <div className="icon-69">
                <img
                  className="layer-20"
                  alt="Layer"
                  src="/img/layer-1-16.svg"
                />
              </div>
            </Link>

            <Link className="div-12" to="/doperaider-u8212-map">
              <div className="text-wrapper-147">MAP</div>

              <img className="icon-70" alt="Icon" src="/img/icon-44.svg" />
            </Link>

            <div className="RAID-5">
              <div className="text-wrapper-148">RAID</div>

              <img className="icon-71" alt="Icon" src="/img/icon-45.svg" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
