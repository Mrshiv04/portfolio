import React, { Component } from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from './components/main';
import { Link } from 'react-router-dom';

class App extends Component {
  state = {};

  render() {
    return (
      <div className='demo-big-content'>
        <Layout>
          <Header
            className='header-color'
            title={
              <Link style={{ textDecoration: 'none', color: 'white' }} to='/'>
                Shivam Shah
              </Link>
            }
            scroll
          >
            <Navigation>
              <Link to='/about'>About</Link>
              <Link to='/resume'>Resume</Link>
              <Link to='/projects'>Projects</Link>
              <Link to='/contact'>Contact</Link>
            </Navigation>
          </Header>
          <Drawer
            className='header-color'
            title={
              <Link style={{ textDecoration: 'none', color: 'black' }} to='/'>
                Shivam Shah
              </Link>
            }
          >
            <Navigation>
              <Link to='/about'>About</Link>
              <Link to='/resume'>Resume</Link>
              <Link to='/projects'>Projects</Link>
              <Link to='/contact'>Contact</Link>
            </Navigation>
          </Drawer>
          <Content>
            <div className='page-content' />
            <Main />
          </Content>
        </Layout>
      </div>
    );
  }
}

export default App;
