import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

export const Notifications = (): JSX.Element => {
  return (
    <div className="NOTIFICATIONS">
      <div className="overlap-4">
        <div className="NOTIFICATION-BOX">
          <div className="overlap-5">
            <div className="frame-4">
              <img className="union-4" alt="Union" src="/img/union-3.svg" />
            </div>

            <div className="notif">
              <div className="text-wrapper-42">SPEND</div>

              <div className="text-wrapper-43">79.92</div>

              <div className="text-wrapper-44">4,000.21 USD</div>

              <div className="text-wrapper-45">$79.92</div>

              <div className="USD">
                <div className="icon-17">
                  <div className="overlap-group-6">
                    <div className="text-wrapper-46">$</div>
                  </div>
                </div>

                <div className="text-wrapper-47">USD</div>
              </div>

              <div className="music-tab">
                <div className="text-wrapper-48">MAX</div>
              </div>
            </div>

            <div className="notif-2">
              <div className="text-wrapper-42">RECEIVE</div>

              <div className="text-wrapper-43">12</div>

              <div className="text-wrapper-49">20</div>

              <div className="text-wrapper-50">$80.11</div>
            </div>

            <div className="trade-8">
              <div className="text-wrapper-51">CONFIRM TRADE</div>
            </div>

            <div className="coke-3">
              <div className="icon-18">
                <img
                  className="vector-7"
                  alt="Vector"
                  src="/img/vector-16.svg"
                />
              </div>

              <div className="text-wrapper-47">COKE</div>
            </div>

            <div className="notif-icon-4">
              <div className="overlap-6">
                <div className="layer-6" />

                <img
                  className="vector-8"
                  alt="Vector"
                  src="/img/vector-17.svg"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="title-2">
          <div className="text-wrapper-52">TRADE</div>
        </div>

        <Link className="CLOSE-ICON" to="/doperaider-u8212-market">
          <img className="union-5" alt="Union" src="/img/union-4.svg" />
        </Link>
      </div>
    </div>
  );
};
