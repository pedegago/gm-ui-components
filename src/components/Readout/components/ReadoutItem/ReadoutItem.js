import React from "react";
import { PropTypes } from "prop-types";

import * as Glyphs from "../../../Glyphs";
import ItemDisplay from "./components/ItemDisplay";
import ReadoutItemData from "./components/ReadoutItemData";
import ReadoutItemGraph from "./components/ReadoutItemGraph";
import ReadoutItemIcon from "./components/ReadoutItemIcon";
import ReadoutItemTitle from "./components/ReadoutItemTitle";
import ReadoutItemValue from "./components/ReadoutItemValue";
import ReadoutItemDetail from "./components/ReadoutItemDetail";

//  TO-DO:  icon name, shape, color and other icon specifics are to be passed to getIcon component that renders svg element
// when we have "future", "bolt", "warning", "server", "link" svg elements...

export default function ReadoutItem({
  children,
  detail,
  graphData,
  icon,
  iconName,
  iconBackgroundStyle,
  iconBorderStyle,
  iconBorderWidth,
  iconShape,
  iconColor,
  title,
  value
}) {
  let GlyphComponent;
  if (icon) {
    GlyphComponent = Glyphs[icon];
  }
  return (
    <ItemDisplay>
      <ReadoutItemData>
        <ReadoutItemTitle>
          {icon && (
            <ReadoutItemIcon
              iconBackgroundStyle={iconBackgroundStyle}
              iconBorderStyle={iconBorderStyle}
              iconBorderWidth={"1"}
            >
              <GlyphComponent />
            </ReadoutItemIcon>
          )}
          {title || "—"}
        </ReadoutItemTitle>
        <ReadoutItemValue>{value || "—"}</ReadoutItemValue>
        {detail && <ReadoutItemDetail>{detail || "—"}</ReadoutItemDetail>}
        {children}
      </ReadoutItemData>
    </ItemDisplay>
  );
}

const readoutItemPropTypes = {
  children: PropTypes.element,
  detail: PropTypes.string,
  graphData: PropTypes.arrayOf(PropTypes.number),
  icon: PropTypes.string,
  iconBackgroundStyle: PropTypes.string,
  iconBorderStyle: PropTypes.string,
  iconBorderWidth: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  iconColor: PropTypes.string,
  iconName: PropTypes.string,
  iconShape: PropTypes.string,
  title: PropTypes.string,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.object
  ])
};

export const ReadoutItemShape = PropTypes.shape(readoutItemPropTypes);
ReadoutItem.propTypes = readoutItemPropTypes;
