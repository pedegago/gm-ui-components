import { Component } from "@stencil/core";

@Component({
  tag: "gm-ui-input-hint",
  styleUrl: "./input-hint.css",
  shadow: true
})
export class InputHint {
  render() {
    return <div>InputHint</div>;
  }
}

// import styled from "styled-components";

// import { FONT_SIZE_XS } from "style/styleVariables";
// import { spacingScale } from "style/styleFunctions";

// export const InputHint = styled.small`
//   margin: ${spacingScale(0.5)} 0;
//   font-size: ${FONT_SIZE_XS};
//   opacity: 0.5;
//   display: block;
// `;

// export default InputHint;
