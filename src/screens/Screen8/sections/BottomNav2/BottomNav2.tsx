import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

export const BottomNav2 = (): JSX.Element => {
  return (
    <div className="BOTTOM-NAV-2">
      <div className="YOUR-STATS-6">
        <div className="stats-8">
          <div className="div-11">
            <div className="text-wrapper-115">$120.64</div>
          </div>

          <div className="respect-8">
            <div className="icon-46" />

            <div className="text-wrapper-115">100</div>
          </div>

          <div className="coke-8">
            <img className="icon-47" alt="Icon" src="/img/icon-30.png" />

            <div className="text-wrapper-115">10</div>
          </div>

          <div className="weed-10">
            <img className="icon-48" alt="Icon" src="/img/icon-31.png" />

            <div className="text-wrapper-115">20</div>
          </div>

          <div className="div-11">
            <div className="icon-49" />

            <p className="element-7">
              <span className="text-wrapper-116">30</span>

              <span className="text-wrapper-117">/70</span>
            </p>
          </div>
        </div>

        <div className="NOTIFICAITONS-5">
          <div className="overlap-group-21">
            <div className="notif-icon-5">
              <div className="layer-13">
                <img
                  className="xt-h-fgl-5"
                  alt="Xt h fgl"
                  src="/img/xthfgl-6.png"
                />
              </div>
            </div>

            <div className="notif-number-5">
              <div className="text-wrapper-118">2</div>
            </div>
          </div>
        </div>
      </div>

      <div className="NAV-TABS-4">
        <div className="NAV-4">
          <div className="nav-5">
            <div className="div-12">
              <div className="text-wrapper-119">YOU</div>

              <img className="icon-50" alt="Icon" src="/img/icon-27.svg" />
            </div>

            <div className="div-12">
              <div className="text-wrapper-120">MARKET</div>

              <div className="icon-51">
                <img
                  className="layer-14"
                  alt="Layer"
                  src="/img/layer-1-17.svg"
                />
              </div>
            </div>

            <div className="div-12">
              <div className="text-wrapper-121">PRODUCE</div>

              <div className="icon-52">
                <img
                  className="layer-15"
                  alt="Layer"
                  src="/img/layer-1-15.svg"
                />
              </div>
            </div>

            <div className="div-12">
              <div className="text-wrapper-122">MAP</div>

              <img className="icon-50" alt="Icon" src="/img/icon-28.svg" />
            </div>

            <Link className="RAID-5" to="/doperaider-u8212-raid">
              <div className="text-wrapper-123">RAID</div>

              <img className="icon-53" alt="Icon" src="/img/icon-29.svg" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
