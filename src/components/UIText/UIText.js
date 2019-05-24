import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import { keen } from "style/styleVariables";

const Wrap = styled.span`
  /* TODO: inherit font family, don't set it. */
  /* font-family: ${props => props.theme.FONT_STACK_BASE}; */
  /* font-size: ${props => props.theme.FONT_SIZE_BASE}; */
  opacity: 0.7;

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
`;

UIText.propTypes = {
  children: PropTypes.any,
  color: PropTypes.oneOf(["contrast", "default", "subtle", "nonessential"]),
  hideOverflow: PropTypes.bool
};

UIText.defaultProps = {
  theme: keen,
  color: "default",
  hideOverflow: false
};

/**
 * Description of your component
 */
export default function UIText({ children, color, hideOverflow }) {
  return (
    <Wrap color={color} hideOverflow={hideOverflow}>
      {children}
    </Wrap>
  );
}

UIText.displayName = "UIText";
