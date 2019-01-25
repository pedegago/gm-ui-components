import { Component } from "@stencil/core";

@Component({
  tag: "gm-ui-readout-group",
  styleUrl: "./readout-group.css",
  shadow: true
})
export class ReadoutGroup {
  render() {
    return <div>ReadoutGroup</div>;
  }
}

// import styled from "styled-components";

// import { spacingScale } from "style/styleFunctions";

// const ReadoutGroup = styled.div`
//   display: flex;
//   flex-flow: row wrap;
//   justify-content: center;
//   orphans: 2;
//   margin-right: -${spacingScale(1)};
//   flex: 1 1 100%;
// `;

// export default ReadoutGroup;
