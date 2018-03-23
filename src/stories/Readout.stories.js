import React from "react";

import { storiesOf } from "@storybook/react";
import {
  withKnobs,
  boolean,
  object,
  select
} from "@storybook/addon-knobs/react";
import ThemeDecorator from "./utils/ThemeDecorator";
import Readout from "../components/Readout";

const mockReadoutItem = [
  {
    icon: "Summary",
    title: "Avg. Response Time",
    value: "30000%"
  }
];
const mockReadoutFewItems = [
  {
    icon: "Summary",
    title: "Avg. Response Time",
    value: "57.838%"
  },
  {
    icon: "Summary",
    title: "Error Rate",
    value: "0.0012%"
  }
];

const mockReadoutManyItems = [
  {
    icon: "Summary",
    title: "Avg. Response Time",
    value: "30000%",
    detail: "detail text 0"
  },
  {
    icon: "Summary",
    title: "Avg. Response Time",
    value: "33000%",
    detail: "detail text 1 "
  },
  {
    icon: "Summary",
    title: "Avg. Response Time",
    value: "31000%",
    detail: "detail text 2"
  },
  {
    icon: "Summary",
    title: "Avg. Response Time",
    value: "34000%",
    detail: "detail text 3"
  }
];

storiesOf("Readout", module)
  .addDecorator(withKnobs)
  .add("Readout", () => (
    <ThemeDecorator storyTheme={select("Theme", ["base", "decipherDark"])}>
      <Readout
        primary={boolean("Readout is Primary", false)}
        readoutItems={object("Readout Items", mockReadoutItem)}
      />
    </ThemeDecorator>
  ))
  .add("A Readout with Many Items ", () => (
    <Readout
      primary={boolean("Readout is Primary", false)}
      readoutItems={object("Readout Items", mockReadoutManyItems)}
    />
  ));
