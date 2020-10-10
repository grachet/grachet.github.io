import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import styles from "./style/contactStyle"
import WaveAnimation from "../homeIntro/WaveAnimation";
import Grid from "@material-ui/core/Grid/Grid";
import ArrowIcon from "@material-ui/icons/KeyboardArrowUp";
import MailSender from "./MailSender"
import Typography from "@material-ui/core/Typography/Typography";
import IconButton from "@material-ui/core/IconButton/IconButton";
import Icon from '@material-ui/core/Icon';
import DownloadIcon from "@material-ui/icons/SaveAlt";
import CVPDF from '../../download/CV.pdf';

class Contact extends React.Component {

  state = {};

  render() {

    const {classes, textConst} = this.props;

    return (
      <div className={classes.root}>
        <div className={classes.spaceDiv}/>
        <WaveAnimation classesParent={classes.waveCanvas} color={"#1B1B1D"}/>

        <Grid container justify={"center"}>
          <Grid item xs={10} md={8} lg={6}>
            <MailSender textConst={textConst}/>
            <Typography className={classes.mtxl} variant="subtitle2" color={"textSecondary"}>
              © 2019 - Guillaume Rachet
              <div>
                <IconButton href={"https://github.com/grachet"} target={"_blank"}>
                  <Icon className={styles.icon + ' fab fa-github'}/>
                </IconButton>
                <IconButton href={"https://www.linkedin.com/in/guillaume-rachet-455084155/"} target={"_blank"}>
                  <Icon className={styles.icon + ' fab fa-linkedin'}/>
                </IconButton>
                <IconButton href={"https://www.facebook.com/profile.php?id=100004437435839"} target={"_blank"}>
                  <Icon className={styles.icon + ' fab fa-facebook'}/>
                </IconButton>
                <IconButton href={CVPDF} target={"_blank"}>
                  <DownloadIcon/>
                </IconButton>
              </div>
            </Typography>
          </Grid>
        </Grid>
        <div className={classes.w100}>
        <div onClick={() => this.props.scrollToTop()} className={classes.arrowBottom}>
          <ArrowIcon fontSize={"inherit"} color={"secondary"}/>
        </div>
        </div>
      </div>
    );
  }
}

Contact.propTypes = {
  classes: PropTypes.object,
};

export default withStyles(styles)(Contact);
