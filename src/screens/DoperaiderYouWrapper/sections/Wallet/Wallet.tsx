import React from "react";
import { Link } from "react-router-dom";
import { EditCopy } from "../../../../icons/EditCopy";
import "./style.css";

export const Wallet = (): JSX.Element => {
  return (
    <div className="WALLET">
      <div className="overlap-28">
        <div className="trade-20">
          <img
            className="edit-copy"
            alt="Social icons"
            src="/img/social-icons.svg"
          />

          <div className="text-wrapper-205">SHARE</div>
        </div>

        <Link
          className="text-wrapper-206"
          to="/doperaider-u8212-you-u8212-upgrades"
        >
          INVITE FRIENDS
        </Link>

        <div className="trade-21">
          <EditCopy className="edit-copy" />
          <div className="text-wrapper-207">INVITE LINK</div>
        </div>

        <img
          className="rectangle-10"
          alt="Rectangle"
          src="/img/rectangle-7-1.svg"
        />

        <div className="frame-56">
          <div className="text-wrapper-208">Enter Email</div>

          <div className="trade-22">
            <div className="text-wrapper-209">SEND</div>
          </div>
        </div>
      </div>
    </div>
  );
};
