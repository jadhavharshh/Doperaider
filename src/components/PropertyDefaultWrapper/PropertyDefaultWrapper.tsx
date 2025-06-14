/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import "./style.css";

interface Props {
  property1: "variant-2" | "default";
  className: any;
  layer: string;
}

export const PropertyDefaultWrapper = ({
  property1,
  className,
  layer = "/img/layer-1.svg",
}: Props): JSX.Element => {
  const [state, dispatch] = useReducer(reducer, {
    property1: property1 || "default",
  });

  return (
    <div
      className={`property-default-wrapper ${className}`}
      onClick={() => {
        dispatch("click");
      }}
    >
      <div className="frame-63">
        <img
          className="layer-19"
          alt="Layer"
          src={state.property1 === "variant-2" ? "/img/layer-1-1.svg" : layer}
        />

        <div className="text-wrapper-140">NEWS:</div>
      </div>

      <div className="overlap-group-24">
        <div className="frame-64">
          <div className={`frame-65 ${state.property1}`}>
            <p className="EL-CHAPO-RAIDED-IN">
              &nbsp;&nbsp; EL CHAPO RAIDED IN CHINATOWN FOR $1
            </p>

            <div className="ellipse-24" />

            <p className="text-wrapper-141">
              VITO CORELONE RAIDED IN BALTIMORE FOR $12
            </p>
          </div>
        </div>

        <div className="rectangle-10" />
      </div>
    </div>
  );
};

function reducer(state: any, action: any) {
  switch (action) {
    case "click":
      return {
        ...state,
        property1: "variant-2",
      };
  }

  return state;
}

PropertyDefaultWrapper.propTypes = {
  property1: PropTypes.oneOf(["variant-2", "default"]),
  layer: PropTypes.string,
};
