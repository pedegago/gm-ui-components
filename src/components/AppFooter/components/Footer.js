import styled from "styled-components";
import { transparentize } from "polished";

import { contrastColor, spacingScale } from "../../../style/styleFunctions";
import {
  COLOR_CONTENT_BACKGROUND,
  FONT_SIZE_BASE,
  APP_FOOTER_HEIGHT,
  ZINDEX_STICKY
} from "../../../style/styleVariables";
import baseTheme from "../../../themes/base";

const Footer = styled.footer`
  user-select: none;
  overflow: hidden;
  padding: ${props => props.theme.footer.padding};
  display: flex;
  flex-flow: row wrap;
  color: ${props => props.theme.footer.color};
  background-image: ${props => `linear-gradient(
    to bottom,
    ${transparentize(1, props.theme.footer.background)},
    ${props.theme.footer.background}
  )`};
  font-size: ${FONT_SIZE_BASE};
  height: auto;
  align-items: stretch;
  justify-content: stretch;

  @media all and (min-width: 800px) {
    height: ${APP_FOOTER_HEIGHT};
    flex-wrap: no-wrap;
    align-items: center;
    justify-content: flex-start;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: ${ZINDEX_STICKY};

    & + * {
      padding-bottom: ${spacingScale(4)};
    }
  }
`;

Footer.defaultProps = {
  theme: baseTheme
};

export default Footer;
