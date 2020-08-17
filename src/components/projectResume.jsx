import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class ProjectResume extends Component {
  render() {
    return (
      <Grid>
        <Cell col={12}>
          <h4 style={{ marginTop: '0px' }}>{this.props.projectName}</h4>
          <p>
            <b>Technologies Used:</b>
            {this.props.technologiesUsed}
          </p>
          <p>
            <b>Description:</b>
            {this.props.projectDescription}
          </p>
          <p>
            <b>Roles & Responsibilities:</b>
            {this.props.roles}
          </p>
        </Cell>
      </Grid>
    );
  }
}

export default ProjectResume;
