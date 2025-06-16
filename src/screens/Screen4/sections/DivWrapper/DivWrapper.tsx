import React from "react";
import { NavTabs } from "../../../../components/NavTabs";
import "./style.css";

export const DivWrapper = (): JSX.Element => {
  return (
    <div className="div-wrapper">
      <div className="YOUR-STATS-3">
        <div className="stats-6">
          <div className="div-4">
            <div className="text-wrapper-34">$120.64</div>
          </div>

          <div className="respect-6">
            <div className="icon-10" />

            <div className="text-wrapper-34">100</div>
          </div>

          <div className="coke-6">
            <img className="icon-11" alt="Icon" src="/img/icon-16.png" />

            <div className="text-wrapper-34">10</div>
          </div>

          <div className="weed-6">
            <img className="icon-12" alt="Icon" src="/img/icon-17.png" />

            <div className="text-wrapper-34">20</div>
          </div>

          <div className="div-4">
            <div className="icon-13" />

            <p className="element-2">
              <span className="text-wrapper-35">30</span>

              <span className="text-wrapper-36">/70</span>
            </p>
          </div>
        </div>

        <div className="NOTIFICAITONS-3">
          <div className="overlap-group-7">
            <div className="notif-icon-2">
              <div className="layer-2">
                <img
                  className="xt-h-fgl-3"
                  alt="Xt h fgl"
                  src="/img/xthfgl-3.png"
                />
              </div>
            </div>

            <div className="notif-number-3">
              <div className="text-wrapper-37">2</div>
            </div>
          </div>
        </div>
      </div>

      <NavTabs
        className="NAV-TABS-3"
        icon="/img/icon-19.svg"
        icon1="/img/icon-21.svg"
        img="/img/icon-20.svg"
        layer="/img/layer-1-12.svg"
        property1="RAID"
      />
    </div>
  );
};
