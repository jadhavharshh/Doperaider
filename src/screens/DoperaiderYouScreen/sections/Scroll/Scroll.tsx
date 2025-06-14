import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

export const Scroll = (): JSX.Element => {
  return (
    <div className="SCROLL">
      <div className="frame-36">
        <div className="SETTINGS">
          <div className="SOUND-CONTROL">
            <div className="div-13">
              <div className="text-wrapper-160">EFFECTS</div>

              <div className="frame-37">
                <div className="text-wrapper-161">ON</div>
              </div>
            </div>

            <Link className="div-13" to="/doperaider-u8212-you-u8212-inventory">
              <div className="text-wrapper-160">VIBRATION</div>

              <div className="frame-38">
                <div className="text-wrapper-161">ON</div>
              </div>
            </Link>
          </div>

          <img
            className="music-tab-2"
            alt="Music tab"
            src="/img/music-tab.svg"
          />
        </div>

        <div className="INVENTORY-BOXES">
          <div className="div-14">
            <div className="respect-7">
              <div className="text-wrapper-162">RESPECT</div>

              <div className="frame-39">
                <div className="element-hga-wrapper">
                  <img
                    className="element-hga"
                    alt="Element hga"
                    src="/img/9athga-8.png"
                  />
                </div>

                <div className="text-wrapper-163">100</div>
              </div>
            </div>

            <div className="coke-8">
              <div className="text-wrapper-164">COKE</div>

              <div className="frame-40">
                <div className="icon-72">
                  <img
                    className="vector-21"
                    alt="Vector"
                    src="/img/vector-34.svg"
                  />
                </div>

                <div className="text-wrapper-163">10</div>
              </div>
            </div>

            <div className="weed-10">
              <div className="text-wrapper-165">WEED</div>

              <div className="frame-40">
                <div className="icon-73">
                  <img
                    className="vector-22"
                    alt="Vector"
                    src="/img/vector-35.svg"
                  />
                </div>

                <div className="text-wrapper-163">20</div>
              </div>
            </div>
          </div>

          <div className="div-14">
            <div className="WEAPON">
              <div className="text-wrapper-166">DR COINS</div>

              <div className="frame-39">
                <div className="subtract-wrapper">
                  <img
                    className="subtract"
                    alt="Subtract"
                    src="/img/subtract-7.svg"
                  />
                </div>

                <div className="text-wrapper-163">100</div>
              </div>
            </div>

            <div className="WEAPON">
              <div className="text-wrapper-166">CHEMICALS</div>

              <div className="frame-39">
                <div className="icon-74">
                  <img
                    className="group-14"
                    alt="Group"
                    src="/img/group-6-2.png"
                  />
                </div>

                <div className="text-wrapper-163">20</div>
              </div>
            </div>

            <div className="WEAPON">
              <div className="text-wrapper-166">SEEDS</div>

              <div className="frame-39">
                <div className="icon-75">
                  <img
                    className="layer-21"
                    alt="Layer"
                    src="/img/layer-1-17.svg"
                  />
                </div>

                <div className="text-wrapper-163">20</div>
              </div>
            </div>
          </div>

          <div className="WALLET-2">
            <div className="overlap-group-19">
              <div className="trade-18">
                <div className="text-wrapper-167">DISCONNECT</div>
              </div>

              <img
                className="rectangle-7"
                alt="Rectangle"
                src="/img/rectangle-7.svg"
              />

              <div className="frame-41">
                <div className="frame-42">
                  <div className="layer-22" />

                  <div className="text-wrapper-164">WALLET:</div>
                </div>

                <div className="text-wrapper-168">0xE5...13</div>
              </div>

              <div className="frame-43">
                <div className="frame-44">
                  <img className="frame-45" alt="Frame" src="/img/frame.svg" />

                  <div className="text-wrapper-169">$120.64</div>
                </div>
              </div>

              <div className="frame-46">
                <div className="text-wrapper-170">Base Sepolia</div>
              </div>
            </div>
          </div>
        </div>

        <div className="AIRDROP">
          <div className="overlap-21">
            <div className="text-wrapper-171">YOU HAVE A AIRDROP!</div>

            <div className="AIRDROP-2">
              <div className="overlap-group-20">
                <img
                  className="mask-group-6"
                  alt="Mask group"
                  src="/img/mask-group-11.png"
                />

                <div className="ellipse-6" />

                <div className="ellipse-7" />

                <img
                  className="airdrop"
                  alt="Airdrop"
                  src="/img/airdrop-1.png"
                />
              </div>
            </div>
          </div>

          <div className="trade-19">
            <div className="text-wrapper-167">CLAIM REWARDS</div>
          </div>
        </div>
      </div>
    </div>
  );
};
