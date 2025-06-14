import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

export const DoperaiderRaidScreen = (): JSX.Element => {
  return (
    <div className="doperaider-RAID-screen" data-model-id="412:4883">
      <div className="overlap-51">
        <div className="BG-3">
          <div className="overlap-group-29">
            <img className="image-2" alt="Image" src="/img/image-1.png" />

            <div className="rectangle-17" />

            <div className="ellipse-35" />

            <div className="ellipse-36" />

            <div className="ellipse-37" />

            <div className="ellipse-38" />

            <div className="ellipse-39" />
          </div>
        </div>

        <div className="WIN-STATS-6">
          <div className="overlap-52">
            <div className="raids-6">
              <div className="overlap-group-30">
                <div className="text-wrapper-153">RAIDS</div>

                <div className="text-wrapper-154">5</div>

                <div className="frame-73">
                  <img className="union-14" alt="Union" src="/img/union.svg" />
                </div>
              </div>
            </div>

            <div className="losses-6">
              <div className="overlap-53">
                <div className="text-wrapper-155">LOSSES</div>

                <div className="text-wrapper-156">2</div>

                <div className="frame-74">
                  <img
                    className="union-15"
                    alt="Union"
                    src="/img/union-1.svg"
                  />
                </div>
              </div>
            </div>

            <div className="wins-6">
              <div className="overlap-54">
                <div className="frame-73">
                  <img
                    className="union-16"
                    alt="Union"
                    src="/img/union-2.svg"
                  />
                </div>

                <div className="ellipse-40" />

                <div className="text-wrapper-157">WINS</div>

                <div className="text-wrapper-158">3</div>
              </div>
            </div>
          </div>
        </div>

        <div className="PROFILE-PIC-NAME-3">
          <div className="overlap-55">
            <div className="profile-pic-29">
              <img
                className="telegram-peer-photo-5"
                alt="Telegram peer photo"
                src="/img/telegram-peer-photo-size-4-2140046577575765933-1-0-0-2.png"
              />
            </div>

            <img
              className="name-tag-3"
              alt="Name tag"
              src="/img/name-tag.svg"
            />
          </div>
        </div>

        <div className="frame-75">
          <img
            className="ellipse-41"
            alt="Ellipse"
            src="/img/ellipse-15-1.svg"
          />

          <div className="text-wrapper-159">TONY MONTNA</div>
        </div>

        <div className="frame-76">
          <div className="respect-13">
            <div className="icon-76" />

            <div className="text-wrapper-160">100</div>
          </div>

          <div className="coke-13">
            <div className="icon-77" />

            <div className="text-wrapper-160">20</div>
          </div>

          <div className="weed-15">
            <div className="icon-78" />

            <div className="text-wrapper-160">50</div>
          </div>
        </div>
      </div>

      <div className="CHOOSE-WEAPON">
        <div className="overlap-56">
          <div className="WEAPON-BOX">
            <div className="overlap-group-31">
              <div className="frame-77">
                <img className="union-17" alt="Union" src="/img/union-3.svg" />
              </div>

              <div className="rectangle-18" />

              <div className="rectangle-19" />
            </div>
          </div>

          <div className="title">
            <div className="text-wrapper-161">CHOOSE YOUR WEAPON</div>
          </div>

          <div className="WEAPON-3">
            <div className="overlap-57">
              <img
                className="rectangle-20"
                alt="Rectangle"
                src="/img/rectangle-7-2.svg"
              />

              <img
                className="mask-group-5"
                alt="Mask group"
                src="/img/mask-group-4.png"
              />

              <img
                className="pistol-3"
                alt="Pistol"
                src="/img/pistol-1-2.png"
              />
            </div>
          </div>

          <Link
            className="WEAPON-4"
            to="/doperaider-u8212-raid-u8212-active-raid-u8212-win"
          >
            <div className="overlap-58">
              <img
                className="rectangle-20"
                alt="Rectangle"
                src="/img/rectangle-7-3.svg"
              />

              <img
                className="mask-group-5"
                alt="Mask group"
                src="/img/mask-group-4.png"
              />

              <img
                className="pistol-3"
                alt="Pistol"
                src="/img/pistol-1-3.png"
              />
            </div>
          </Link>

          <div className="WEAPON-5">
            <div className="overlap-59">
              <img
                className="rectangle-20"
                alt="Rectangle"
                src="/img/rectangle-7-4.svg"
              />

              <img
                className="mask-group-5"
                alt="Mask group"
                src="/img/mask-group-4.png"
              />

              <img
                className="pistol-3"
                alt="Pistol"
                src="/img/pistol-1-4.png"
              />
            </div>
          </div>

          <div className="frame-78">
            <div className="text-wrapper-162">AUTO-PICKING IN 3 SECS</div>
          </div>
        </div>
      </div>

      <div className="text-wrapper-163">RAIDING...</div>
    </div>
  );
};
