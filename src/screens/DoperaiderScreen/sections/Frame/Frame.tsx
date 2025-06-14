import React from "react";
import "./style.css";

export const Frame = (): JSX.Element => {
  return (
    <div className="frame">
      <div className="capacity">
        <div className="icon-44" />

        <p className="element-5">
          <span className="text-wrapper-89">70</span>

          <span className="text-wrapper-90">/70</span>
        </p>
      </div>

      <div className="div-7">
        <img
          className="warning-info"
          alt="Warning info"
          src="/img/warning-info.svg"
        />

        <p className="text-wrapper-91">
          YOUR MAX YIELD WILL BE LIMITED TO 15 DUE TO CARRY SIZE
        </p>
      </div>
    </div>
  );
};
