import styled, { css } from "styled-components";
import { COLOR_BRAND_PRIMARY } from "../../../style/styleVariables";

import baseTheme from "../../../themes/base";

const activeStyles = css`
  border-color: ${props => props.theme.tab.border.activeColor};
`;

const disabledStyles = `
    cursor: default;
    opacity: .8;
    border-color: transparent;
  `;

const hoverStyles = `
    border-color: currentColor;
  `;

const downStyles = css`
  border-color: ${props => props.theme.tab.border.activeColor};
`;

const TabWrap = styled.a.attrs({
  disabled: props => props.disabled
})`
  flex: 0 0 auto;
  padding: ${props => props.theme.tab.padding};
  font-weight: ${props => props.theme.tab.fontWeight};
  border-bottom: ${props => props.theme.tab.border.width} solid;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    ${hoverStyles};
  }

  &:active {
    ${downStyles};
  }

  // if active...
  ${props =>
    props.active &&
    css`
      &,
      &:hover,
      &:active {
        ${activeStyles};
      }
    `};

  // if disabled...
  ${props =>
    props.disabled &&
    css`
      &,
      &:hover,
      &:active {
        ${disabledStyles};
      }
    `};
`;

TabWrap.defaultProps = {
  theme: baseTheme
};

export default TabWrap;
