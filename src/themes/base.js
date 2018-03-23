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
import { contrastColor, spacingScale } from "../style/styleFunctions";

const baseTheme = {
  footer: {
    color: contrastColor(COLOR_CONTENT_BACKGROUND, 1),
    padding: spacingScale(0.5),
    background: COLOR_CONTENT_BACKGROUND
  },
  breadcrumbs: {
    color: COLOR_BLACK
  },
  tab: {
    padding: `${spacingScale(0)} ${spacingScale(1)}`,
    fontWeight: FONT_WEIGHT_CONTROLS,
    border: {
      activeColor: COLOR_BRAND_PRIMARY,
      width: spacingScale(0.5)
    }
  },
  button: {
    fontFamily: FONT_STACK_BASE,
    fontWeight: FONT_WEIGHT_CONTROLS,
    lineHeight: LINE_HEIGHT_CONTROLS,
    transitionDuration: TRANSITION_DURATION_NORMAL,
    backgroundColor: {
      danger: COLOR_DANGER,
      polling: COLOR_SUCCESS,
      info: COLOR_INFO,
      warning: COLOR_WARNING,
      primary: COLOR_BRAND_PRIMARY,
      default: COLOR_BRAND_PRIMARY
    }
  },
  buttonGroup: {},
  checkbox: {},
  glyphs: {},
  icon: {},
  input: {},
  tabGroup: {},
  tooltip: {}
};

export default baseTheme;
