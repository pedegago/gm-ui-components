import React from "react";
import { storiesOf } from "@storybook/react";
import { object, text, array } from "@storybook/addon-knobs";

import { IconCog, Button, AppHeader, Breadcrumbs } from "components";

const stories = storiesOf("Components|App Header", module);

const extras = [
  {
    path: "/",
    title: "More Information"
  }
];

const breadcrumbs = [
  "Fabric",
  "Instances",
  "Routes",
  "Grace Hopper Battleship Service"
];

const toolbarItems = () => {
  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        alignItems: "center",
        flex: "1 1 auto"
      }}
    >
      <Breadcrumbs crumbs={array("breadcrumbs", breadcrumbs)} />
      &nbsp;
      <Button size="xs">
        <IconCog />
      </Button>
    </div>
  );
};

stories.add(
  "default",
  () => {
    return (
      <AppHeader
        title={text("title", "Page Title")}
        extras={object("extras", extras)}
        toolbarItems={toolbarItems}
      />
    );
  },
  {
    info: {
      text:
        "A component that renders a masthead with a title, as well as various toolbar items that you can render by providing a render function."
    }
  }
);
