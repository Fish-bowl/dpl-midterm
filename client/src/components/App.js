import React, { Component } from 'react';
import NoMatch from './NoMatch';
import NavBar from './NavBar';
import Flash from './Flash';
import Home from './Home';
import Beer from './Beer';
import { Switch, Route } from 'react-router-dom';
import { Segment } from 'semantic-ui-react';
import Breweries from './Breweries';
import Locations from './Locations'
import Main from './Main'
import RandomBeer from './RandomBeer';

class App extends Component {
  

  

  render() {
    return (
      <Segment style={styles.background}>
        <NavBar />
        <Flash />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/beer' component={Beer} />
          <Route exact path='/breweries' component={Breweries} />
          <Route exact path='/locations' component={Locations} />
          <Route exact path='/beer_of_the_day' component={RandomBeer} />
          <Route exact path='/main' component={Main} />
          <Route component={NoMatch} />
        </Switch>
      </Segment>
    );
  }
}

const styles = {
  background: {
    backgroundColor: 'black',
  },
}

export default App;
