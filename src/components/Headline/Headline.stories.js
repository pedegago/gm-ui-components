import React from "react";
import { storiesOf } from "@storybook/react";
import { text, select, boolean } from "@storybook/addon-knobs";
import styled from "styled-components";
import Headline from "./Headline";

const Lorem = "Lorem ipsum dolor sit amet";

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(5rem, 10rem));
  grid-gap: 1rem;
`;

const stories = storiesOf("Components|Headline", module);

stories
  .add(
    "Default",
    () => {
      return (
        <>
          <Headline
            level={select("level", ["one", "two", "three", "four"])}
            hideOverflow={boolean("hideOverflow", false)}
          >
            {text("content", Lorem)}
          </Headline>
        </>
      );
    },
    {
      info: {
        text:
          "Use Headlines to define major areas of a layout, where necessary."
      }
    }
  )
  .add(
    "Levels",
    () => {
      return (
        <>
          <Headline level={"one"}>{Lorem}</Headline>
          <hr />
          <Headline level={"two"}>{Lorem}</Headline>
          <hr />
          <Headline level={"three"}>{Lorem}</Headline>
          <hr />
          <Headline level={"four"}>{Lorem}</Headline>
        </>
      );
    },
    {
      info: {}
    }
  );
