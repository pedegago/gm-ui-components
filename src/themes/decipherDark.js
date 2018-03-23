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
  FONT_SIZE_XS
} from "../style/styleVariables";
import { darken } from "polished";

import baseTheme from "./base";

const decipherDark = {
  colorIntentHighlight: darken(0.1, COLOR_HIGHLIGHT),
  colorIntentDanger: darken(0.15, COLOR_DANGER),
  colorIntentWarning: darken(0.1, COLOR_WARNING),
  colorIntentInfo: darken(0.1, COLOR_INFO),
  colorIntentSuccess: darken(0.1, COLOR_SUCCESS)
};

export default Object.assign({}, baseTheme, decipherDark);
