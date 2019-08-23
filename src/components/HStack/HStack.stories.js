import React from "react";
import { storiesOf } from "@storybook/react";
import { text, boolean } from "@storybook/addon-knobs";
import styled from "styled-components";

import HStack, { HStackStyle } from "./HStack";
import { spacingScale } from "style/styleFunctions";

const stories = storiesOf("Components|HStack", module);

const StoryHStack = styled.div`
  ${HStackStyle(props => props.gap)};
`;

stories.add(
  "default",
  () => {
    return (
      <>
        <p>
          <em>Using the React Component:</em>
        </p>
        <HStack gap={spacingScale(0.5)}>
          <span>Child 1</span>
          <span>Child 2 With Longer Text</span>
          <span>Child 3</span>
          <span>Child 4</span>
        </HStack>
        <hr />
        <p>
          <em>Using the function:</em>
        </p>
        <StoryHStack gap={spacingScale(0.5)}>
          <span>Child 1</span>
          <span>Child 2</span>
          <span>Child 3</span>
          <span>Child 4</span>
        </StoryHStack>
      </>
    );
  },
  {
    info: {
      text:
        "HStack is a wrapper component that makes it easy to present a vertical stack of children. HStack also provides its styles as a function, `HStackStyle()`."
    }
  }
);
