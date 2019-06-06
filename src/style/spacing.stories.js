import React from "react";
import styled from "styled-components";
import { storiesOf } from "@storybook/react";
import { number } from "@storybook/addon-knobs";
import { spacing } from "style/styleFunctions";

const stories = storiesOf(" Overview|Spacing", module);

const SpacedObject = styled.div`
  box-sizing: content-box;
  transition: all 0.2s ease;
  border-bottom: 1px solid currentColor;
  border-left: 1px solid currentColor;
  border-right: 1px solid currentColor;
  height: ${spacing(2)};
  width: ${props => spacing(props.spacing)};
`;

stories.add("Spacing", () => <SpacedObject spacing={number("spacing", 1)} />);
