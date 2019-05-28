import React from "react";
import { shallow } from "enzyme";

import Headline from "./Headline";

describe("Headline", () => {
  it("matches snapshot", () => {
    const aHeadline = shallow(<Headline />);
    expect(aHeadline).toMatchSnapshot();
  });
});