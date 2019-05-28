import React from "react";
import { storiesOf } from "@storybook/react";
import { text, select } from "@storybook/addon-knobs";
import styled from "styled-components";
import UIItemTitle from "./UIItemTitle";
import UIText from "../UIText";

const Lorem = "Lorem ipsum dolor sit amet donec conesectetur";

const Item = styled.div`
  padding: 1rem;
  border-radius: 1rem;
  box-shadow: 0 0 0 1px ${props => props.theme.COLOR_KEYLINE};
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(5rem, 10rem));
  grid-gap: 1rem;
`;

const stories = storiesOf("Components|UIItemTitle", module);

stories
  .add(
    "Default",
    () => {
      return (
        <UIItemTitle
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
        </UIItemTitle>
      );
    },
    {
      info: {
        text: ""
      }
    }
  )
  .add(
    "In Situ",
    () => {
      return (
        <Grid>
          <Item>
            <UIItemTitle
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
              {text("content", "Item Title")}
            </UIItemTitle>
            <UIText>{Lorem}</UIText>
          </Item>
          <Item>
            <UIItemTitle
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
              {text("content", "Item Title")}
            </UIItemTitle>
            <UIText>{Lorem}</UIText>
          </Item>
          <Item>
            <UIItemTitle
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
              {text("content", "Item Title")}
            </UIItemTitle>
            <UIText>{Lorem}</UIText>
          </Item>
          <Item>
            <UIItemTitle
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
              {text("content", "Item Title")}
            </UIItemTitle>
            <UIText>{Lorem}</UIText>
          </Item>
        </Grid>
      );
    },
    {
      info: {
        text: ""
      }
    }
  )
  .add(
    "Colors",
    () => {
      return (
        <>
          <UIItemTitle color={"contrast"}>contrast</UIItemTitle>
          <hr />
          <UIItemTitle color={"default"}>default</UIItemTitle>
          <hr />
          <UIItemTitle color={"subtle"}>subtle</UIItemTitle>
          <hr />
          <UIItemTitle color={"nonessential"}>nonessential</UIItemTitle>
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
            <UIItemTitle hideOverflow>
              Hidden overflow: Lorem ipsum dolor sit amet donec consectetur
            </UIItemTitle>
          </div>
          <hr />
          <div style={{ width: "10rem" }}>
            <UIItemTitle>
              Normal (wrapping) overflow: Lorem ipsum dolor sit amet donec
              consectetur
            </UIItemTitle>
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
          <UIItemTitle level={"large"}>large</UIItemTitle>
          <hr />
          <UIItemTitle level={"default"}>default</UIItemTitle>
          <hr />
          <UIItemTitle level={"small"}>small</UIItemTitle>
          <hr />
          <UIItemTitle level={"micro"}>micro</UIItemTitle>
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
          <UIItemTitle lettercase={"default"}>default</UIItemTitle>
          <hr />
          <UIItemTitle lettercase={"caps"}>caps</UIItemTitle>
        </>
      );
    },
    {
      info: {
        text: "Trim overflow with hideOverflow."
      }
    }
  )
  .add("Combinations", () => {
    return (
      <Grid>
        <UIItemTitle color={"contrast"} lettercase={"default"} level={"large"}>
          Decipher Technology Studios
        </UIItemTitle>
        <UIItemTitle color={"default"} lettercase={"default"} level={"large"}>
          Decipher Technology Studios
        </UIItemTitle>
        <UIItemTitle color={"subtle"} lettercase={"default"} level={"large"}>
          Decipher Technology Studios
        </UIItemTitle>
        <UIItemTitle
          color={"nonessential"}
          lettercase={"default"}
          level={"large"}
        >
          Decipher Technology Studios
        </UIItemTitle>
        <UIItemTitle
          color={"contrast"}
          lettercase={"default"}
          level={"default"}
        >
          Decipher Technology Studios
        </UIItemTitle>
        <UIItemTitle color={"default"} lettercase={"default"} level={"default"}>
          Decipher Technology Studios
        </UIItemTitle>
        <UIItemTitle color={"subtle"} lettercase={"default"} level={"default"}>
          Decipher Technology Studios
        </UIItemTitle>
        <UIItemTitle
          color={"nonessential"}
          lettercase={"default"}
          level={"default"}
        >
          Decipher Technology Studios
        </UIItemTitle>
        <UIItemTitle color={"contrast"} lettercase={"default"} level={"small"}>
          Decipher Technology Studios
        </UIItemTitle>
        <UIItemTitle color={"default"} lettercase={"default"} level={"small"}>
          Decipher Technology Studios
        </UIItemTitle>
        <UIItemTitle color={"subtle"} lettercase={"default"} level={"small"}>
          Decipher Technology Studios
        </UIItemTitle>
        <UIItemTitle
          color={"nonessential"}
          lettercase={"default"}
          level={"small"}
        >
          Decipher Technology Studios
        </UIItemTitle>
        <UIItemTitle color={"contrast"} lettercase={"default"} level={"micro"}>
          Decipher Technology Studios
        </UIItemTitle>
        <UIItemTitle color={"default"} lettercase={"default"} level={"micro"}>
          Decipher Technology Studios
        </UIItemTitle>
        <UIItemTitle color={"subtle"} lettercase={"default"} level={"micro"}>
          Decipher Technology Studios
        </UIItemTitle>
        <UIItemTitle
          color={"nonessential"}
          lettercase={"default"}
          level={"micro"}
        >
          Decipher Technology Studios
        </UIItemTitle>
        <hr style={{ gridColumn: "1 / -1", width: "100%" }} />
        <UIItemTitle color={"contrast"} lettercase={"caps"} level={"large"}>
          Decipher Technology Studios
        </UIItemTitle>
        <UIItemTitle color={"default"} lettercase={"caps"} level={"large"}>
          Decipher Technology Studios
        </UIItemTitle>
        <UIItemTitle color={"subtle"} lettercase={"caps"} level={"large"}>
          Decipher Technology Studios
        </UIItemTitle>
        <UIItemTitle color={"nonessential"} lettercase={"caps"} level={"large"}>
          Decipher Technology Studios
        </UIItemTitle>
        <UIItemTitle color={"contrast"} lettercase={"caps"} level={"default"}>
          Decipher Technology Studios
        </UIItemTitle>
        <UIItemTitle color={"default"} lettercase={"caps"} level={"default"}>
          Decipher Technology Studios
        </UIItemTitle>
        <UIItemTitle color={"subtle"} lettercase={"caps"} level={"default"}>
          Decipher Technology Studios
        </UIItemTitle>
        <UIItemTitle
          color={"nonessential"}
          lettercase={"caps"}
          level={"default"}
        >
          Decipher Technology Studios
        </UIItemTitle>
        <UIItemTitle color={"contrast"} lettercase={"caps"} level={"small"}>
          Decipher Technology Studios
        </UIItemTitle>
        <UIItemTitle color={"default"} lettercase={"caps"} level={"small"}>
          Decipher Technology Studios
        </UIItemTitle>
        <UIItemTitle color={"subtle"} lettercase={"caps"} level={"small"}>
          Decipher Technology Studios
        </UIItemTitle>
        <UIItemTitle color={"nonessential"} lettercase={"caps"} level={"small"}>
          Decipher Technology Studios
        </UIItemTitle>
        <UIItemTitle color={"contrast"} lettercase={"caps"} level={"micro"}>
          Decipher Technology Studios
        </UIItemTitle>
        <UIItemTitle color={"default"} lettercase={"caps"} level={"micro"}>
          Decipher Technology Studios
        </UIItemTitle>
        <UIItemTitle color={"subtle"} lettercase={"caps"} level={"micro"}>
          Decipher Technology Studios
        </UIItemTitle>
        <UIItemTitle color={"nonessential"} lettercase={"caps"} level={"micro"}>
          Decipher Technology Studios
        </UIItemTitle>
      </Grid>
    );
  });
