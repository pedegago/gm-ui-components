import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import { keen } from "style/styleVariables";

const Wrap = styled.h2.attrs({
  as: props =>
    (props.level === "one" && "h1") ||
    (props.level === "two" && "h2") ||
    (props.level === "three" && "h3") ||
    (props.level === "four" && "h4")
})`
  display: block;
  font-weight: ${props => props.theme.FONT_WEIGHT_BASE};
  opacity: ${props => props.theme.OPACITY_70};
  padding: 0;
  margin: 0;

  ${props =>
    props.hideOverflow &&
    css`
      display: block;
      max-width: 100%;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    `};

  ${props =>
    props.level === "one" &&
    css`
      font-size: ${props => props.theme.FONT_SIZE_HERO};
      font-family: ${props => props.theme.FONT_STACK_BRAND};
    `};

  ${props =>
    props.level === "two" &&
    css`
      font-weight: 300;
      font-size: ${props => props.theme.FONT_SIZE_TITLE};
    `};
  ${props =>
    props.level === "three" &&
    css`
      font-weight: 300;
      font-size: ${props => props.theme.FONT_SIZE_LG};
    `};
  ${props =>
    props.level === "four" &&
    css`
      font-size: ${props => props.theme.FONT_SIZE_MD};
    `};
`;

Headline.propTypes = {
  children: PropTypes.any,
  hideOverflow: PropTypes.bool,
  level: PropTypes.oneOf(["one", "two", "three", "four"])
};

Headline.defaultProps = {
  theme: keen,
  level: "four",
  hideOverflow: false
};

/**
 * Description of your component
 */
export default function Headline({ children, hideOverflow, level }) {
  return (
    <Wrap hideOverflow={hideOverflow} level={level}>
      {children}
    </Wrap>
  );
}

Headline.displayName = "Headline";
