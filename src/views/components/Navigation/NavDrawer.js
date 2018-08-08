import _ from "lodash";
import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import { navigationOperations } from "../../../state/ducks/navigation";
import Routes from "../../../routes";

const styles = theme => ({
  drawer: {
    width: 240,
  },
  drawerHeader: {
    ...theme.mixins.toolbar,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    paddingLeft: 24,
  },
});

class NavDrawer extends Component {
  render() {
    const { classes } = this.props;

    const renderIcon = c => {
      const IconComp = c;
      return <IconComp />;
    };

    return (
      <div>
        <Drawer
          classes={{ paper: classes.drawer }}
          open={this.props.open}
          onClose={() => this.props.closeNavDrawer()}
        >
          <div
            id="drawer-wrapper"
            tabIndex={0}
            role="button"
            onClick={() => this.props.closeNavDrawer()}
          >
            <div className={classes.drawerHeader}>
              <Typography variant="title">KBooks</Typography>
              <Typography variant="caption">v0.0.1</Typography>
            </div>
            <Divider />
            <List component="nav">
              {_.map(_.filter(Routes, { navDrawer: true }), (r, i) => {
                return (
                  <ListItem key={i} component={Link} to={r.path} button>
                    <ListItemIcon>{renderIcon(r.navDrawerIcon)}</ListItemIcon>
                    <ListItemText primary={r.navDrawerLabel} />
                  </ListItem>
                );
              })}
            </List>
          </div>
        </Drawer>
      </div>
    );
  }
}

NavDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
  open: PropTypes.bool.isRequired,
  closeNavDrawer: PropTypes.func.isRequired,
};

export const StyledNavDrawer = withStyles(styles)(NavDrawer);

const mapStateToProps = state => ({
  open: state.navigation.drawer.open,
});

const mapDispatchToProps = {
  closeNavDrawer: navigationOperations.closeNavDrawer,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StyledNavDrawer);
