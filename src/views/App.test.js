import React from "react";
import renderer from "react-test-renderer";
import { createShallow } from "@material-ui/core/test-utils";
import App from "./App";

describe("<App />", () => {
  let shallow;
  let wrapper;

  beforeEach(async () => {
    shallow = createShallow();
    wrapper = shallow(<App />);
  });

  afterEach(() => {});

  it("should render without crashing", () => {
    expect(1).toEqual(1);
  });
});
