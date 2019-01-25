import { Component } from "@stencil/core";

@Component({
  tag: "gm-ui-button-group",
  styleUrl: "./button-group.css",
  shadow: true
})
export class ButtonGroup {
  render() {
    return <div>ButtonGroup</div>;
  }
}

// import styled from "styled-components";
// import { PropTypes } from "prop-types";

// import { spacingScale } from "style/styleFunctions";

// const ButtonGroup = styled.div`
//   display: flex;
//   flex-direction: row;
//   * + * {
//     margin-left: ${spacingScale(0.5)};
//   }
//   ${props => props.style};
// `;

// ButtonGroup.displayName = "ButtonGroup";

// ButtonGroup.propTypes = {
//   style: PropTypes.object
// };

// export default ButtonGroup;
