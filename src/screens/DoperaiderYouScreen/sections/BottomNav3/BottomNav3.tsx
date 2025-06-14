import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

export const BottomNav3 = (): JSX.Element => {
  return (
    <div className="BOTTOM-NAV-3">
      <div className="NAV-TABS-6">
        <div className="NAV-5">
          <div className="nav-6">
            <Link className="YOU-2" to="/doperaider-u8212-you-u8212-inventory">
              <div className="text-wrapper-172">YOU</div>

              <div className="icon-76" />
            </Link>

            <Link className="div-15" to="/doperaider-u8212-market">
              <div className="text-wrapper-173">MARKET</div>

              <div className="icon-77">
                <img className="layer-23" alt="Layer" src="/img/layer-1.svg" />
              </div>
            </Link>

            <Link className="div-15" to="/doperaider-u8212-production">
              <div className="text-wrapper-174">PRODUCE</div>

              <div className="icon-78">
                <img
                  className="layer-24"
                  alt="Layer"
                  src="/img/layer-1-19.svg"
                />
              </div>
            </Link>

            <Link className="div-15" to="/doperaider-u8212-map">
              <div className="text-wrapper-175">MAP</div>

              <img className="icon-79" alt="Icon" src="/img/icon-46.svg" />
            </Link>

            <div className="RAID-6">
              <div className="text-wrapper-176">RAID</div>

              <img className="icon-80" alt="Icon" src="/img/icon-47.svg" />
            </div>
          </div>
        </div>
      </div>

      <div className="YOUR-STATS-9">
        <div className="stats-7">
          <div className="div-16">
            <div className="text-wrapper-177">$120.64</div>
          </div>

          <div className="respect-8">
            <div className="icon-81" />

            <div className="text-wrapper-177">100</div>
          </div>

          <div className="coke-9">
            <img className="icon-82" alt="Icon" src="/img/icon-57.png" />

            <div className="text-wrapper-177">10</div>
          </div>

          <div className="weed-11">
            <img className="icon-83" alt="Icon" src="/img/icon-58.png" />

            <div className="text-wrapper-177">20</div>
          </div>

          <div className="div-16">
            <div className="icon-84" />

            <p className="element-10">
              <span className="text-wrapper-178">30</span>

              <span className="text-wrapper-179">/70</span>
            </p>
          </div>
        </div>

        <div className="NOTIFICAITONS-7">
          <div className="overlap-group-21">
            <div className="notif-icon-9">
              <div className="layer-25">
                <img
                  className="xt-h-fgl-7"
                  alt="Xt h fgl"
                  src="/img/xthfgl-10.png"
                />
              </div>
            </div>

            <div className="notif-number-7">
              <div className="text-wrapper-180">2</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
