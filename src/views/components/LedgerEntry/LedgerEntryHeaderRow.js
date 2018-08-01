import _ from "lodash";
import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import Checkbox from "@material-ui/core/Checkbox";

const styles = theme => ({});

class LedgerEntryHeaderRow extends Component {
  render() {
    // const { classes } = this.props;

    const headers = [
      "Date",
      "Description",
      "Account",
      "Subaccount",
      "Credit",
      "Debit",
      "Balance",
    ];

    return (
      <TableHead>
        <TableRow>
          <TableCell key={-1} padding="checkbox">
            <Checkbox />
          </TableCell>
          {_.map(headers, (h, i) => {
            return <TableCell key={i}>{h}</TableCell>;
          })}
        </TableRow>
      </TableHead>
    );
  }
}

LedgerEntryHeaderRow.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LedgerEntryHeaderRow);
