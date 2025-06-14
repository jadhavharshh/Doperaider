import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

export const BottomNavWrapper = (): JSX.Element => {
  return (
    <div className="BOTTOM-NAV-wrapper">
      <div className="YOUR-STATS-4">
        <div className="stats-2">
          <div className="div-3">
            <div className="text-wrapper-27">$120.64</div>
          </div>

          <div className="respect-2">
            <div className="icon-7" />

            <div className="text-wrapper-27">100</div>
          </div>

          <div className="coke-2">
            <img className="icon-8" alt="Icon" src="/img/icon-57.png" />

            <div className="text-wrapper-27">10</div>
          </div>

          <div className="weed-2">
            <img className="icon-9" alt="Icon" src="/img/icon-58.png" />

            <div className="text-wrapper-27">20</div>
          </div>

          <div className="div-3">
            <div className="icon-10" />

            <p className="element-2">
              <span className="text-wrapper-28">30</span>

              <span className="text-wrapper-29">/70</span>
            </p>
          </div>
        </div>

        <div className="NOTIFICAITONS-2">
          <div className="overlap-group-4">
            <div className="notif-icon-3">
              <div className="xt-h-fgl-wrapper">
                <img
                  className="xt-h-fgl-2"
                  alt="Xt h fgl"
                  src="/img/xthfgl-6.png"
                />
              </div>
            </div>

            <div className="notif-number-2">
              <div className="text-wrapper-30">2</div>
            </div>
          </div>
        </div>
      </div>

      <div className="NAV-wrapper">
        <div className="NAV">
          <div className="nav">
            <Link className="div-4" to="/doperaider-u8212-you-u8212-inventory">
              <div className="text-wrapper-31">YOU</div>

              <img className="icon-11" alt="Icon" src="/img/icon-19.svg" />
            </Link>

            <Link className="MARKET" to="/doperaider-u8212-market">
              <div className="text-wrapper-32">MARKET</div>

              <div className="icon-12">
                <div className="layer-4">
                  <img className="union-3" alt="Union" src="/img/union-5.svg" />
                </div>
              </div>
            </Link>

            <Link className="div-4" to="/doperaider-u8212-production">
              <div className="text-wrapper-33">PRODUCE</div>

              <div className="icon-13">
                <img className="layer-5" alt="Layer" src="/img/layer-1-7.svg" />
              </div>
            </Link>

            <Link className="div-4" to="/doperaider-u8212-map">
              <div className="text-wrapper-34">MAP</div>

              <img className="icon-11" alt="Icon" src="/img/icon-20.svg" />
            </Link>

            <div className="RAID">
              <div className="text-wrapper-35">RAID</div>

              <img className="icon-14" alt="Icon" src="/img/icon-21.svg" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
