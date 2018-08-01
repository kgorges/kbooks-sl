import _ from "lodash";
import React from "react";
import renderer from "react-test-renderer";
import { createShallow } from "@material-ui/core/test-utils";
import LedgerEntryFooterRow from "./LedgerEntryFooterRow";

describe("<LedgerEntryFooterRow />", () => {
  let shallow;
  let wrapper;

  beforeEach(async () => {
    shallow = createShallow();
    wrapper = shallow(<LedgerEntryFooterRow />);
    wrapper = wrapper.dive();
  });

  afterEach(() => {});

  it("should render a table pagination", async () => {
    expect(wrapper.find("WithStyles(TablePagination)").length).toEqual(1);
  });

  it("should render a card action", async () => {
    expect(
      wrapper.find("WithStyles(TablePagination)").prop("component")
    ).toEqual("div");
  });
});
