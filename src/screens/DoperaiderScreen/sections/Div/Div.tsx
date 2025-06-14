import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

export const Div = (): JSX.Element => {
  return (
    <div className="div">
      <div className="YOUR-STATS-6">
        <div className="stats-4">
          <div className="class">
            <div className="text-wrapper-70">$120.64</div>
          </div>

          <div className="respect-4">
            <div className="icon-32" />

            <div className="text-wrapper-70">100</div>
          </div>

          <div className="coke-5">
            <img className="icon-33" alt="Icon" src="/img/icon-57.png" />

            <div className="text-wrapper-70">10</div>
          </div>

          <div className="weed-5">
            <img className="icon-34" alt="Icon" src="/img/icon-58.png" />

            <div className="text-wrapper-70">20</div>
          </div>

          <div className="class">
            <div className="icon-35" />

            <p className="element-4">
              <span className="text-wrapper-71">30</span>

              <span className="text-wrapper-72">/70</span>
            </p>
          </div>
        </div>

        <div className="NOTIFICAITONS-4">
          <div className="overlap-group-10">
            <div className="notif-icon-6">
              <div className="layer-10">
                <img
                  className="xt-h-fgl-4"
                  alt="Xt h fgl"
                  src="/img/xthfgl-6.png"
                />
              </div>
            </div>

            <div className="notif-number-4">
              <div className="text-wrapper-73">2</div>
            </div>
          </div>
        </div>
      </div>

      <div className="NAV-TABS-3">
        <div className="NAV-2">
          <div className="nav-3">
            <Link
              className="class-2"
              to="/doperaider-u8212-you-u8212-inventory"
            >
              <div className="text-wrapper-74">YOU</div>

              <img className="icon-36" alt="Icon" src="/img/icon-31.svg" />
            </Link>

            <Link className="class-2" to="/doperaider-u8212-market">
              <div className="text-wrapper-75">MARKET</div>

              <div className="icon-37">
                <img className="layer-11" alt="Layer" src="/img/layer-1.svg" />
              </div>
            </Link>

            <Link className="PRODUCE-2" to="/doperaider-u8212-production">
              <div className="text-wrapper-76">PRODUCE</div>

              <div className="icon-38">
                <img
                  className="layer-12"
                  alt="Layer"
                  src="/img/layer-1-11.svg"
                />
              </div>
            </Link>

            <Link className="class-2" to="/doperaider-u8212-map">
              <div className="text-wrapper-77">MAP</div>

              <img className="icon-36" alt="Icon" src="/img/icon-32.svg" />
            </Link>

            <div className="RAID-3">
              <div className="text-wrapper-78">RAID</div>

              <img className="icon-39" alt="Icon" src="/img/icon-33.svg" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
