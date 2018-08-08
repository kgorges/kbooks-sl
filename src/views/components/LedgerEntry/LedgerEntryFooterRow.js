import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import TablePagination from "@material-ui/core/TablePagination";

const styles = theme => ({});

class LedgerEntryFooterRow extends Component {
  handleChangePage = (event, page) => {
    console.log("Changing Page");
  };

  handleChangeRowsPerPage = event => {
    console.log("Changing rows per page");
  };

  render() {
    const { currentPage, rowCount } = this.props;

    return (
      <TablePagination
        component="div"
        page={currentPage}
        count={rowCount}
        rowsPerPage={5}
        onChangePage={this.handleChangePage}
        onChangeRowsPerPage={this.handleChangeRowsPerPage}
      />
    );
  }
}

LedgerEntryFooterRow.propTypes = {
  classes: PropTypes.object.isRequired,
  currentPage: PropTypes.number.isRequired,
  rowCount: PropTypes.number.isRequired,
};

const mapStateToProps = state => ({
  currentPage: state.ledgerEntry.ui.currentPage,
  rowCount: state.ledgerEntry.data.items.length,
});

/*
const mapDispatchToProps = {
  fetchList: ledgerEntryOperations.fetchList,
};
*/

export const StyledLedgerEntryFooterRow = withStyles(styles)(
  LedgerEntryFooterRow
);

export default connect(
  mapStateToProps,
  null
)(StyledLedgerEntryFooterRow);
