import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class About extends Component {
  render() {
    return (
      <div className='about-body'>
        <Grid className='about-grid'>
          <Cell col={6}>
            <h2>About Me</h2>
            {/* <p>
              Hi I'm Shivam, a 26 year old techie working in bengaluru from the
              past 2.6 years, born and brought up in kolkata West bengal, I've
              done my schooling from St Thomas' Boys' School and B.Tech in
              Computer Science & Engineering from St Thomas College of
              Engineering & Technology. I never thought of becoming an engineer,
              but,here i am
            </p> */}
            <p>
              I’m Shivam a maker with an education in engineering in Computer
              Science & Engineering and a passion for experimenting, learning
              new skills and building cool things. Like other kids, i too had
              many aspirations, one day i wanted to be an astraunaut, on the
              other i saw myself the best cricketer in the world, But i always
              beleived in "Go with the flow" philosophy. what ever came to
            </p>
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
