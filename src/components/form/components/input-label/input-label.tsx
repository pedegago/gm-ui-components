import { Component } from "@stencil/core";

@Component({
  tag: "gm-ui-input-label",
  styleUrl: "./input-label.css",
  shadow: true
})
export class InputLabel {
  render() {
    return <div>InputLabel</div>;
  }
}

// import styled from "styled-components";
// import { FONT_SIZE_BASE } from "style/styleVariables";

// const InputLabelText = styled.p`
//   margin: 0;
//   font-size: ${FONT_SIZE_BASE};
// `;

// export default InputLabelText;
