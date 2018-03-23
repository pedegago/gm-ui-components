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
  COLOR_CONTENT_BACKGROUND,
  COLOR_BRAND_PRIMARY
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
  button: {},
  buttonGroup: {},
  checkbox: {},
  glyphs: {},
  icon: {},
  input: {},
  tabGroup: {},
  tooltip: {}
};

export default baseTheme;
