import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import { keen } from "style/styleVariables";

const Wrap = styled.span`
  display: block;
  opacity: 0.7;
  line-height: 1.1;

${props =>
  props.color === "contrast" &&
  css`
    opacity: ${props => props.theme.OPACITY_100};
  `}
  ${props =>
    props.color === "subtle" &&
    css`
      opacity: ${props => props.theme.OPACITY_50};
    `}
  ${props =>
    props.color === "nonessential" &&
    css`
      opacity: 0.3;
    `}

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
    `}
  ${props =>
    props.level === "micro" &&
    css`
      font-size: ${props => props.theme.FONT_SIZE_XS};
    `}
  ${props =>
    props.level === "large" &&
    css`
      font-size: ${props => props.theme.FONT_SIZE_MD};
    `}

    ${props =>
      props.lettercase === "caps" &&
      css`
        text-transform: uppercase;
        letter-spacing: 0.06em;
      `}
`;

Subhead.propTypes = {
  children: PropTypes.any,
  color: PropTypes.oneOf(["contrast", "default", "subtle", "nonessential"]),
  hideOverflow: PropTypes.bool,
  lettercase: PropTypes.oneOf(["default", "caps"]),
  level: PropTypes.oneOf(["default", "small", "micro", "large"])
};

Subhead.defaultProps = {
  theme: keen,
  level: "default",
  color: "default",
  lettercase: "default",
  hideOverflow: false
};

/**
 * Description of your component
 */
export default function Subhead({
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

Subhead.displayName = "Subhead";
