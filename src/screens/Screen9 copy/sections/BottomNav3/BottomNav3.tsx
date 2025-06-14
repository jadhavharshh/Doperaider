import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

export const BottomNav3 = (): JSX.Element => {
  return (
    <div className="BOTTOM-NAV-3">
      <div className="YOUR-STATS-7">
        <div className="stats-10">
          <div className="div-13">
            <div className="text-wrapper-129">$120.64</div>
          </div>

          <div className="respect-10">
            <div className="icon-56" />

            <div className="text-wrapper-129">100</div>
          </div>

          <div className="coke-10">
            <img className="icon-57" alt="Icon" src="/img/icon-30.png" />

            <div className="text-wrapper-129">10</div>
          </div>

          <div className="weed-12">
            <img className="icon-58" alt="Icon" src="/img/icon-31.png" />

            <div className="text-wrapper-129">20</div>
          </div>

          <div className="div-13">
            <div className="icon-59" />

            <p className="element-8">
              <span className="text-wrapper-130">30</span>

              <span className="text-wrapper-131">/70</span>
            </p>
          </div>
        </div>

        <div className="NOTIFICAITONS-6">
          <div className="overlap-group-23">
            <div className="notif-icon-6">
              <div className="layer-16">
                <img
                  className="xt-h-fgl-6"
                  alt="Xt h fgl"
                  src="/img/xthfgl-6.png"
                />
              </div>
            </div>

            <div className="notif-number-6">
              <div className="text-wrapper-132">2</div>
            </div>
          </div>
        </div>
      </div>

      <div className="NAV-TABS-5">
        <div className="NAV-5">
          <div className="nav-6">
            <div className="div-14">
              <div className="text-wrapper-133">YOU</div>

              <img className="icon-60" alt="Icon" src="/img/icon-33.svg" />
            </div>

            <div className="div-14">
              <div className="text-wrapper-134">MARKET</div>

              <div className="icon-61">
                <img
                  className="layer-17"
                  alt="Layer"
                  src="/img/layer-1-17.svg"
                />
              </div>
            </div>

            <div className="div-14">
              <div className="text-wrapper-135">PRODUCE</div>

              <div className="icon-62">
                <img
                  className="layer-18"
                  alt="Layer"
                  src="/img/layer-1-18.svg"
                />
              </div>
            </div>

            <div className="div-14">
              <div className="text-wrapper-136">MAP</div>

              <img className="icon-60" alt="Icon" src="/img/icon-34.svg" />
            </div>

            <Link className="RAID-6" to="/doperaider-u8212-raid">
              <div className="text-wrapper-137">RAID</div>

              <img className="icon-63" alt="Icon" src="/img/icon-35.svg" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
