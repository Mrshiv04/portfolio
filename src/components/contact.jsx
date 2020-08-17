import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';
import '../App.css';
import profile from './temp.jpg';

class Contact extends Component {
  render() {
    return (
      <div className='contact-body'>
        <Grid className='contact-grid'>
          <Cell col={6}>
            <h2>Shivam Shah</h2>
            <img
              src={profile}
              alt='profilepic'
              style={{ width: '200px', borderRadius: '5px' }}
            />
            <p style={{ width: '75%', margin: 'auto', paddingTop: '1em' }}>
              An energetic and hardworking professional having knowledge of
              JavaScript, ReactJs, Core Java, HTML,MongoDB and MySQL with
              experience of 2.7 years and want to work in a challenging
              environment, open to learning new skills and using new systems
              involved in mentioned area. I have extremely good problem solving
              skills and good knowledge of OOPs concept.
            </p>
          </Cell>
          <Cell col={6}>
            <h2>Contact Me</h2>
            <hr />
            <div className='contact-list'>
              <List>
                <ListItem>
                  <ListItemContent
                    style={{ fontSize: '25px', fontFamily: 'Anton' }}
                  >
                    <i className='fa fa-phone-square' aria-hidden='true' />
                    (+91) 9903849700
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent
                    style={{ fontSize: '25px', fontFamily: 'Anton' }}
                  >
                    <i className='fa fa-envelope-square' aria-hidden='true' />
                    shivam.shah095@gmail.com
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent
                    style={{ fontSize: '25px', fontFamily: 'Anton' }}
                  >
                    <i className='fa fa-skype' aria-hidden='true' />
                    live:shivam.shah27
                  </ListItemContent>
                </ListItem>
              </List>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Contact;
