import { darken, invert } from "polished";

import baseTheme from "./base";
import { contrastColor, spacingScale } from "../style/styleFunctions";
import { COLOR_CONTENT_BACKGROUND } from "../style/styleVariables";

const decipherDark = {
  footer: {
    color: "#fff",
    padding: spacingScale(2),
    background: "#000"
  }
};

export default Object.assign({}, baseTheme, decipherDark);
