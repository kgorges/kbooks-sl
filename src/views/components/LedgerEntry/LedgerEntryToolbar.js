import React, { Component } from "react";
// import { connect } from "react-redux";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import CardHeader from "@material-ui/core/CardHeader";
import Avatar from "@material-ui/core/Avatar";
import Toolbar from "@material-ui/core/Toolbar";
import Tooltip from "@material-ui/core/Tooltip";
import IconButton from "@material-ui/core/IconButton";
// import Typography from "@material-ui/core/Typography";
import AddIcon from "@material-ui/icons/Add";
import FilterListIcon from "@material-ui/icons/FilterList";
// import DeleteIcon from "@material-ui/icons/Delete";

const styles = theme => ({});

class LedgerEntryToolbar extends Component {
  render() {
    const { classes } = this.props;

    return (
      <CardHeader
        avatar={
          <Avatar aria-label="General Ledger" className={classes.avatar}>
            GL
          </Avatar>
        }
        action={
          <Toolbar>
            <Tooltip title="Add">
              <IconButton aria-label="Add">
                <AddIcon />
              </IconButton>
            </Tooltip>
            <Tooltip title="Filter">
              <IconButton aria-label="Filter">
                <FilterListIcon />
              </IconButton>
            </Tooltip>
          </Toolbar>
        }
        title="General Ledger"
        subheader="0 Rows Selected"
      />
    );
  }
}

LedgerEntryToolbar.propTypes = {
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

export default withStyles(styles)(LedgerEntryToolbar);
/*
export default connect(
  null,
  null
)(StyledLedgerEntryToolbar);*/
