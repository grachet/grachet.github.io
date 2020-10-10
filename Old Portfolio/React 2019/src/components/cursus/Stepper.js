import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Typography from '@material-ui/core/Typography';
import styles from "./style/cursusStyle"
import Paper from '@material-ui/core/Paper';
import SchoolIcon from '@material-ui/icons/School'
import Icon from "@material-ui/core/Icon/Icon";

class StepperForm extends React.Component {

  render() {

    const {classes, data, title, activeYear, isCompany} = this.props;

    return (
      <Paper>
        {isCompany ? <Icon fontSize={"large"}
                           className={'fas fa-building ' + classes.floatRight + " " + classes.mrmd + " " + classes.mtmd}
                           color={"primary"}/>
          : <SchoolIcon fontSize={"large"} className={classes.floatRight + " " + classes.mrmd + " " + classes.mtmd}
                        color={"primary"}/>
        }
        <Stepper className={classes.stepper} nonLinear activeStep={Object.keys(data).sort((a, b) => b - a).indexOf("" + activeYear)}
                 orientation="vertical">
          {Object.keys(data).sort((a, b) => b - a).map((year, index) => <Step key={index}
                                                                              classes={{iconContainer: classes.mtmd}}
                                                                              key={index}
                                                                              className={classes.step}
                                                                              onClick={() => this.props.setYear(year)}>
            {Array.isArray(data[year].description) ? data[year].description.map((date, index) => [
                <StepLabel key={1}
                           icon={"" + year}
                           StepIconProps={{classes: {text: classes.iconYear}}}>
                  {data[year].name[index]}
                </StepLabel>,
                <StepContent
                  className={index !== data[year].description.length - 1 && classes.mbmd} key={2}>
                  <Typography>{data[year].description[index]}</Typography>
                </StepContent>]) :
              [<StepLabel key={1}
                          icon={"" + year}
                          StepIconProps={{classes: {text: classes.iconYear}}}>
                {data[year].name}
              </StepLabel>,
                <StepContent key={2}>
                  <Typography>{data[year].description}</Typography>
                </StepContent>]
            }
          </Step>)}
        </Stepper>
      </Paper>
    );
  }
}

StepperForm.propTypes = {
  classes: PropTypes.object,
};

export default withStyles(styles)(StepperForm);
