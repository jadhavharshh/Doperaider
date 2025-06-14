import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

export const DoperaiderIntro = (): JSX.Element => {
  return (
    <div className="doperaider-INTRO" data-model-id="2004:1966">
      <div className="overlap-6">
        <div className="BG">
          <div className="overlap-group-5">
            <img className="element-2" alt="Element" src="/img/5-1.png" />

            <div className="rectangle-3" />

            <div className="ellipse-4" />

            <div className="ellipse-5" />

            <div className="ellipse-6" />

            <div className="ellipse-7" />
          </div>
        </div>

        <Link className="trade-3" to="/doperaider-u8212-you-u8212-inventory">
          <div className="text-wrapper-32">PLAY GAME</div>
        </Link>

        <div className="group-3">
          <div className="frame-12">
            <img className="LOGO" alt="Logo" src="/img/logo.svg" />

            <img className="vector-4" alt="Vector" src="/img/vector-2.svg" />
          </div>

          <div className="frame-13">
            <div className="overlap-group-6">
              <div className="text-wrapper-33">Respect has a price...</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
