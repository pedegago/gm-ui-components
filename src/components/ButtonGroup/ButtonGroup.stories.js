import React from "react";
import { storiesOf } from "@storybook/react";

import Button from "components/Button";
import ButtonGroup from "./ButtonGroup";

const stories = storiesOf("Components|ButtonGroup", module);

stories.add(
  "Default",
  () => {
    return (
      <ButtonGroup>
        <Button label="Button #1" />
        <Button label="Button #2" />
        <Button label="Button #3" />
      </ButtonGroup>
    );
  },
  {
    info: {
      text:
        "An ButtonGroup component that takes any number of Button components as children"
    }
  }
);
