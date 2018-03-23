import { darken, invert } from "polished";
import _ from "lodash";

import baseTheme from "./base";
import { contrastColor, spacingScale } from "../style/styleFunctions";
import {
  COLOR_HIGHLIGHT,
  COLOR_WHITE,
  COLOR_BLACK,
  COLOR_DANGER,
  COLOR_WARNING,
  COLOR_INFO,
  COLOR_SUCCESS,
  FONT_GROUP_SYSTEM,
  FONT_STACK_CODE,
  FONT_STACK_DATA_MONO,
  FONT_STACK_DATA,
  LINE_HEIGHT_BASE,
  FONT_WEIGHT_BASE,
  FONT_WEIGHT_CONTROLS,
  FONT_SIZE_HERO,
  FONT_SIZE_LG,
  FONT_SIZE_BASE,
  FONT_SIZE_SM,
  FONT_SIZE_XS,
  FONT_STACK_BASE,
  COLOR_CONTENT_BACKGROUND,
  LINE_HEIGHT_CONTROLS,
  COLOR_BRAND_PRIMARY,
  TRANSITION_DURATION_NORMAL
} from "../style/styleVariables";

const decipherDark = {
  footer: {
    color: "#fff",
    padding: spacingScale(2),
    background: "#000"
  },
  button: {
    backgroundColor: {
      danger: "#000",
      polling: COLOR_SUCCESS,
      info: COLOR_INFO,
      warning: COLOR_WARNING,
      primary: COLOR_BRAND_PRIMARY,
      default: COLOR_BRAND_PRIMARY
    }
  }
};

export default _.merge({}, baseTheme, decipherDark);
