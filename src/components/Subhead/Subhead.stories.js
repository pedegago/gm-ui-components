import React from "react";
import { storiesOf } from "@storybook/react";
import { text, boolean } from "@storybook/addon-knobs";

import Subhead from "./Subhead";

const stories = storiesOf("Components|Subhead", module);

stories.add(
  "default",
  () => {
    return <Subhead />;
  },
  {
    info: {
      text: "Add component description here. Accepts markdown."
    }
  }
);
