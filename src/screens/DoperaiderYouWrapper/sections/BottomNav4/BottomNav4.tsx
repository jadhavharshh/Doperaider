import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

export const BottomNav4 = (): JSX.Element => {
  return (
    <div className="BOTTOM-NAV-4">
      <div className="YOUR-STATS-10">
        <div className="stats-9">
          <div className="div-17">
            <div className="text-wrapper-194">$120.64</div>
          </div>

          <div className="respect-10">
            <div className="icon-85" />

            <div className="text-wrapper-194">100</div>
          </div>

          <div className="coke-11">
            <img className="icon-86" alt="Icon" src="/img/icon-57.png" />

            <div className="text-wrapper-194">10</div>
          </div>

          <div className="weed-13">
            <img className="icon-87" alt="Icon" src="/img/icon-58.png" />

            <div className="text-wrapper-194">20</div>
          </div>

          <div className="div-17">
            <div className="icon-88" />

            <p className="element-12">
              <span className="text-wrapper-195">30</span>

              <span className="text-wrapper-196">/70</span>
            </p>
          </div>
        </div>

        <div className="NOTIFICAITONS-8">
          <div className="overlap-group-25">
            <div className="notif-icon-10">
              <div className="layer-26">
                <img
                  className="xt-h-fgl-8"
                  alt="Xt h fgl"
                  src="/img/xthfgl-10.png"
                />
              </div>
            </div>

            <div className="notif-number-8">
              <div className="text-wrapper-197">2</div>
            </div>
          </div>
        </div>
      </div>

      <div className="NAV-TABS-7">
        <div className="NAV-6">
          <div className="nav-7">
            <Link className="YOU-3" to="/you/inventory">
              <div className="text-wrapper-198">YOU</div>

              <div className="icon-89" />
            </Link>

            <Link className="div-18" to="/you/market">
              <div className="text-wrapper-199">MARKET</div>

              <div className="icon-90">
                <img className="layer-27" alt="Layer" src="/img/layer-1.svg" />
              </div>
            </Link>

            <Link className="div-18" to="/you/production">
              <div className="text-wrapper-200">PRODUCE</div>

              <div className="icon-91">
                <img
                  className="layer-28"
                  alt="Layer"
                  src="/img/layer-1-21.svg"
                />
              </div>
            </Link>

            <Link className="div-18" to="/you/map">
              <div className="text-wrapper-201">MAP</div>

              <img className="icon-92" alt="Icon" src="/img/icon-54.svg" />
            </Link>

            <div className="RAID-7">
              <div className="text-wrapper-202">RAID</div>

              <img className="icon-93" alt="Icon" src="/img/icon-55.svg" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
