import React, { Component } from 'react';
// import '../App.css';
import { Grid, Cell } from 'react-mdl';
import images from './profile.png';

class LandingPage extends Component {
  render() {
    return (
      <div style={{ width: '100%', margin: 'auto' }}>
        <Grid className='landing-grid'>
          <Cell col={12}>
            <img src={images} alt='Avatar' className='avatar-img' />
            <div className='banner-text'>
              <h1>Full Stack Web Developer</h1>
              <hr />
              <p>
                Java | ReactJs | Javascript | Python | HTML/CSS | MySQL |
                MongoDB
              </p>
              <div className='social-links'>
                <a
                  href='https://www.linkedin.com/in/shivam-shah-924737117/'
                  rel='noopener noreferrer'
                  target='_blank'
                >
                  <i className='fa fa-linkedin-square' aria-hidden='true' />
                </a>
                <a
                  href='https://github.com/Mrshiv04'
                  rel='noopener noreferrer'
                  target='_blank'
                >
                  <i className='fa fa-github-square' aria-hidden='true' />
                </a>
                <a
                  href='https://www.facebook.com/shivam.shah.144/'
                  rel='noopener noreferrer'
                  target='_blank'
                >
                  <i class='fa fa-facebook-square' aria-hidden='true'></i>
                </a>
                <a
                  href='https://www.instagram.com/mrshiv04/'
                  rel='noopener noreferrer'
                  target='_blank'
                >
                  <i className='fa fa-instagram' aria-hidden='true' />
                </a>
              </div>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default LandingPage;
