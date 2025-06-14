import React from "react";
import { NavTabs } from "../../../../components/NavTabs";
import "./style.css";

export const BottomNav = (): JSX.Element => {
  return (
    <div className="BOTTOM-NAV">
      <div className="YOUR-STATS-3">
        <div className="stats">
          <div className="div-2">
            <div className="text-wrapper">$120.64</div>
          </div>

          <div className="respect">
            <div className="icon" />

            <div className="text-wrapper">100</div>
          </div>

          <div className="coke">
            <img className="img" alt="Icon" src="/img/icon-57.png" />

            <div className="text-wrapper">10</div>
          </div>

          <div className="weed">
            <img className="icon-2" alt="Icon" src="/img/icon-58.png" />

            <div className="text-wrapper">20</div>
          </div>

          <div className="div-2">
            <div className="icon-3" />

            <p className="element">
              <span className="span">30</span>

              <span className="text-wrapper-2">/70</span>
            </p>
          </div>
        </div>

        <div className="NOTIFICAITONS">
          <div className="overlap-group">
            <div className="notif-icon">
              <div className="layer">
                <img
                  className="xt-h-fgl"
                  alt="Xt h fgl"
                  src="/img/xthfgl-6.png"
                />
              </div>
            </div>

            <div className="notif-number">
              <div className="text-wrapper-3">2</div>
            </div>
          </div>
        </div>
      </div>

      <NavTabs
        className="NAV-TABS-instance"
        icon="/img/icon-13.svg"
        icon1="/img/icon-15.svg"
        img="/img/icon-14.svg"
        layer="/img/layer-1-5.svg"
        property1="MAP"
      />
    </div>
  );
};
