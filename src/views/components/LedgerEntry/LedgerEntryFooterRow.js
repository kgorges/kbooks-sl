import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import TablePagination from "@material-ui/core/TablePagination";
import { ledgerEntryOperations } from "../../../state/ducks/ledgerEntry";

const styles = theme => ({});

class LedgerEntryFooterRow extends Component {
  handleChangePage = (event, page) => {
    this.props.changePage(page);
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
  changePage: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  currentPage: state.ledgerEntry.ui.currentPage,
  rowCount: state.ledgerEntry.data.items.length,
});

const mapDispatchToProps = {
  changePage: ledgerEntryOperations.changePage,
};

export const StyledLedgerEntryFooterRow = withStyles(styles)(
  LedgerEntryFooterRow
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StyledLedgerEntryFooterRow);
