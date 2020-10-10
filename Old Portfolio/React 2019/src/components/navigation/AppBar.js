import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import withWidth, {isWidthUp} from '@material-ui/core/withWidth';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import styles from './style/navigationStyle'
import Avatar from '@material-ui/core/Avatar';
import IconButton from "@material-ui/core/IconButton/IconButton";
import Hidden from "@material-ui/core/Hidden";

class ButtonAppBar extends React.Component {

  render() {
    const {classes, tabIndex, onChangeTab, isEnglish, textConst} = this.props;

    return (
      <AppBar
        elevation={0}
        className={classes.root} position={isWidthUp('sm', this.props.width) ? "sticky" : "fixed"}>
        <Toolbar>
        <span className={classes.flexGrow}>
          <Hidden xsDown>
             <img height={50} src={process.env.PUBLIC_URL + "/images/logo_gr.png"}/>
          </Hidden>
        </span>
          <Tabs
            value={tabIndex} mai
            onChange={onChangeTab}
            className={classes.tab}
          >
            <Tab label={textConst.buttonME}/>
            <Tab label={textConst.buttonProject}/>
            <Tab label={textConst.buttonContact}/>
          </Tabs>
          <IconButton
            color={"secondary"}
            onClick={this.props.changeLanguage}
          >
            {/* <Typography color={"secondary"} variant="subtitle2">
              {isEnglish ? "EN" : "FR"}
            </Typography>*/}
            <img alt="flag" className={classes.flag}
                    src={process.env.PUBLIC_URL + "/images/" + (isEnglish ? "ukFlag" : "frFlag") + ".svg"}/>
          </IconButton>
        </Toolbar>
      </AppBar>
    );
  }
}

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(withWidth()(ButtonAppBar));