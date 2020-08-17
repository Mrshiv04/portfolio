import React, { Component } from 'react';
import '../App.css';
import {
  Tab,
  Tabs,
  Grid,
  Cell,
  Card,
  CardActions,
  Button,
  CardMenu,
  IconButton,
  CardTitle,
  CardText,
} from 'react-mdl';

class Project extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: 0,
    };
  }

  toggleCategories() {
    if (this.state.activeTab === 0) {
      return (
        <div className='projects-grid'>
          {/* Project 1*/}
          <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
            <CardTitle
              style={{
                color: '#fff',
                height: '176px',
                background:
                  'url(https://ak.picdn.net/shutterstock/videos/10617653/thumb/1.jpg) center/cover',
              }}
            >
              Vividly the photo App
            </CardTitle>
            <CardText>
              Vividly is a free photo and video sharing app. People can upload
              photos to our service and share them with their followers or with
              a select group of friends. They can also view, comment and like
              posts shared by their friends on Vividly.
            </CardText>
            <CardActions border>
              <Button
                colored
                href='http://vividly.herokuapp.com/signin'
                target='_blank'
              >
                Visit the site
              </Button>
            </CardActions>
            <CardMenu style={{ color: '#fff' }}>
              <IconButton name='share' />
            </CardMenu>
          </Card>

          {/* Project 2*/}
          <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
            <CardTitle
              style={{
                color: '#fff',
                height: '176px',
                background:
                  'url(data:image/jpeg;base64,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) center/cover',
              }}
            >
              Bingewatching Database
            </CardTitle>
            <CardText>
              Bingewatching Database is an authoritative source for movie
              content, designed to help fans explore the world of movies and
              decide what to watch. It's searchable database includes millions
              of movies.
            </CardText>
            <CardActions border>
              <Button
                colored
                href='https://bingewatching.herokuapp.com/'
                target='_blank'
              >
                Visit the site
              </Button>
            </CardActions>
            <CardMenu style={{ color: '#fff' }}>
              <IconButton name='share' />
            </CardMenu>
          </Card>

          {/* Project 3*/}
          <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
            <CardTitle
              style={{
                color: '#fff',
                height: '176px',
                background:
                  'url(data:image/jpeg;base64,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) center/cover',
              }}
            >
              Weather App
            </CardTitle>
            <CardText>
              The Weather App is an interactive application where you can search
              the weather details of your city or any city across the world.
              It's searchable database includes all major cities in the world
            </CardText>
            <CardActions border>
              <Button
                colored
                href='https://weatherhut.herokuapp.com/'
                target='_blank'
              >
                Visit the site
              </Button>
            </CardActions>
            <CardMenu style={{ color: '#fff' }}>
              <IconButton name='share' />
            </CardMenu>
          </Card>
        </div>
      );
    } else if (this.state.activeTab === 1) {
      return (
        <div className='projects-grid'>
          {/* Project 1*/}
          <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
            <CardTitle
              style={{
                color: '#fff',
                height: '176px',
                background:
                  'url(https://cdn.mos.cms.futurecdn.net/LwiKsyxF4xGLDKYqBVyFEL.jpg) center/cover',
              }}
            >
              Covid-19 Tracker
            </CardTitle>
            <CardText>
              Covid-19 Tracker is a reference website that provides counters and
              real-time statistics for coronavirus pandemic. Get details about
              the pandemic of off the countries across the globe
            </CardText>
            <CardActions border>
              <Button
                colored
                href='https://covid-007.herokuapp.com/'
                target='_blank'
              >
                Visit the site
              </Button>
            </CardActions>
            <CardMenu style={{ color: '#fff' }}>
              <IconButton name='share' />
            </CardMenu>
          </Card>

          {/* Project 2*/}
          <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
            <CardTitle
              style={{
                color: '#fff',
                height: '176px',
                background:
                  'url(https://cdn.arstechnica.net/wp-content/uploads/2020/07/pokemon-go-masks-800x450.jpg) center/cover',
              }}
            >
              Pokemon Directory
            </CardTitle>
            <CardText>
              Gotta catchem All! Pokemasters, Get ready to rumble, use this app
              to get all the details of every pokemon out there. You can use
              pokemon id as well
            </CardText>
            <CardActions border>
              <Button
                colored
                href='http://pokemon-directory.herokuapp.com/'
                target='_blank'
              >
                Visit the site
              </Button>
            </CardActions>
            <CardMenu style={{ color: '#fff' }}>
              <IconButton name='share' />
            </CardMenu>
          </Card>
        </div>
      );
    }
    if (this.state.activeTab === 2) {
      return (
        <div className='projects-grid'>
          {/* Project 1*/}
          <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
            <CardTitle
              style={{
                color: '#fff',
                height: '176px',
                background:
                  'url(https://ak.picdn.net/shutterstock/videos/10617653/thumb/1.jpg) center/cover',
              }}
            >
              Vividly the photo App
            </CardTitle>
            <CardText>
              Vividly is a free photo and video sharing app. People can upload
              photos to our service and share them with their followers or with
              a select group of friends. They can also view, comment and like
              posts shared by their friends on Vividly.
            </CardText>
            <CardActions border>
              <Button
                colored
                href='http://vividly.herokuapp.com/signin'
                target='_blank'
              >
                Visit the site
              </Button>
            </CardActions>
            <CardMenu style={{ color: '#fff' }}>
              <IconButton name='share' />
            </CardMenu>
          </Card>
        </div>
      );
    }
  }

  render() {
    return (
      <div className='category-tabs'>
        <Tabs
          activeTab={this.state.activeTab}
          onChange={(tabId) => this.setState({ activeTab: tabId })}
          ripple
        >
          <Tab>React 1</Tab>
          <Tab>React 2</Tab>
          <Tab>MONGODB</Tab>
        </Tabs>
        <Grid>
          <Cell col={12}>
            <div className='content'>{this.toggleCategories()}</div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Project;
