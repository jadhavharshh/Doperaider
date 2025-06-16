import React from "react";
import { NavTabs } from "../../../../components/NavTabs";
import "./style.css";

export const BottomNavWrapper = (): JSX.Element => {
  return (
    <div className="BOTTOM-NAV-wrapper">
      <div className="YOUR-STATS-2">
        <div className="stats-4">
          <div className="div-3">
            <div className="text-wrapper-18">$120.64</div>
          </div>

          <div className="respect-4">
            <div className="icon-4" />

            <div className="text-wrapper-18">100</div>
          </div>

          <div className="coke-4">
            <img className="icon-5" alt="Icon" src="/img/icon-16.png" />

            <div className="text-wrapper-18">10</div>
          </div>

          <div className="weed-4">
            <img className="icon-6" alt="Icon" src="/img/icon-17.png" />

            <div className="text-wrapper-18">20</div>
          </div>

          <div className="div-3">
            <div className="icon-7" />

            <p className="p">
              <span className="text-wrapper-19">30</span>

              <span className="text-wrapper-20">/70</span>
            </p>
          </div>
        </div>

        <div className="NOTIFICAITONS-2">
          <div className="overlap-group-5">
            <div className="layer-wrapper">
              <div className="xt-h-fgl-wrapper">
                <img
                  className="xt-h-fgl-2"
                  alt="Xt h fgl"
                  src="/img/xthfgl-3.png"
                />
              </div>
            </div>

            <div className="notif-number-2">
              <div className="text-wrapper-21">2</div>
            </div>
          </div>
        </div>
      </div>

      <NavTabs
        className="NAV-TABS-2"
        icon="/img/icon-13.svg"
        icon1="/img/icon-15.svg"
        img="/img/icon-14.svg"
        layer="/img/layer-1-9.svg"
        property1="RAID"
      />
    </div>
  );
};
