import React from "react";

import Breadcrumbs, { Breadcrumb } from "./Breadcrumbs";

const crumbs = [
  "Test 1",
  "Test 2",
  "Test 3",
  "Testing a really long breadcrumb item"
];

describe("Breadcrumbs", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Breadcrumbs crumbs={crumbs} />);
  });
  test("matches snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });
  test("renders Breadcrumb component", () => {
    expect(wrapper.find("Breadcrumb")).toHaveLength(4);
  });
  test("passes hideDelimiter prop to Breadcrumb", () => {
    wrapper = shallow(<Breadcrumbs crumbs={crumbs} hideDelimiter={true} />);
    expect(
      wrapper
        .find("Breadcrumb")
        .at(0)
        .props().hideDelimiter
    ).toBeTruthy();
  });
});

describe("Breadcrumb", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Breadcrumb />);
  });
  test("matches snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("hides delimiter when hideDelimiter prop is passed", () => {
    let options = {
      modifier: ":before"
    };
    wrapper = mount(<Breadcrumb />); // mount in order to use toHaveStyleRule
    expect(wrapper).toHaveStyleRule("visibility", "auto", options);
    wrapper = mount(<Breadcrumb hideDelimiter={true} />);
    expect(wrapper).toHaveStyleRule("visibility", "hidden", options);
  });
});
