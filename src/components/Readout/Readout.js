import React from "react";
import { PropTypes } from "prop-types";

import { COLOR_SUCCESS } from "../../style/styleVariables";
import ReadoutDisplay from "./components/ReadoutDisplay";
import ReadoutItem, { ReadoutItemShape } from "./components/ReadoutItem";

export default function Readout({
  children,
  primary,
  color,
  readoutItems = []
}) {
  return (
    <ReadoutDisplay primary={primary} color={color || COLOR_SUCCESS}>
      {readoutItems.map(item => (
        <ReadoutItem
          key={`${item.title}|${item.value}|${item.detail}`}
          {...item}
        />
      ))}
    </ReadoutDisplay>
  );
}

Readout.propTypes = {
  children: PropTypes.element,
  color: PropTypes.string,
  primary: PropTypes.bool,
  readoutItems: PropTypes.oneOfType([
    PropTypes.arrayOf(ReadoutItemShape),
    PropTypes.object
  ])
};
