import _ from "lodash";
import moment from "moment";
import uuid from "uuid/v1";
import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import withMobileDialog from "@material-ui/core/withMobileDialog";
import { ledgerEntryOperations } from "../../../state/ducks/ledgerEntry";

const styles = theme => ({
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
});

class LedgerEntryEditForm extends Component {
  state = {
    id: _.get(this.props.entry, "id", "new"),
    date: _.get(this.props.entry, "date", "2000-01-01"),
    description: _.get(this.props.entry, "description", ""),
    account: _.get(this.props.entry, "account", ""),
    subledgerAccount: _.get(this.props.entry, "subledgerAccount", ""),
    amount: _.get(this.props.entry, "amount", 0),
    creationDate: _.get(this.props.entry, "lastUpdateDate", ""),
  };

  handleCancel = () => {
    this.props.closeEditForm();
    /*
    this.setState({
      id: _.get(this.props.entry, "id", "0"),
      date: _.get(this.props.entry, "date", "2000-01-01"),
      description: _.get(this.props.entry, "description", ""),
    });
    */
  };

  handleSave = () => {
    this.props.saveItem({
      ...this.props.entry,
      id: this.state.id === "new" ? uuid() : this.state.id,
      date: this.state.date,
      description: this.state.description,
      account: this.state.account,
      subledgerAccount: this.state.subledgerAccount,
      amount: Number(this.state.amount),
      lastUpdateDate: moment().format("YYYY-MM-DD HH:mm:ss.SSS"),
      lastUpdatedBy: "SYSTEM",
      creationDate:
        this.state.id === "new"
          ? moment().format("YYYY-MM-DD HH:mm:ss.SSS")
          : this.state.creationDate,
      createdBy: this.state.id === "new" ? "SYSTEM" : "SYSTEM",
    });
    // this.props.closeEditForm();
  };

  render() {
    const { classes, fullScreen, isOpen } = this.props;

    const handleChange = field => event => {
      this.setState({
        [field]: event.target.value,
      });
    };

    return (
      <Dialog
        fullScreen={fullScreen}
        open={isOpen}
        onClose={this.handleCancel}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">{"Ledger Entry"}</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="normal"
            id="date"
            label="Date"
            type="date"
            value={this.state.date}
            onChange={handleChange("date")}
            InputLabelProps={{
              shrink: true,
            }}
            className={classes.textField}
          />
          <TextField
            margin="normal"
            id="description"
            label="Description"
            type="text"
            value={this.state.description}
            onChange={handleChange("description")}
            InputLabelProps={{
              shrink: true,
            }}
            className={classes.textField}
          />
          <TextField
            margin="normal"
            id="account"
            label="Account"
            type="text"
            value={this.state.account}
            onChange={handleChange("account")}
            InputLabelProps={{
              shrink: true,
            }}
            className={classes.textField}
          />

          <TextField
            margin="normal"
            id="subledgerAccount"
            label="Subledger Account"
            type="text"
            value={this.state.subledgerAccount}
            onChange={handleChange("subledgerAccount")}
            InputLabelProps={{
              shrink: true,
            }}
            className={classes.textField}
          />

          <TextField
            margin="normal"
            id="amount"
            label="Amount"
            type="number"
            value={this.state.amount}
            onChange={handleChange("amount")}
            InputLabelProps={{
              shrink: true,
            }}
            className={classes.textField}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={this.handleCancel} color="primary">
            Cancel
          </Button>
          <Button onClick={this.handleSave} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
}

LedgerEntryEditForm.propTypes = {
  classes: PropTypes.object.isRequired,
  isOpen: PropTypes.bool.isRequired,
  entry: PropTypes.object,
  closeEditForm: PropTypes.func.isRequired,
  saveItem: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  isOpen: state.ledgerEntry.ui.edit,
  entry: _.find(state.ledgerEntry.data.items, {
    id: state.ledgerEntry.ui.editId,
  }),
});

const mapDispatchToProps = {
  closeEditForm: ledgerEntryOperations.closeEditForm,
  saveItem: ledgerEntryOperations.saveItem,
};

export const StyledLedgerEntryEditForm = withStyles(styles)(
  LedgerEntryEditForm
);

const breakpoint = "xs";
const responsiveStyledLedgerEntryEditForm = withMobileDialog({ breakpoint })(
  StyledLedgerEntryEditForm
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(responsiveStyledLedgerEntryEditForm);
