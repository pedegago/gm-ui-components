import React from "react";
import { shallow } from "enzyme";

import Subhead from "./Subhead";

describe("Subhead", () => {
  it("matches snapshot", () => {
    const aSubhead = shallow(<Subhead />);
    expect(aSubhead).toMatchSnapshot();
  });
});