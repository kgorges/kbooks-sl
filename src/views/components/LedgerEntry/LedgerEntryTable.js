import _ from "lodash";
import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import LedgerEntryHeaderRow from "./LedgerEntryHeaderRow";
import LedgerEntryRow from "./LedgerEntryRow";

const styles = theme => ({});

class LedgerEntryTable extends Component {
  render() {
    const { entries } = this.props;

    return (
      <Table>
        <LedgerEntryHeaderRow />
        <TableBody>
          {_.map(entries, (e, i) => {
            return <LedgerEntryRow entry={e} key={i} />;
          })}
        </TableBody>
      </Table>
    );
  }
}

LedgerEntryTable.propTypes = {
  classes: PropTypes.object.isRequired,
  entries: PropTypes.array.isRequired,
};

export default withStyles(styles)(LedgerEntryTable);
