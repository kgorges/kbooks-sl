import _ from "lodash";
import React from "react";
import renderer from "react-test-renderer";
import Routes from "../../../routes";
import { createShallow } from "@material-ui/core/test-utils";
import { StyledNavDrawer } from "./NavDrawer";

describe("<NavDrawer />", () => {
  let shallow;
  let wrapper;

  const mockCloseNavDrawer = jest.fn();

  beforeEach(async () => {
    mockCloseNavDrawer.mockReset();
    shallow = createShallow();
    wrapper = shallow(
      <StyledNavDrawer open={false} closeNavDrawer={mockCloseNavDrawer} />
    );
    wrapper = wrapper.dive();
  });

  afterEach(() => {});

  it("should render without crashing", () => {
    expect(1).toEqual(1);
  });

  it("should render a closed Drawer", () => {
    const drawer = wrapper.find("WithStyles(Drawer)");
    expect(drawer.length).toEqual(1);
    expect(drawer.prop("open")).toBeFalsy();
  });

  it("should render an open Drawer", () => {
    wrapper = shallow(
      <StyledNavDrawer open={true} closeNavDrawer={mockCloseNavDrawer} />
    );
    wrapper = wrapper.dive();
    const drawer = wrapper.find("WithStyles(Drawer)");
    expect(drawer.length).toEqual(1);
    expect(drawer.prop("open")).toBeTruthy();
  });

  it("should render a List", () => {
    expect(
      wrapper.find("WithStyles(Drawer)").find("WithStyles(List)").length
    ).toEqual(1);
  });

  it("should render # of route menu list items", () => {
    expect(
      wrapper
        .find("WithStyles(Drawer)")
        .find("WithStyles(List)")
        .find("WithStyles(ListItem)").length
    ).toEqual(_.filter(Routes, { navDrawer: true }).length);
  });

  it("should render correct route menu list items", () => {
    _.map(_.filter(Routes, { navDrawer: true }), (r, i) => {
      expect(
        wrapper
          .find("WithStyles(Drawer)")
          .find("WithStyles(List)")
          .find("WithStyles(ListItem)")
          .at(i)
          .find("WithStyles(ListItemText)")
          .prop("primary")
      ).toEqual(r.navDrawerLabel);
      expect(
        wrapper
          .find("WithStyles(Drawer)")
          .find("WithStyles(List)")
          .find("WithStyles(ListItem)")
          .at(i)
          .find("WithStyles(ListItemIcon)").length
      ).toEqual(1);
      expect(
        wrapper
          .find("WithStyles(Drawer)")
          .find("WithStyles(List)")
          .find("WithStyles(ListItem)")
          .at(i)
          .prop("to")
      ).toEqual(r.path);
    });
  });

  it("should dispatch a navCloseDrawer action on drawer click event", () => {
    wrapper.find("#drawer-wrapper").simulate("click");
    expect(mockCloseNavDrawer).toHaveBeenCalledTimes(1);
  });

  it("should dispatch a navCloseDrawer action on drawer close event", () => {
    wrapper = wrapper.find("WithStyles(Drawer)");
    wrapper.prop("onClose")();
    expect(mockCloseNavDrawer).toHaveBeenCalledTimes(1);
  });
});
