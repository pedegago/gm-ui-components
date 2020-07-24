import React from "react";

import Spinner from "./Spinner";

describe("Spinner", () => {
  it("matches snapshot", () => {
    const aSpinner = shallow(<Spinner />);
    expect(aSpinner).toMatchSnapshot();
  });

  it("renders the correct styles when passed a vertical prop", () => {
    const aSpinner = mount(<Spinner orientation="vertical" />);
    const SpinnerSVG = aSpinner.find("LoadingSpinner").find("SpinnerSVG");
    expect(SpinnerSVG).toHaveStyleRule(
      "width",
      "6rem"
    );
    expect(SpinnerSVG).toHaveStyleRule(
      "height",
      "6rem"
    );
  });

  it("renders the correct styles when passed a horizontal prop", () => {
    const aSpinner = mount(<Spinner orientation="horizontal" />);
    const SpinnerSVG = aSpinner.find("LoadingSpinner").find("SpinnerSVG");
    expect(SpinnerSVG).toHaveStyleRule(
      "width",
      "2rem"
    );
    expect(SpinnerSVG).toHaveStyleRule(
      "height",
      "2rem"
    );
  });
});
