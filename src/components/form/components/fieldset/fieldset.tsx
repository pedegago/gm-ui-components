import { Component } from "@stencil/core";

@Component({
  tag: "gm-ui-fieldset",
  styleUrl: "./fieldset.css",
  shadow: true
})
export class FieldSet {
  render() {
    return <div>FieldSet</div>;
  }
}

// import styled from "styled-components";
// import { COLOR_KEYLINE, RADIUS_1 } from "style/styleVariables";
// import { spacingScale } from "style/styleFunctions";

// const Fieldset = styled.fieldset`
//   border: 1px solid ${COLOR_KEYLINE};
//   padding: ${spacingScale(2)};
//   border-radius: ${RADIUS_1};
// `;

// export default Fieldset;
