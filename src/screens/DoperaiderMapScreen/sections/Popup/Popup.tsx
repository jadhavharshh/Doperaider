import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

export const Popup = (): JSX.Element => {
  return (
    <div className="POPUP">
      <div className="overlap">
        <div className="BOX">
          <div className="overlap-2">
            <div className="union-wrapper">
              <img className="union" alt="Union" src="/img/union.svg" />
            </div>

            <img
              className="mask-group"
              alt="Mask group"
              src="/img/mask-group.png"
            />

            <div className="POPULATION">
              <div className="overlap-group-2">
                <div className="text-wrapper-4">POPULATION:</div>

                <div className="frame-2">
                  <div className="layer-2" />

                  <div className="text-wrapper-5">12k</div>
                </div>

                <div className="profile-pic">
                  <img
                    className="telegram-peer-photo"
                    alt="Telegram peer photo"
                    src="/img/telegram-peer-photo-size-4-2140046577575765933-1-0-0-9.png"
                  />
                </div>
              </div>
            </div>

            <div className="trade">
              <div className="text-wrapper-6">TRAVEL $0.25</div>
            </div>

            <div className="trade-2">
              <div className="text-wrapper-6">FAST TRAVEL $1.00</div>
            </div>

            <div className="MARKET-PRICES-4">
              <div className="text-wrapper-7">ITEM</div>

              <div className="text-wrapper-8">BUY</div>

              <div className="text-wrapper-9">SELL</div>

              <img className="line" alt="Line" src="/img/line-1.svg" />

              <div className="COKE">
                <div className="text-wrapper-10">$6.66</div>

                <div className="text-wrapper-11">$6.33</div>

                <div className="frame-3">
                  <div className="vector-wrapper">
                    <img
                      className="vector"
                      alt="Vector"
                      src="/img/vector-7.svg"
                    />
                  </div>

                  <div className="text-wrapper-12">COKE</div>
                </div>
              </div>

              <div className="WEED">
                <div className="text-wrapper-13">$3.73</div>

                <div className="text-wrapper-14">$3.54</div>

                <div className="frame-3">
                  <div className="img-wrapper">
                    <img
                      className="vector-2"
                      alt="Vector"
                      src="/img/vector-8.svg"
                    />
                  </div>

                  <div className="text-wrapper-12">WEED</div>
                </div>
              </div>
            </div>

            <p className="p">
              Tucked behind neon-lit noodle shops and incense-filled herbal
              markets, Chinatown is the beating heart of the underground
              narcotics trade. Beneath its vibrant facade lies a dense web of
              hidden backrooms, coded phrases, and cash-only transactions.
            </p>
          </div>
        </div>

        <Link className="notif-icon-2" to="/doperaider-u8212-map">
          <img className="union-2" alt="Union" src="/img/union-4.svg" />
        </Link>

        <div className="title">
          <div className="overlap-group-wrapper">
            <div className="group-wrapper">
              <img className="group-2" alt="Group" src="/img/group-4.png" />
            </div>
          </div>

          <div className="text-wrapper-15">CHINATOWN</div>
        </div>
      </div>
    </div>
  );
};
