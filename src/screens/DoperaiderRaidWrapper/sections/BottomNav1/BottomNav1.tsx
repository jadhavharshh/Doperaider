import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

export const BottomNav1 = (): JSX.Element => {
  return (
    <div className="BOTTOM-NAV-1">
      <div className="YOUR-STATS-5">
        <div className="stats-6">
          <div className="div-9">
            <div className="text-wrapper-94">$120.64</div>
          </div>

          <div className="respect-6">
            <div className="icon-36" />

            <div className="text-wrapper-94">100</div>
          </div>

          <div className="coke-6">
            <img className="icon-37" alt="Icon" src="/img/icon-30.png" />

            <div className="text-wrapper-94">10</div>
          </div>

          <div className="weed-8">
            <img className="icon-38" alt="Icon" src="/img/icon-31.png" />

            <div className="text-wrapper-94">20</div>
          </div>

          <div className="div-9">
            <div className="icon-39" />

            <p className="element-6">
              <span className="text-wrapper-95">30</span>

              <span className="text-wrapper-96">/70</span>
            </p>
          </div>
        </div>

        <div className="NOTIFICAITONS-4">
          <div className="overlap-group-19">
            <div className="notif-icon-4">
              <div className="layer-10">
                <img
                  className="xt-h-fgl-4"
                  alt="Xt h fgl"
                  src="/img/xthfgl-6.png"
                />
              </div>
            </div>

            <div className="notif-number-4">
              <div className="text-wrapper-97">2</div>
            </div>
          </div>
        </div>
      </div>

      <div className="NAV-TABS-3">
        <div className="NAV-3">
          <div className="nav-4">
            <div className="div-10">
              <div className="text-wrapper-98">YOU</div>

              <img className="icon-40" alt="Icon" src="/img/icon-21.svg" />
            </div>

            <div className="div-10">
              <div className="text-wrapper-99">MARKET</div>

              <div className="icon-41">
                <img
                  className="layer-11"
                  alt="Layer"
                  src="/img/layer-1-17.svg"
                />
              </div>
            </div>

            <div className="div-10">
              <div className="text-wrapper-100">PRODUCE</div>

              <div className="icon-42">
                <img
                  className="layer-12"
                  alt="Layer"
                  src="/img/layer-1-12.svg"
                />
              </div>
            </div>

            <div className="div-10">
              <div className="text-wrapper-101">MAP</div>

              <img className="icon-40" alt="Icon" src="/img/icon-22.svg" />
            </div>

            <Link className="RAID-4" to="/doperaider-u8212-raid">
              <div className="text-wrapper-102">RAID</div>

              <img className="icon-43" alt="Icon" src="/img/icon-23.svg" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
