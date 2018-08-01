import _ from "lodash";
import React from "react";
import renderer from "react-test-renderer";
import { createShallow } from "@material-ui/core/test-utils";
import LedgerEntryToolbar from "./LedgerEntryToolbar";

describe("<LedgerEntryToolbar />", () => {
  let shallow;
  let wrapper;

  beforeEach(async () => {
    shallow = createShallow();
    wrapper = shallow(<LedgerEntryToolbar />);
    wrapper = wrapper.dive();
  });

  afterEach(() => {});

  it("should render a toolbar", async () => {
    expect(wrapper.find("WithStyles(Toolbar)").length).toEqual(1);
  });

  it("should render an avatar in the toolbar", async () => {
    expect(
      wrapper.find("WithStyles(Toolbar)").find("WithStyles(Avatar)").length
    ).toEqual(1);
  });

  it("should render the correct title", async () => {
    expect(
      wrapper
        .find("WithStyles(Toolbar)")
        .find("WithStyles(Typography)")
        .at(0)
        .dive()
        .dive()
        .text()
    ).toEqual("General Ledger");
  });

  it("should render the a subheader with no entries selected", async () => {
    expect(
      wrapper
        .find("WithStyles(Toolbar)")
        .find("WithStyles(Typography)")
        .at(1)
        .dive()
        .dive()
        .text()
    ).toEqual("0 Rows Selected");
  });

  it("should render the add button in the card header", async () => {
    expect(
      wrapper
        .find("WithStyles(Toolbar)")
        .find("WithStyles(Tooltip)")
        .at(0)
        .prop("title")
    ).toEqual("Add");
    expect(
      wrapper
        .find("WithStyles(Toolbar)")
        .find("WithStyles(Tooltip)")
        .at(0)
        .find("WithStyles(IconButton)")
        .find("pure(Add)").length
    ).toEqual(1);
  });

  it("should render the filter button in the card header", async () => {
    expect(
      wrapper
        .find("WithStyles(Toolbar)")
        .find("WithStyles(Tooltip)")
        .at(1)
        .prop("title")
    ).toEqual("Filter");
    expect(
      wrapper
        .find("WithStyles(Toolbar)")
        .find("WithStyles(Tooltip)")
        .at(1)
        .find("WithStyles(IconButton)")
        .find("pure(FilterList)").length
    ).toEqual(1);
  });
});
