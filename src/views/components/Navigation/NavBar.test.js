import React from "react";
import renderer from "react-test-renderer";
import { createShallow } from "@material-ui/core/test-utils";
import { StyledNavBar } from "./NavBar";

describe("<NavBar />", () => {
  let shallow;
  let wrapper;

  const mockOpenNavDrawer = jest.fn();

  beforeEach(async () => {
    mockOpenNavDrawer.mockReset();
    shallow = createShallow();
    wrapper = shallow(<StyledNavBar openNavDrawer={mockOpenNavDrawer} />);
    wrapper = wrapper.dive();
  });

  afterEach(() => {});

  it("should render without crashing", () => {
    expect(1).toEqual(1);
  });

  it("should render a NavDrawer", () => {
    const drawer = wrapper.find("Connect(WithStyles(NavDrawer))");
    expect(drawer.length).toEqual(1);
  });

  it("should dispatch mock function upon hamburger button click", () => {
    wrapper.find("WithStyles(IconButton)").simulate("click");
    expect(mockOpenNavDrawer).toHaveBeenCalledWith(true);
  });
});
