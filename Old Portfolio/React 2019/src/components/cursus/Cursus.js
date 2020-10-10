import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Grid from "@material-ui/core/Grid/Grid";
import styles from "./style/cursusStyle"
import Stepper from './Stepper'
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/lab/Slider';
import Chip from '@material-ui/core/Chip';
import Hidden from "@material-ui/core/Hidden";

class StepperForm extends React.Component {

  state = {
    activeYear: 2013,
  };

  render() {

    const {classes, textConst} = this.props;

    return (
      <div className={classes.root}>
        <Grid container justify={"center"}>
          <Grid item xs={10}>
            <Grid container justify={"center"} spacing={16}>
              <Grid item className={classes.textCenter} xs={12} sm={10} lg={8}>
                <Typography gutterBottom variant="h4" className={classes.mtl} component="h2">
                  {textConst.titleCursus}
                </Typography>
                <Typography variant={"subheading"} color={"textSecondary"}>
                  {textConst.textCursus}
                </Typography>
              </Grid>
              <Grid item className={classes.textCenter + " " + classes.mtxl} xs={12}>
                <Typography gutterBottom variant="h4" className={classes.mbmd} component="h2">
                  {textConst.titleSkills}
                </Typography>
                {textConst.skills.map(skill => <Typography gutterBottom variant={"subheading"} color={"textPrimary"}>
                    <Chip label={skill.text} className={classes.mbs} variant={"outlined"}/>
                    {skill.skills.map(txt => <Chip label={txt} className={classes.mls + " " + classes.mbs}/>)}
                  </Typography>
                )}
              </Grid>
              <Grid item xs={12} sm={6} md={4} lg={3} className={classes.mtxl}>
                <Hidden smDown>
                  <Typography className={classes.mbmd} id="label">{this.state.activeYear}</Typography>
                  <Slider
                    aria-labelledby="label"
                    min={2013}
                    max={2019}
                    step={1}
                    value={this.state.activeYear}
                    onChange={(event, activeYear) => this.setState({activeYear})}
                  />
                </Hidden>
              </Grid>
              <Grid item xs={false} sm={6} md={8} lg={9}/>
              <Grid item xs={12} md={6}>
                <Stepper setYear={(activeYear) => this.setState({activeYear})} activeYear={this.state.activeYear}
                         data={textConst.formation}/>
              </Grid>
              <Grid item xs={12} md={6}>
                <Stepper setYear={(activeYear) => this.setState({activeYear})} activeYear={this.state.activeYear}
                         isCompany data={textConst.company}/>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    );
  }
}

StepperForm.propTypes = {
  classes: PropTypes.object,
};

export default withStyles(styles)(StepperForm);


