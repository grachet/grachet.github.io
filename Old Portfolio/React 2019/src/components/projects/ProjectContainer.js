import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import ProjectCard from './ProjectCard'
import Grid from "@material-ui/core/Grid/Grid";
import styles from './style/projectStyle';


class ProjectContainer extends React.Component {

  render() {

    const {classes, textConst} = this.props;
    let projets = [1, 2, 3, 4, 5];

    return (

      <Grid className={classes.rootProject} justify={"center"} container>

        <Grid item xs={11}>
          <Grid container spacing={40}>
            {textConst.projects.map(project => <Grid item lg={4} md={4} sm={6} xs={12}>
              <ProjectCard project={project}/>
            </Grid>)}
          </Grid>
        </Grid>
      </Grid>
    )
  }
}


export default withStyles(styles)(ProjectContainer);


