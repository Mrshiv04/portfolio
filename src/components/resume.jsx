import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import profile from './profile.png';
import Education from './education';
import Experience from './experience';
import ProjectResume from './projectResume';
import Skills from './skills';

class Resume extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{ textAlign: 'center' }}>
              <img src={profile} alt='profilepic' style={{ width: '200px' }} />
            </div>
            <h2 style={{ paddingTop: '2em' }}>Shivam Shah</h2>
            <h4 style={{ color: 'Grey' }}>Programmer</h4>
            <hr style={{ borderTop: '3px solid #833fb2', width: '50%' }} />
            <p>
              An energetic and hardworking professional having knowledge of
              JavaScript, ReactJs, Core Java, HTML,MongoDB and MySQL with
              experience of 2.7 years and want to work in a challenging
              environment, open to learning new skills and using new systems
              involved in mentioned area. I have extremely good problem solving
              skills and good knowledge of OOPs concept.
            </p>
            <hr style={{ borderTop: '3px solid #833fb2', width: '50%' }} />
            <h5>Adress</h5>
            <p>15/B Gopal ghosh lane, Kidderpore, kolkata-700023</p>
            <h5>Phone</h5>
            <p>(+91) 9903849700</p>
            <h5>Email</h5>
            <p>shivam.shah095@gmail.com</p>
            <h5>Website</h5>
            <p>myweb@herokuapp.com</p>
            <hr style={{ borderTop: '3px solid #833fb2', width: '50%' }} />
            <h3 style={{ color: 'grey' }}>Skills *</h3>
            <Skills skills='Core Java' progress='75' />
            <Skills skills='JavaScript' progress='70' />
            <Skills skills='ReactJs' progress='80' />
            <Skills skills='Python' progress='70' />
            <Skills skills='HTML/CSS' progress='70' />
            <Skills skills='MySQL' progress='65' />
            <Skills skills='MongoDB' progress='60' />
            <p style={{ color: 'grey', paddingLeft: '15px' }}>
              * For further details kindly refer to the CV
            </p>
          </Cell>
          <Cell col={8} className='resume-right-col'>
            <h2>Education</h2>
            <Education
              startYear='2013'
              endYear='2017'
              schoolName='St Thomas College of Engineering & Technology (MAKAUT)'
              schoolDescription='Bachelors Degree in Computer Science & Engineering with 8.2 CGPA'
            />
            {/* <Education
              startYear='1999'
              endYear='2013'
              schoolName='St Thomas Boys School'
              schoolDescription='Higher Secondary Schooling in Science with 84%'
            /> */}
            <hr style={{ borderTop: '3px solid #e22947' }} />
            <h2>Experience</h2>
            <Experience
              startYear='Dec 2017'
              endYear='Present'
              companyName='Infosys Ltd.'
              designation='Senior System Engineer'
              companyDescription='To play a pivotal role implementing SDLC activities such as development, testing, implementation, warranty and support activities; participate in Knowledge Management activities, and interface with internal team to ensure high quality deliverables within the guidelines & policies'
            />
            <hr style={{ borderTop: '3px solid #e22947' }} />
            <h2>Projects</h2>
            <ProjectResume
              projectName='1) Worked for a Telecom project'
              technologiesUsed='  Core Java, HTML, JavaScript, SQL '
              projectDescription='  This project deals with managing and implementing new features in an application called Web Activation System. This application facilitates users to create orders for buying products, routers, plans, etc.'
              roles='  Worked as a UI developer, implemented new features and fixed existing bugs in the application, Did Testing for new/existing built activity for various application related projects. '
            />

            <ProjectResume
              projectName='2) Worked for a Banking project'
              technologiesUsed=' React.JS, MongoDB '
              projectDescription=' This project deals with Implementation of a new banking application for the client which facilitates user to create and process different requests like Loans, Commitment Letters, Grants, etc'
              roles=' Worked as a UI developer, implemented new features and fixed existing bugs in the application, Did Testing for new/existing built activity for various application related projects. '
            />

            <ProjectResume
              projectName='3) Worked for a Financial Services project'
              technologiesUsed=' React.Js, JavaScript, Core Java, MongoDB'
              projectDescription=' This project deals with managing and implementing new features in an application called NMCIR. This application maintains user data and facilitates modification of data as per need. '
              roles=' Worked here as a Front End developer, Handled databases related to the application by using MongoDB, Did Testing for new/existing built activity for various application related projects. '
            />
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Resume;
