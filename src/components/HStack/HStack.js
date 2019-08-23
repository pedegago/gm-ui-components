import React from "react";
import styled, { css } from "styled-components";
import { PropTypes } from "prop-types";

export function StackStyle() {
  return css`
    display: flex;
  `;
}

export function HStackStyle(gap) {
  return css`
    ${StackStyle()};
    flex-direction: column;

    ${gap &&
      css`
        > *:not(:first-child) {
          margin-top: ${gap};
        }
      `}
  `;
}

const Wrap = styled.div`
  ${props => HStackStyle(props.gap)};
`;

/**
 * Description of your component
 */
export default function HStack({ children, ...props }) {
  return <Wrap {...props}>{children}</Wrap>;
}

HStack.propTypes = {
  children: PropTypes.any,
  gap: PropTypes.string
};

HStack.defaultProps = {};

HStack.displayName = "HStack";
