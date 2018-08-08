import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Typography from "@material-ui/core/Typography";
import { dictionary } from "../../../utilities";
import NavDrawer from "./NavDrawer";
import { navigationOperations } from "../../../state/ducks/navigation";

const styles = {
  menuButton: { marginLeft: -12, marginRight: 20 },
};

class NavBar extends Component {
  render() {
    const { classes, openNavDrawer } = this.props;
    return (
      <div>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              className={classes.menuButton}
              onClick={() => openNavDrawer(true)}
              color="inherit"
              aria-label="Menu"
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="title" color="inherit" noWrap={true}>
              {dictionary.title}
            </Typography>
          </Toolbar>
        </AppBar>
        <NavDrawer />
      </div>
    );
  }
}

NavBar.propTypes = {
  classes: PropTypes.object.isRequired,
  openNavDrawer: PropTypes.func.isRequired,
};

const mapDispatchToProps = {
  openNavDrawer: navigationOperations.openNavDrawer,
};

export const StyledNavBar = withStyles(styles)(NavBar);
export default connect(
  null,
  mapDispatchToProps
)(StyledNavBar);
