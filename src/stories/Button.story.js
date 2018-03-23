import React from "react";
import { storiesOf } from "@storybook/react";
import {
  withKnobs,
  number,
  select,
  text,
  boolean,
  color
} from "@storybook/addon-knobs/react";
import { withInfo } from "@storybook/addon-info";
import Button from "../components/Button";
import ThemeDecorator from "./utils/ThemeDecorator";

const glyphNames = [
  "Bars",
  "Bell",
  "CPU",
  "Card",
  "Cog",
  "Configuration",
  "Docs",
  "EKG",
  "EditGraph",
  "ErrorList",
  "Exclamation",
  "Explorer",
  "Fabric",
  "Finagle",
  "GRPC",
  "GitHub",
  "Http",
  "Info",
  "Instances",
  "JVM",
  "Key",
  "LinkedIn",
  "Memory",
  "Negation",
  "Pause",
  "Person",
  "Play",
  "Poll",
  "Power",
  "Rows",
  "RunningSmall",
  "Scale",
  "Scatterplot",
  "Service",
  "ServiceInstance",
  "ServicesWhite",
  "StarFilled",
  "Summary",
  "Tape",
  "Threads",
  "Timer",
  "ViewCollapse",
  "GET",
  "PUT",
  "POST",
  "DELETE",
  "PATCH"
];

const types = ["default", "danger", "info", "primary", "warning", "polling"];
const outlines = ["raised", "outline", "shadow", "none", "raised-outline"];
const sizes = ["normal", "xs", "sm", "lg", "xl"];
const orientations = ["vertical", "horizontal"];

storiesOf("Button", module)
  .addDecorator(withKnobs)
  .add(
    "default",
    withInfo(
      "A React component that renders a button and includes base styling, used to trigger actions."
    )(() => (
      <ThemeDecorator storyTheme={select("Theme", ["base", "decipherDark"])}>
        <Button
          active={boolean("active", false)}
          label={text("label", "Hello World")}
          type={select("type", types, "default")}
          glyph={select("glyph", glyphNames)}
          glyphColor={color("glyphColor")}
          glyphSize={select("glyphSize", sizes)}
          disabled={boolean("disabled", false)}
          clickAction={() => alert("clicked")}
          orientation={select("orientation", orientations, "horizontal")}
          outline={select("outline", outlines, "none")}
          prefix={text("prefix")}
          suffix={text("suffix")}
          size={select("size", sizes, "normal")}
          tabIndex={number("tabIndex")}
        />
      </ThemeDecorator>
    ))
  )
  .add("types", () => (
    <ThemeDecorator storyTheme={select("Theme", ["base", "decipherDark"])}>
      {types.map(type => (
        <Button
          type={type}
          label={type}
          key={type}
          outline="raised"
          clickAction={() => {}}
        />
      ))}
    </ThemeDecorator>
  ))
  .add("sizes", () => (
    <ThemeDecorator storyTheme={select("Theme", ["base", "decipherDark"])}>
      {sizes.map(size => (
        <Button size={size} label={size} key={size} clickAction={() => {}} />
      ))}
    </ThemeDecorator>
  ))
  .add("outlines", () => (
    <ThemeDecorator storyTheme={select("Theme", ["base", "decipherDark"])}>
      {outlines.map(outline => (
        <Button
          outline={outline}
          label={outline}
          key={outline}
          clickAction={() => {}}
        />
      ))}
    </ThemeDecorator>
  ))
  .add("orientations", () => (
    <ThemeDecorator storyTheme={select("Theme", ["base", "decipherDark"])}>
      {orientations.map(orientation => (
        <Button
          glyph={"Bell"}
          orientation={orientation}
          label={orientation}
          clickAction={() => {}}
          key={orientation}
        />
      ))}
    </ThemeDecorator>
  ));
