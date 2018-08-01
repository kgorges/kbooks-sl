import React, { Component } from "react";
// import { connect } from "react-redux";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import CardActions from "@material-ui/core/CardActions";
import TablePagination from "@material-ui/core/TablePagination";

const styles = theme => ({});

class LedgerEntryFooterRow extends Component {
  render() {
    const { classes } = this.props;

    return <TablePagination component="div" />;
  }
}

LedgerEntryFooterRow.propTypes = {
  classes: PropTypes.object.isRequired,
};

/*
const mapStateToProps = state => ({
  entries: state.ledgerEntry.list.items,
});

const mapDispatchToProps = {
  fetchList: ledgerEntryOperations.fetchList,
};
*/

export default withStyles(styles)(LedgerEntryFooterRow);
/*
export default connect(
  null,
  null
)(StyledLedgerEntryToolbar);*/
