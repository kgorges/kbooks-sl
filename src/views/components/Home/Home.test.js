import _ from "lodash";
import React from "react";
import renderer from "react-test-renderer";
import { createShallow } from "@material-ui/core/test-utils";
import { StyledHome } from "./Home";

describe("<Home />", () => {
  let shallow;
  let wrapper;

  beforeEach(async () => {
    shallow = createShallow();
    wrapper = shallow(<StyledHome />);
  });

  afterEach(() => {});

  it("should render a paper", async () => {
    wrapper = wrapper.dive(); // Skip with styled component
    expect(wrapper.find("WithStyles(Paper)").length).toEqual(2);
  });
});
