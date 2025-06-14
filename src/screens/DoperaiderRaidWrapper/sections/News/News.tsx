import React from "react";
import "./style.css";
import { PropertyDefaultWrapper } from "../../../../components/PropertyDefaultWrapper";

export const News = (): JSX.Element => {
  return (
    <PropertyDefaultWrapper
      className="NEWS-instance"
      layer="/img/layer-1-10.svg"
      property1="default"
    />
  );
};
