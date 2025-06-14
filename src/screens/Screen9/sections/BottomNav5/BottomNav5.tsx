import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

export const BottomNav5 = (): JSX.Element => {
  return (
    <div className="BOTTOM-NAV-5">
      <div className="YOUR-STATS-11">
        <div className="stats-10">
          <div className="div-21">
            <div className="text-wrapper-225">$120.64</div>
          </div>

          <div className="respect-11">
            <div className="icon-100" />

            <div className="text-wrapper-225">100</div>
          </div>

          <div className="coke-12">
            <img className="icon-101" alt="Icon" src="/img/icon-57.png" />

            <div className="text-wrapper-225">10</div>
          </div>

          <div className="weed-14">
            <img className="icon-102" alt="Icon" src="/img/icon-58.png" />

            <div className="text-wrapper-225">20</div>
          </div>

          <div className="div-21">
            <div className="icon-103" />

            <p className="element-14">
              <span className="text-wrapper-226">30</span>

              <span className="text-wrapper-227">/70</span>
            </p>
          </div>
        </div>

        <div className="NOTIFICAITONS-9">
          <div className="overlap-group-33">
            <div className="notif-icon-11">
              <div className="layer-30">
                <img
                  className="xt-h-fgl-9"
                  alt="Xt h fgl"
                  src="/img/xthfgl-10.png"
                />
              </div>
            </div>

            <div className="notif-number-9">
              <div className="text-wrapper-228">2</div>
            </div>
          </div>
        </div>
      </div>

      <div className="NAV-TABS-8">
        <div className="NAV-7">
          <div className="nav-8">
            <Link className="YOU-4" to="/doperaider-u8212-you-u8212-inventory">
              <div className="text-wrapper-229">YOU</div>

              <div className="icon-104" />
            </Link>

            <Link className="div-22" to="/doperaider-u8212-market">
              <div className="text-wrapper-230">MARKET</div>

              <div className="icon-105">
                <img className="layer-31" alt="Layer" src="/img/layer-1.svg" />
              </div>
            </Link>

            <Link className="div-22" to="/doperaider-u8212-production">
              <div className="text-wrapper-231">PRODUCE</div>

              <div className="icon-106">
                <img
                  className="layer-32"
                  alt="Layer"
                  src="/img/layer-1-24.svg"
                />
              </div>
            </Link>

            <Link className="div-22" to="/doperaider-u8212-map">
              <div className="text-wrapper-232">MAP</div>

              <img className="icon-107" alt="Icon" src="/img/icon-60.svg" />
            </Link>

            <div className="RAID-8">
              <div className="text-wrapper-233">RAID</div>

              <img className="icon-108" alt="Icon" src="/img/icon-61.svg" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
