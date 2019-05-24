import React from "react";
import { shallow } from "enzyme";

import UIText from "./UIText";

describe("UIText", () => {
  it("matches snapshot", () => {
    const aUIText = shallow(<UIText />);
    expect(aUIText).toMatchSnapshot();
  });
});