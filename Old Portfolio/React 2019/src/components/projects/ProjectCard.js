import React from 'react';
import Typography from '@material-ui/core/Typography';
import {withStyles} from '@material-ui/core/styles';
import styles from './style/projectStyle';
import GithubCorner from 'react-github-corner';

class ProjectCard extends React.Component {

  render() {

    const {classes, project} = this.props;

    return (

      <div>
        <div className={classes.imgContainer}>
          <img width={"100%"}
               src={process.env.PUBLIC_URL + "/images/projets/" + project.src + ".jpg"}/>
          <div onClick={() => window.open(project.url)} className={classes.overlayCardImg}/>
          <GithubCorner href={project.githubUrl} size={60} bannerColor={"#1B1B1D"} octoColor={"#F1F1F1"}
                        target={"_blank"}/>
        </div>
        <Typography gutterBottom variant="h5" component="h2">
          {project.name}
        </Typography>
        <Typography variant={"subheading"} color={"textSecondary"}>
          {project.description}
        </Typography>
      </div>
    )

  }
}


export default withStyles(styles)(ProjectCard);


