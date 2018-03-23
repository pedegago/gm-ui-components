import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, text, boolean, select } from "@storybook/addon-knobs/react";
import { withInfo } from "@storybook/addon-info";
import ThemeDecorator from "./utils/ThemeDecorator";

import Tab from "../components/Tab";

const stories = storiesOf("Tab", module);

stories.addDecorator(withKnobs);

stories.add(
  "Tab",
  withInfo(
    "An individual Tab component that is meant to be used as a child of TabGroup."
  )(() => {
    return (
      <ThemeDecorator storyTheme={select("Theme", ["base", "decipherDark"])}>
        <div style={{ width: "100vw", display: "flex" }}>
          <Tab
            clickAction={() => alert("hello")}
            label={text("label", "Active Tab")}
            active={boolean("active", true)}
            disabled={boolean("disabled", false)}
          />
        </div>
      </ThemeDecorator>
    );
  })
);
