import _ from "lodash";
import React from "react";
import renderer from "react-test-renderer";
import { createShallow } from "@material-ui/core/test-utils";
import { StyledLedgerEntryEditForm as LedgerEntryEditForm } from "./LedgerEntryEditForm";

describe("<LedgerEntryEditForm />", () => {
  let shallow;
  let wrapper;

  beforeEach(async () => {
    shallow = createShallow();
    wrapper = shallow(
      <LedgerEntryEditForm
        isOpen={false}
        entry={{
          id: "1",
          date: "2018-01-01",
          description: "desc",
          account: "acct",
          subledgerAccount: "sla",
          credit: 0,
          debit: 1,
          balance: -1,
        }}
      />
    );
  });

  afterEach(() => {});

  it("should have all props", async () => {
    expect(wrapper.prop("classes")).toBeDefined();
    expect(wrapper.prop("isOpen")).toBeDefined();
  });

  it("should render a dialog", async () => {
    wrapper = wrapper.dive();
    //console.log(wrapper.debug());
    expect(wrapper.find("WithStyles(Dialog)").length).toEqual(1);
  });

  it("should render a date text input", () => {
    wrapper = wrapper.dive();
    const dateWrapper = wrapper
      .find("WithStyles(Dialog)")
      .find("WithStyles(DialogContent)")
      .find("TextField")
      .at(0);
    expect(dateWrapper.prop("label")).toEqual("Date");
    expect(dateWrapper.prop("type")).toEqual("date");
    expect(dateWrapper.prop("value")).toEqual("2018-01-01");
  });

  it("should render a description text input", () => {
    wrapper = wrapper.dive();
    const dateWrapper = wrapper
      .find("WithStyles(Dialog)")
      .find("WithStyles(DialogContent)")
      .find("TextField")
      .at(1);
    expect(dateWrapper.prop("label")).toEqual("Description");
    expect(dateWrapper.prop("type")).toEqual("text");
    expect(dateWrapper.prop("value")).toEqual("desc");
  });
});
