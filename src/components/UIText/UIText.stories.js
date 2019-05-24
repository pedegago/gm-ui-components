import React from "react";
import { storiesOf } from "@storybook/react";
import { text, select } from "@storybook/addon-knobs";
import styled from "styled-components";
import UIText from "./UIText";

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(5rem, 10rem));
  grid-gap: 1rem;
`;

const stories = storiesOf("Components|UIText", module);

stories
  .add(
    "Default",
    () => {
      return (
        <UIText
          color={select(
            "color",
            ["contrast", "default", "subtle", "nonessential"],
            "default"
          )}
          level={select(
            "level",
            ["default", "small", "micro", "large"],
            "default"
          )}
          lettercase={select("lettercase", ["default", "caps"], "default")}
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
    "Colors",
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
    "Overflow",
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
  )
  .add(
    "Sizing",
    () => {
      return (
        <>
          <UIText level={"large"}>large</UIText>
          <hr />
          <UIText level={"default"}>default</UIText>
          <hr />
          <UIText level={"small"}>small</UIText>
          <hr />
          <UIText level={"micro"}>micro</UIText>
        </>
      );
    },
    {
      info: {
        text: "Trim overflow with hideOverflow."
      }
    }
  )
  .add(
    "Lettercase",
    () => {
      return (
        <>
          <UIText lettercase={"default"}>default</UIText>
          <hr />
          <UIText lettercase={"caps"}>caps</UIText>
        </>
      );
    },
    {
      info: {
        text: "Trim overflow with hideOverflow."
      }
    }
  )
  .add(
    "All combinations",
    () => {
      return (
        <Grid>
          <UIText color={"contrast"} lettercase={"default"} level={"large"}>
            Decipher Technology Studios
          </UIText>
          <UIText color={"default"} lettercase={"default"} level={"large"}>
            Decipher Technology Studios
          </UIText>
          <UIText color={"subtle"} lettercase={"default"} level={"large"}>
            Decipher Technology Studios
          </UIText>
          <UIText color={"nonessential"} lettercase={"default"} level={"large"}>
            Decipher Technology Studios
          </UIText>
          <UIText color={"contrast"} lettercase={"default"} level={"default"}>
            Decipher Technology Studios
          </UIText>
          <UIText color={"default"} lettercase={"default"} level={"default"}>
            Decipher Technology Studios
          </UIText>
          <UIText color={"subtle"} lettercase={"default"} level={"default"}>
            Decipher Technology Studios
          </UIText>
          <UIText
            color={"nonessential"}
            lettercase={"default"}
            level={"default"}
          >
            Decipher Technology Studios
          </UIText>
          <UIText color={"contrast"} lettercase={"default"} level={"small"}>
            Decipher Technology Studios
          </UIText>
          <UIText color={"default"} lettercase={"default"} level={"small"}>
            Decipher Technology Studios
          </UIText>
          <UIText color={"subtle"} lettercase={"default"} level={"small"}>
            Decipher Technology Studios
          </UIText>
          <UIText color={"nonessential"} lettercase={"default"} level={"small"}>
            Decipher Technology Studios
          </UIText>
          <UIText color={"contrast"} lettercase={"default"} level={"micro"}>
            Decipher Technology Studios
          </UIText>
          <UIText color={"default"} lettercase={"default"} level={"micro"}>
            Decipher Technology Studios
          </UIText>
          <UIText color={"subtle"} lettercase={"default"} level={"micro"}>
            Decipher Technology Studios
          </UIText>
          <UIText color={"nonessential"} lettercase={"default"} level={"micro"}>
            Decipher Technology Studios
          </UIText>
          <hr style={{ gridColumn: "1 / -1", width: "100%" }} />
          <UIText color={"contrast"} lettercase={"caps"} level={"large"}>
            Decipher Technology Studios
          </UIText>
          <UIText color={"default"} lettercase={"caps"} level={"large"}>
            Decipher Technology Studios
          </UIText>
          <UIText color={"subtle"} lettercase={"caps"} level={"large"}>
            Decipher Technology Studios
          </UIText>
          <UIText color={"nonessential"} lettercase={"caps"} level={"large"}>
            Decipher Technology Studios
          </UIText>
          <UIText color={"contrast"} lettercase={"caps"} level={"default"}>
            Decipher Technology Studios
          </UIText>
          <UIText color={"default"} lettercase={"caps"} level={"default"}>
            Decipher Technology Studios
          </UIText>
          <UIText color={"subtle"} lettercase={"caps"} level={"default"}>
            Decipher Technology Studios
          </UIText>
          <UIText color={"nonessential"} lettercase={"caps"} level={"default"}>
            Decipher Technology Studios
          </UIText>
          <UIText color={"contrast"} lettercase={"caps"} level={"small"}>
            Decipher Technology Studios
          </UIText>
          <UIText color={"default"} lettercase={"caps"} level={"small"}>
            Decipher Technology Studios
          </UIText>
          <UIText color={"subtle"} lettercase={"caps"} level={"small"}>
            Decipher Technology Studios
          </UIText>
          <UIText color={"nonessential"} lettercase={"caps"} level={"small"}>
            Decipher Technology Studios
          </UIText>
          <UIText color={"contrast"} lettercase={"caps"} level={"micro"}>
            Decipher Technology Studios
          </UIText>
          <UIText color={"default"} lettercase={"caps"} level={"micro"}>
            Decipher Technology Studios
          </UIText>
          <UIText color={"subtle"} lettercase={"caps"} level={"micro"}>
            Decipher Technology Studios
          </UIText>
          <UIText color={"nonessential"} lettercase={"caps"} level={"micro"}>
            Decipher Technology Studios
          </UIText>
        </Grid>
      );
    },
    {
      info: {
        text: "Trim overflow with hideOverflow."
      }
    }
  );
