import { storiesOf } from "@storybook/polymer";
// import { boolean, text } from "@storybook/addon-knobs/polymer";
// import "./app-footer";

const stories = storiesOf("Components|gm-ui-app-footer", module);

stories.add(
  "default",
  () => "<gm-ui-app-footer />"
  // () => (
  //   <gm-ui-app-footer
  //     copyrightText={text("copyrightText")}
  //     useExternalLinks={boolean("useExternalLinks", true)}
  //   />
  // ),
  // {
  //   info: {
  //     text: `AppFooter for Grey Matter products.`,
  //   },
  // },
);
