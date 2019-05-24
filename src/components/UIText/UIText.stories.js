import React from "react";
import { storiesOf } from "@storybook/react";
import { text, select } from "@storybook/addon-knobs";

import UIText from "./UIText";

const stories = storiesOf("Components|UIText", module);

stories
  .add(
    "default",
    () => {
      return (
        <UIText
          color={select(
            "color",
            ["contrast", "default", "subtle", "nonessential"],
            "default"
          )}
        >
          {text("content", "A label, instance of metadata, or such.")}
        </UIText>
      );
    },
    {
      info: {
        text:
          "An Icon component that renders a custom glyph. Simply import { Icon } and wrap your custom svg."
      }
    }
  )
  .add(
    "color modes",
    () => {
      return (
        <>
          <UIText color={"contrast"}>contrast</UIText>
          <hr />
          <UIText color={"default"}>default</UIText>
          <hr />
          <UIText color={"subtle"}>subtle</UIText>
          <hr />
          <UIText color={"nonessential"}>nonessential</UIText>
        </>
      );
    },
    {
      info: {
        text:
          "Use opacity to improve order and scannability for complex microlayouts."
      }
    }
  )
  .add(
    "Overflow management",
    () => {
      return (
        <>
          <div style={{ width: "10rem" }}>
            <UIText hideOverflow>
              Hidden overflow: Lorem ipsum dolor sit amet donec consectetur
            </UIText>
          </div>
          <hr />
          <div style={{ width: "10rem" }}>
            <UIText>
              Normal (wrapping) overflow: Lorem ipsum dolor sit amet donec
              consectetur
            </UIText>
          </div>
        </>
      );
    },
    {
      info: {
        text: "Trim overflow with hideOverflow."
      }
    }
  );
