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

  it("should render a card header", async () => {
    expect(wrapper.find("WithStyles(CardHeader)").length).toEqual(1);
  });

  it("should render an avatar in the card header", async () => {
    expect(wrapper.find("WithStyles(CardHeader)").prop("avatar")).toBeDefined();
  });

  it("should render the correct title in the card header", async () => {
    expect(wrapper.find("WithStyles(CardHeader)").prop("title")).toEqual(
      "General Ledger"
    );
  });

  it("should render the a subheader with no entries selected", async () => {
    expect(wrapper.find("WithStyles(CardHeader)").prop("subheader")).toEqual(
      "0 Rows Selected"
    );
  });

  it("should render the toolbar in the card header action", async () => {
    wrapper = shallow(wrapper.find("WithStyles(CardHeader)").prop("action"));
    expect(wrapper.find("Toolbar").length).toEqual(1);
  });

  it("should render the add button in the card header", async () => {
    wrapper = shallow(wrapper.find("WithStyles(CardHeader)").prop("action"));
    expect(wrapper.find("WithStyles(Tooltip)").at(0).length).toEqual(1);
    expect(
      wrapper
        .find("WithStyles(Tooltip)")
        .at(0)
        .prop("title")
    ).toEqual("Add");
    expect(
      wrapper
        .find("WithStyles(Tooltip)")
        .at(0)
        .find("WithStyles(IconButton)").length
    ).toEqual(1);
  });

  it("should render the filter button in the card header", async () => {
    wrapper = shallow(wrapper.find("WithStyles(CardHeader)").prop("action"));
    expect(wrapper.find("WithStyles(Tooltip)").at(1).length).toEqual(1);
    expect(
      wrapper
        .find("WithStyles(Tooltip)")
        .at(1)
        .prop("title")
    ).toEqual("Filter");
    expect(
      wrapper
        .find("WithStyles(Tooltip)")
        .at(1)
        .find("WithStyles(IconButton)").length
    ).toEqual(1);
  });
});
