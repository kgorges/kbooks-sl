import _ from "lodash";
import React from "react";
import renderer from "react-test-renderer";
import { createShallow } from "@material-ui/core/test-utils";
// import { shallow, mount } from "enzyme";
// import { API } from "aws-amplify";
import LedgerEntryList from "./LedgerEntryList";

describe("<LedgerEntryList />", () => {
  let shallow;
  let wrapper;
  let testData;

  beforeEach(async () => {
    testData = [
      {
        id: 1,
        Date: "2018-01-01",
        Description: "D1",
        Account: "A1",
        SubAccount: "SA1",
        Credit: 0,
        Debit: 0,
        Balance: 0,
      },
      {
        id: 2,
        Date: "2018-01-02",
        Description: "D2",
        Account: "A2",
        SubAccount: "SA2",
        Credit: 0,
        Debit: 0,
        Balance: 0,
      },
    ];

    // Provide mock data
    /*
    API.get = jest.fn().mockImplementation((apiName, path) => {
      return Promise.resolve({
        Items: testData,
      });
    });
    */

    shallow = createShallow();
    wrapper = shallow(<LedgerEntryList entries={testData} />);
    wrapper = wrapper.dive();
  });

  afterEach(() => {});

  it("should render a paper", async () => {
    expect(wrapper.find("WithStyles(Paper)").length).toEqual(1);
  });

  it("should render a table", async () => {
    expect(wrapper.find("WithStyles(Table)").length).toEqual(1);
  });

  it("should render the header row", async () => {
    expect(
      wrapper
        .find("WithStyles(Table)")
        .find("WithStyles(TableHead)")
        .find("WithStyles(TableRow)").length
    ).toEqual(1);
  });

  it("should render the right number of header labels", async () => {
    expect(
      wrapper
        .find("WithStyles(Table)")
        .find("WithStyles(TableHead)")
        .find("WithStyles(TableRow)")
        .find("WithStyles(TableCell)").length
    ).toEqual(7);
  });

  it("should render the correct header labels", async () => {
    const colHeaders = [
      "Date",
      "Description",
      "Account",
      "Subaccount",
      "Credit",
      "Debit",
      "Balance",
    ];
    _.map(colHeaders, (h, i) => {
      expect(
        wrapper
          .find("WithStyles(Paper)")
          .find("WithStyles(Table)")
          .find("WithStyles(TableHead)")
          .find("WithStyles(TableRow)")
          .find("WithStyles(TableCell)")
          .at(i)
          .dive()
          .dive()
          .text()
      ).toEqual(h);
    });
  });

  it("renders the correct number of data rows", async () => {
    wrapper.update();
    expect(
      wrapper
        .find("WithStyles(Paper)")
        .find("WithStyles(Table)")
        .find("WithStyles(TableBody)")
        .find("WithStyles(TableRow)").length
    ).toEqual(2);
  });

  it("renders the correct data in the data rows", async () => {
    wrapper.update();
    _.map(testData, (d, i) => {
      const rowWrapper = wrapper
        .find("WithStyles(Paper)")
        .find("WithStyles(Table)")
        .find("WithStyles(TableBody)")
        .find("WithStyles(TableRow)")
        .at(i);
      expect(
        rowWrapper
          .find("WithStyles(TableCell)")
          .at(0)
          .dive()
          .dive()
          .text()
      ).toEqual(d.Date);
      expect(
        rowWrapper
          .find("WithStyles(TableCell)")
          .at(1)
          .dive()
          .dive()
          .text()
      ).toEqual(d.Description);
      expect(
        rowWrapper
          .find("WithStyles(TableCell)")
          .at(2)
          .dive()
          .dive()
          .text()
      ).toEqual(d.Account);
      expect(
        rowWrapper
          .find("WithStyles(TableCell)")
          .at(3)
          .dive()
          .dive()
          .text()
      ).toEqual(d.SubAccount);
      expect(
        Number(
          rowWrapper
            .find("WithStyles(TableCell)")
            .at(4)
            .dive()
            .dive()
            .text()
        )
      ).toEqual(d.Credit);
      expect(
        Number(
          rowWrapper
            .find("WithStyles(TableCell)")
            .at(5)
            .dive()
            .dive()
            .text()
        )
      ).toEqual(d.Debit);
      expect(
        Number(
          rowWrapper
            .find("WithStyles(TableCell)")
            .at(6)
            .dive()
            .dive()
            .text()
        )
      ).toEqual(d.Balance);
    });
  });

  /*

  it("renders the ledger entry dashboard with multiple items", async () => {
    setImmediate(() => {
      wrapper.update();
      console.log(wrapper.html());
      // Expect 3 rows
      expect(wrapper.find("tr").length).toEqual(3);
      // Header row should have 7 columns properly labeled
      expect(wrapper.find("thead").find("th").length).toEqual(7);
      expect(wrapper.find("thead").text()).toEqual(
        "DateDescriptionAccountSubaccountCreditDebitBalance"
      );
      // Data rows should match the mock data
      expect(
        wrapper
          .find("tbody")
          .find("tr")
          .find("th")
          .text()
      ).toEqual("2018-01-01");
    });    
  });*/
});
