import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import styles from "./style/introStyle"
import WaveAnimation from './WaveAnimation'
import Typography from "@material-ui/core/Typography/Typography";
import Hidden from '@material-ui/core/Hidden';
import IconButton from "@material-ui/core/IconButton";
import Icon from "@material-ui/core/Icon";
import DownloadIcon from "@material-ui/icons/SaveAlt";
import CVPDF from '../../download/CV.pdf';

const SRC_IMAGES = [
  "alt/wave1", "alt/wave2", "alt/wave3", "alt/wave4", "alt/wave5", "alt/wave6", "alt/wave7", "alt/wave8", "wave7", "wave6", "wave5", "wave4", "wave3", "wave2"
]

class HomeIntro extends React.Component {

  state = {
    imgIndex: 0
  }

  componentDidMount() {

    setInterval(() => {
      let newIndex = this.state.imgIndex < SRC_IMAGES.length - 1 ? this.state.imgIndex + 1 : 0;
      this.setState({imgIndex: newIndex})
    }, 150);

  }

  render() {
    const {classes, textConst} = this.props;
    const {imgIndex} = this.state;

    return (
      <div className={classes.root}>
        <div className={classes.contactIcon}>
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
        <WaveAnimation classesParent={classes.canvas + " " + classes.littleWave} color={"#868687"}/>
        <WaveAnimation classesParent={classes.canvas + " " + classes.bigWave} color={"#1B1B1D"}/>
        <Hidden smDown>
          <img className={classes.waveStatic}
               src={process.env.PUBLIC_URL + "/images/intro/" + SRC_IMAGES[imgIndex] + ".svg"}/>
        </Hidden>

        <Hidden only={"xs"}>
          <Typography className={classes.title} variant="h2">
            {textConst.titlePage}
          </Typography>
        </Hidden>

        <Hidden  only={['sm', 'md', 'lg', 'xl']}>
          <Typography className={classes.titleXs} variant="h3">
            {textConst.titlePage}
          </Typography>
        </Hidden>

      </div>
    );
  }
}

HomeIntro.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(HomeIntro);