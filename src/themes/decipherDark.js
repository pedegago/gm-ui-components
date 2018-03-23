import { darken } from "polished";
import _ from "lodash";

import baseTheme from "./base";
import { spacingScale } from "../style/styleFunctions";
import {
  COLOR_DANGER,
  COLOR_WARNING,
  COLOR_INFO,
  COLOR_SUCCESS,
  COLOR_BRAND_PRIMARY
} from "../style/styleVariables";

const decipherDark = {
  footer: {
    color: "#fff",
    padding: spacingScale(2),
    background: "#000"
  },
  button: {
    backgroundColor: {
      danger: darken(0.2, COLOR_DANGER),
      polling: darken(0.2, COLOR_SUCCESS),
      info: darken(0.2, COLOR_INFO),
      warning: darken(0.2, COLOR_WARNING),
      primary: darken(0.2, COLOR_BRAND_PRIMARY),
      default: darken(0.2, COLOR_BRAND_PRIMARY)
    }
  }
};

export default _.merge({}, baseTheme, decipherDark);
