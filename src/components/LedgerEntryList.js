import _ from "lodash";
import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
/*import Amplify, { API } from "aws-amplify";
import aws_exports from "../aws-exports";

Amplify.configure(aws_exports);

let apiName = "sampleCloudApi";
let path = "/items";
*/

const styles = theme => ({
  root: {
    width: "100%",
    marginTop: theme.spacing.unit * 3,
    overflowX: "auto",
  },
  table: {
    minWidth: 700,
  },
});

class LedgerEntryList extends Component {
  render() {
    const { classes, entries } = this.props;

    return (
      <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>Date</TableCell>
              <TableCell>Description</TableCell>
              <TableCell>Account</TableCell>
              <TableCell>Subaccount</TableCell>
              <TableCell numeric>Credit</TableCell>
              <TableCell numeric>Debit</TableCell>
              <TableCell numeric>Balance</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {_.map(entries, n => {
              return (
                <TableRow key={n.id}>
                  <TableCell component="th" scope="row">
                    {n.Date}
                  </TableCell>
                  <TableCell>{n.Description}</TableCell>
                  <TableCell>{n.Account}</TableCell>
                  <TableCell>{n.SubAccount}</TableCell>
                  <TableCell numeric>{n.Credit}</TableCell>
                  <TableCell numeric>{n.Debit}</TableCell>
                  <TableCell numeric>{n.Balance}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </Paper>
    );
  }
}

LedgerEntryList.propTypes = {
  classes: PropTypes.object.isRequired,
  entries: PropTypes.array.isRequired,
};

export default withStyles(styles)(LedgerEntryList);
