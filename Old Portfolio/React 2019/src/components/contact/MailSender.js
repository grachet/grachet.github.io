import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import styles from "./style/contactStyle"
import Typography from "@material-ui/core/Typography/Typography";
import Grid from "@material-ui/core/Grid/Grid";
import TitleIcon from "@material-ui/icons/FlightTakeoffRounded";
import Button from '@material-ui/core/Button';
import {TextField} from 'formik-material-ui';
import {FastField, Formik} from "formik";
import * as Yup from "yup";
import CircularProgress from '@material-ui/core/CircularProgress';
import IconButton from "@material-ui/core/IconButton/IconButton";
import Snackbar from "@material-ui/core/Snackbar/Snackbar";
import {database} from "../../backend/config";
import CloseIcon from "@material-ui/icons/Close";
import ReactGA from "react-ga";

var uniqid = require('uniqid');

class MailSender extends React.Component {

  state = {
    openAlert: false,
  };

  closeAlert = () => {
    this.setState({openAlert: false, messageAlert: null})
  }

  openAlert = (messageAlert) => {
    this.setState({openAlert: true, messageAlert})
  }

  render() {

    const {classes, textConst} = this.props;

    return (
      <div className={classes.mbl}>
        <Typography className={classes.mbmd} variant="h5">
          {textConst.mail.title}
          <TitleIcon className={classes.mlmd}/>
        </Typography>
        <Formik
          validateOnBlur
          validateOnChange
          initialValues={{mail: '', message: '', subject: ''}}
          validationSchema={Yup.object().shape(
            {
              mail: Yup.string()
                .email('Invalid email')
                .required('Required'), message: Yup.string()
                .min(2, 'Too Short!')
                .max(50, 'Too Long!')
                .required('Required'), subject: Yup.string()
                .min(2, 'Too Short!')
                .max(50, 'Too Long!')
                .required('Required'),
            }
          )}
          onSubmit={(values, {setSubmitting, resetForm}) => {

              let id = uniqid();
              let timestamp = new Date().getTime();
              database.ref('messages/' + id).set({...values, timestamp}).catch(err => console.error(err));
              ReactGA.pageview(window.location.pathname + window.location.search + "sendMail");
            setTimeout(() => {
              setSubmitting(false);
              this.openAlert(textConst.mail.sendWorking);
              resetForm();
            }, 1000);
          }}
        >
          {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting,
              /* and other goodies */
            }) => (
            <form onSubmit={handleSubmit}>
              <Grid spacing={8} container>
                <Grid item xs={12} md={6}>
                  <FastField
                    required
                    fullWidth
                    variant="filled"
                    component={TextField}
                    name={"mail"}
                    label={textConst.mail.mailInput}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <FastField
                    required
                    fullWidth
                    variant="filled"
                    component={TextField}
                    name={"subject"}
                    label={textConst.mail.subjectInput}
                  />
                </Grid>
                <Grid item xs={12}>
                  <FastField
                    required
                    fullWidth
                    variant="filled"
                    component={TextField}
                    name={"message"}
                    label={textConst.mail.messageInput}
                    rows={4}
                    multiline
                  />
                </Grid>
              </Grid>
              <Button type="submit" disabled={isSubmitting}
                      className={classes.mtmd}>{textConst.mail.buttonSend}{isSubmitting &&
              <CircularProgress size={16} className={classes.mlmd}/>} </Button>
            </form>)}
        </Formik>
        <Snackbar
          style={{zIndex: 100000}}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          open={this.state.openAlert}
          autoHideDuration={2000}
          onClose={() => this.closeAlert()}
          ContentProps={{
            'aria-describedby': 'message-id',
          }}
          message={<span>{this.state.messageAlert}</span>}
          action={
            <IconButton
              key="close"
              aria-label="Close"
              color="inherit"
              className={"closeSnack"}
              onClick={() => this.closeAlert()}
            >
              <CloseIcon/>
            </IconButton>
          }
        />
      </div>
    );
  }
}

MailSender.propTypes = {
  classes: PropTypes.object,
};

export default withStyles(styles)(MailSender);
