import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

export const DivWrapper = (): JSX.Element => {
  return (
    <div className="div-wrapper">
      <div className="YOUR-STATS-5">
        <div className="stats-3">
          <div className="div-5">
            <div className="text-wrapper-53">$120.64</div>
          </div>

          <div className="respect-3">
            <div className="icon-19" />

            <div className="text-wrapper-53">100</div>
          </div>

          <div className="coke-4">
            <img className="icon-20" alt="Icon" src="/img/icon-57.png" />

            <div className="text-wrapper-53">10</div>
          </div>

          <div className="weed-3">
            <img className="icon-21" alt="Icon" src="/img/icon-58.png" />

            <div className="text-wrapper-53">20</div>
          </div>

          <div className="div-5">
            <div className="icon-22" />

            <p className="element-3">
              <span className="text-wrapper-54">30</span>

              <span className="text-wrapper-55">/70</span>
            </p>
          </div>
        </div>

        <div className="NOTIFICAITONS-3">
          <div className="overlap-group-7">
            <div className="notif-icon-5">
              <div className="layer-7">
                <img
                  className="xt-h-fgl-3"
                  alt="Xt h fgl"
                  src="/img/xthfgl-6.png"
                />
              </div>
            </div>

            <div className="notif-number-3">
              <div className="text-wrapper-56">2</div>
            </div>
          </div>
        </div>
      </div>

      <div className="NAV-TABS-2">
        <div className="nav-wrapper">
          <div className="nav-2">
            <Link className="div-6" to="/you/inventory">
              <div className="text-wrapper-57">YOU</div>

              <img className="icon-23" alt="Icon" src="/img/icon-25.svg" />
            </Link>

            <Link className="div-6" to="/you/market">
              <div className="text-wrapper-58">MARKET</div>

              <div className="icon-24">
                <img className="layer-8" alt="Layer" src="/img/layer-1.svg" />
              </div>
            </Link>

            <Link className="PRODUCE" to="/you/production">
              <div className="text-wrapper-59">PRODUCE</div>

              <div className="icon-25">
                <img className="layer-9" alt="Layer" src="/img/layer-1-9.svg" />
              </div>
            </Link>

            <Link className="div-6" to="/you/map">
              <div className="text-wrapper-60">MAP</div>

              <img className="icon-23" alt="Icon" src="/img/icon-26.svg" />
            </Link>

            <div className="RAID-2">
              <div className="text-wrapper-61">RAID</div>

              <img className="icon-26" alt="Icon" src="/img/icon-27.svg" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
