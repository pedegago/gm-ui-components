import React, { Fragment } from "react";
import { ThemeProvider } from "styled-components";

import baseTheme from "../../themes/base.js";
import decipherDark from "../../themes/decipherDark.js";

export default function ThemeDecorator({ children, storyTheme }) {
  switch (storyTheme) {
    case "decipherDark":
      storyTheme = decipherDark;
      break;
    default:
      storyTheme = baseTheme;
  }
  return (
    <ThemeProvider theme={storyTheme}>
      <Fragment>{children}</Fragment>
    </ThemeProvider>
  );
}
