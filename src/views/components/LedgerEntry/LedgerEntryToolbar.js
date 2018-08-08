import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import Toolbar from "@material-ui/core/Toolbar";
import Tooltip from "@material-ui/core/Tooltip";
import IconButton from "@material-ui/core/IconButton";
// import Typography from "@material-ui/core/Typography";
import AddIcon from "@material-ui/icons/Add";
import FilterListIcon from "@material-ui/icons/FilterList";
// import DeleteIcon from "@material-ui/icons/Delete";

const styles = theme => ({
  root: {
    paddingRight: theme.spacing.unit,
  },
  avatar: {
    marginRight: 16,
    backgroundColor: "#00AA00",
  },
  spacer: {
    flex: "1 1 100%",
  },
  actions: {
    color: theme.palette.text.secondary,
  },
  title: {
    flex: "0 0 auto",
  },
});

class LedgerEntryToolbar extends Component {
  render() {
    const { classes, numberOfSelected } = this.props;

    return (
      <Toolbar className={classes.root}>
        <div className={classes.title}>
          <Avatar aria-label="General Ledger" className={classes.avatar}>
            GL
          </Avatar>
        </div>
        <div className={classes.title}>
          <Typography variant="body2">General Ledger</Typography>
          <Typography variant="caption">
            {numberOfSelected} Rows Selected
          </Typography>
        </div>
        <div className={classes.spacer} />
        <div className={classes.action}>
          <Tooltip title="Add">
            <IconButton aria-label="Add">
              <AddIcon />
            </IconButton>
          </Tooltip>
        </div>
        <div className={classes.action}>
          <Tooltip title="Filter">
            <IconButton aria-label="Filter">
              <FilterListIcon />
            </IconButton>
          </Tooltip>
        </div>
      </Toolbar>
    );
  }
}

LedgerEntryToolbar.propTypes = {
  classes: PropTypes.object.isRequired,
  numberOfSelected: PropTypes.number.isRequired,
};

LedgerEntryToolbar.defaultProps = {
  numberOfSelected: 0,
};

const mapStateToProps = state => ({
  numberOfSelected: state.ledgerEntry.ui.selected.length,
  //? state.ledgerEntry.list.selected.length
  //: 0,
});

/*
const mapDispatchToProps = {
  fetchList: ledgerEntryOperations.fetchList,
};
*/

export const StyledLedgerEntryToolbar = withStyles(styles)(LedgerEntryToolbar);

export default connect(
  mapStateToProps,
  null
)(StyledLedgerEntryToolbar);
