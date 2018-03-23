import styled from "styled-components";
import PropTypes from "prop-types";

import { contrastColor } from "../../../../style/styleFunctions";
import generateButtonIconRatio from "./utils/generateButtonIconRatio";
import generateButtonOrientation from "./utils/generateButtonOrientation";
import generateButtonSize from "./utils/generateButtonSize";
import generateButtonStyle from "./utils/generateButtonStyle";
import baseTheme from "../../../../themes/base";

import { FONT_STACK_BASE } from "../../../../style/styleVariables";

// Maps button types to a particular color
function generateButtonTypeColor(type, theme) {
  switch (type) {
    case "danger":
      return theme.button.backgroundColor.danger;
    case "info":
      return theme.button.backgroundColor.info;
    case "warning":
      return theme.button.backgroundColor.warning;
    case "polling":
      return theme.button.backgroundColor.polling;
    case "primary":
      return theme.button.backgroundColor.primary;
    case "default":
    default:
      return theme.button.backgroundColor.default;
  }
}

const camelCaseConverter = stringInput => {
  if (stringInput) {
    return stringInput.replace(/-([a-z])/g, function(g) {
      return g[1].toUpperCase();
    });
  }
};

// The start of the CSS style output
const ButtonWrap = styled.button`
  font-family: ${props => props.theme.button.fontFamily};
  font-weight: ${props => props.theme.button.fontWeight};
  line-height: ${props => props.theme.button.lineHeight};
  transition: ${props => props.theme.transitionNormal};
  transition-duration: ${parseInt(
    props => props.theme.button.transitionDuration,
    10
  ) * 2};
  box-sizing: border-box;
  user-select: none;
  border-width: 1px;
  border-style: solid;
  text-transform: none;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  &:hover {
    transition: all 0.1s ease;
  }

  &:focus,
  &:active {
    transition: all 0 ease;
  }

  > * {
    flex: 0 1 auto;
  }

  ${props => `
    ${
      props.type
        ? generateButtonStyle(props.theme, {
            buttonOutlineStyle: camelCaseConverter(props.outline),
            buttonBackgroundColorBase: generateButtonTypeColor(
              props.type,
              props.theme
            ),
            buttonBorderColorBase: generateButtonTypeColor(
              props.type,
              props.theme
            ),
            buttonLabelColorBase: contrastColor(
              generateButtonTypeColor(props.type, props.theme),
              1
            ),
            buttonActiveStatus: props.active
          }) // has color (also code in props.outline and props.active)
        : generateButtonStyle(props.theme, {
            buttonOutlineStyle: camelCaseConverter(props.outline),
            buttonActiveStatus: props.active
          }) // no color
    }
    ${
      props.size
        ? generateButtonSize(props.size) // has size
        : generateButtonSize() // Icons // no size
    } 
    ${
      props.glyphSize
        ? generateButtonIconRatio(props.glyphSize) // has glyphSize
        : generateButtonIconRatio() // Orientation // no glyphSize
    } 
    ${
      props.orientation
        ? generateButtonOrientation(props.orientation) // has orientation
        : generateButtonOrientation() // no orientation default horizontal
    } 
  `};
`;

// might have to add 'open' prop to satisfy condition in the generateButtonStyles.
ButtonWrap.propTypes = {
  active: PropTypes.bool,
  orientation: PropTypes.string,
  outline: PropTypes.oneOf([
    "raised", // Add highlight effect to top edge and shadow effect to bottom edge
    "outline", // Add outline effect
    "shadow", // Add shadow effect to bottom edge
    "none", // No effects
    "raised-outline"
  ]),
  size: PropTypes.string,
  type: PropTypes.oneOf(["danger", "info", "warning", "primary", "polling"])
};

ButtonWrap.defaultProps = {
  theme: baseTheme
};

export default ButtonWrap;
