import React from 'react';
import { Switch, Route } from 'react-router-dom';
import LandingPage from './landingPage';
import About from './about';
import Resume from './resume';
import Contact from './contact';
import Project from './projects';

const Main = () => {
  return (
    <Switch>
      <Route exact path='/' component={LandingPage} />
      <Route path='/about' component={About} />
      <Route path='/resume' component={Resume} />
      <Route path='/contact' component={Contact} />
      <Route path='/projects' component={Project} />
    </Switch>
  );
};

export default Main;
