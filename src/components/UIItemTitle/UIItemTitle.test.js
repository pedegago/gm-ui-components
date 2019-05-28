import React from "react";
import { shallow } from "enzyme";

import UIItemTitle from "./UIItemTitle";

describe("UIItemTitle", () => {
  it("matches snapshot", () => {
    const aUIItemTitle = shallow(<UIItemTitle />);
    expect(aUIItemTitle).toMatchSnapshot();
  });
});
