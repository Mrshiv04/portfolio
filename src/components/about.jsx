import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class About extends Component {
  render() {
    return (
      <div className='about-body'>
        <Grid className='about-grid'>
          <Cell col={6}>
            <h2>About Me</h2>
            <p>
              I’m Shivam a maker with an education in engineering in Computer
              Science & Engineering and a passion for experimenting, learning
              new skills and building cool things. An energetic and hardworking
              professional having knowledge of JavaScript, ReactJs, Core Java,
              HTML,MongoDB and MySQL with experience of 2.7 years and want to
              work in a challenging environment, open to learning new skills and
              using new systems involved in mentioned area. I have extremely
              good problem solving skills and good knowledge of OOPs concept.
            </p>
            <p>I can take a bullet for a plate of Chicken Biryani!</p>
          </Cell>
          <Cell col={6} style={{ paddingLeft: '0px' }}>
            <img
              src='https://scontent.fccu1-1.fna.fbcdn.net/v/t1.0-9/38437703_1873226879401129_5732141998387757056_o.jpg?_nc_cat=109&_nc_sid=a4a2d7&_nc_ohc=ienFeQSoXQkAX8EG859&_nc_ht=scontent.fccu1-1.fna&oh=e9111a1d1adb47bb05e9193250018964&oe=5F5EA9AB'
              alt=''
              style={{ height: '520px', borderRadius: '10px' }}
            />
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default About;
