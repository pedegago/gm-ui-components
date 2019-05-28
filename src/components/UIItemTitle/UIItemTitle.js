import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import { keen } from "style/styleVariables";

const Wrap = styled.span`
  display: block;
  line-height: 1.1;
  margin

  ${props =>
    props.hideOverflow &&
    css`
      display: block;
      max-width: 100%;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    `}

  ${props =>
    props.level === "default" &&
    css`
      font-size: ${props => props.theme.FONT_SIZE_BASE};
    `}
  ${props =>
    props.level === "small" &&
    css`
      font-size: ${props => props.theme.FONT_SIZE_SM};
      opacity: ${props => props.theme.OPACITY_70};
    `}
  ${props =>
    props.level === "micro" &&
    css`
      font-size: ${props => props.theme.FONT_SIZE_XS};
      opacity: ${props => props.theme.OPACITY_70};
    `}
  ${props =>
    props.level === "large" &&
    css`
      font-size: ${props => props.theme.FONT_SIZE_MD};
      opacity: ${props => props.theme.OPACITY_70};
    `}

    ${props =>
      props.lettercase === "caps" &&
      css`
        text-transform: uppercase;
        letter-spacing: 0.06em;
      `}
`;

UIItemTitle.propTypes = {
  children: PropTypes.any,
  color: PropTypes.oneOf(["contrast", "default", "subtle", "nonessential"]),
  hideOverflow: PropTypes.bool,
  lettercase: PropTypes.oneOf(["default", "caps"]),
  level: PropTypes.oneOf(["default", "small", "micro", "large"])
};

UIItemTitle.defaultProps = {
  theme: keen,
  level: "default",
  color: "default",
  lettercase: "default",
  hideOverflow: false
};

/**
 * Description of your component
 */
export default function UIItemTitle({
  children,
  color,
  hideOverflow,
  level,
  lettercase
}) {
  return (
    <Wrap
      color={color}
      hideOverflow={hideOverflow}
      level={level}
      lettercase={lettercase}
    >
      {children}
    </Wrap>
  );
}

UIItemTitle.displayName = "UIItemTitle";
