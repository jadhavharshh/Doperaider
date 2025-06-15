import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

export const BottomNav1 = (): JSX.Element => {
  return (
    <div className="BOTTOM-NAV-1">
      <div className="YOUR-STATS-7">
        <div className="stats-5">
          <div className="div-8">
            <div className="text-wrapper-92">$120.64</div>
          </div>

          <div className="respect-5">
            <div className="icon-45" />

            <div className="text-wrapper-92">100</div>
          </div>

          <div className="coke-6">
            <img className="icon-46" alt="Icon" src="/img/icon-57.png" />

            <div className="text-wrapper-92">10</div>
          </div>

          <div className="weed-6">
            <img className="icon-47" alt="Icon" src="/img/icon-58.png" />

            <div className="text-wrapper-92">20</div>
          </div>

          <div className="div-8">
            <div className="icon-48" />

            <p className="element-6">
              <span className="text-wrapper-93">30</span>

              <span className="text-wrapper-94">/70</span>
            </p>
          </div>
        </div>

        <div className="NOTIFICAITONS-5">
          <div className="overlap-group-11">
            <div className="notif-icon-7">
              <div className="layer-14">
                <img
                  className="xt-h-fgl-5"
                  alt="Xt h fgl"
                  src="/img/xthfgl-6.png"
                />
              </div>
            </div>

            <div className="notif-number-5">
              <div className="text-wrapper-95">2</div>
            </div>
          </div>
        </div>
      </div>

      <div className="NAV-TABS-4">
        <div className="NAV-3">
          <div className="nav-4">
            <Link className="div-9" to="/you/inventory">
              <div className="text-wrapper-96">YOU</div>

              <img className="icon-49" alt="Icon" src="/img/icon-38.svg" />
            </Link>

            <Link className="MARKET-2" to="/you/market">
              <div className="text-wrapper-97">MARKET</div>

              <div className="icon-50">
                <div className="layer-15">
                  <img className="union-6" alt="Union" src="/img/union-5.svg" />
                </div>
              </div>
            </Link>

            <Link className="div-9" to="/you/production">
              <div className="text-wrapper-98">PRODUCE</div>

              <div className="icon-51">
                <img
                  className="layer-16"
                  alt="Layer"
                  src="/img/layer-1-13.svg"
                />
              </div>
            </Link>

            <Link className="div-9" to="/you/map">
              <div className="text-wrapper-99">MAP</div>

              <img className="icon-49" alt="Icon" src="/img/icon-39.svg" />
            </Link>

            <div className="RAID-4">
              <div className="text-wrapper-100">RAID</div>

              <img className="icon-52" alt="Icon" src="/img/icon-40.svg" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
