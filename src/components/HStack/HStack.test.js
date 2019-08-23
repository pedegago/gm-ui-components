import React from "components/HStack/node_modules/react";

import HStack from "./HStack";

describe("HStack", () => {
  it("matches snapshot", () => {
    const aHStack = shallow(<HStack />);
    expect(aHStack).toMatchSnapshot();
  });
});
