import React from "react";
import styled from "styled-components";
import { storiesOf } from "@storybook/react";
import { number } from "@storybook/addon-knobs";
import { spacing } from "style/styleFunctions";

const stories = storiesOf(" Overview|Spacing", module);

const SpacedObject = styled.div`
  box-sizing: content-box;
  border-bottom: 1px solid;
  border-left: 1px solid;
  border-right: 1px solid;
  height: ${spacing(2)};
  width: ${props => spacing(props.spacing)};

  transition: all 0.2s ease;
`;

stories.add("Spacing", () => <SpacedObject spacing={number("spacing", 1)} />);
