import React, {Fragment} from 'react'
import axios from 'axios'
import Beer from './Beer'
import Breweries from './Breweries'
import Locations from './Locations'
// import { Beer, Breweries, Locations } from 'react-redux'
import {
  Grid,
  Container,
  Segment,
  Header,
  Card,
} from 'semantic-ui-react'

const styles = {
  beerSegment: {
    float: 'left'
  },
}

class Main extends React.Component {

  state = {  }


  componentDidMount() {
    axios.get('/api/all_breweries')
      .then(res => {
        this.setState({ breweries: res.data.entries })
      })
    axios.get('/api/all_beers')
      .then(res => {
        this.setState({ beers: res.data.entries })
      })
    axios.get('/api/all_locations')
      .then(res => {
        this.setState({ locations: res.data.entries })
      })
  }

 
  render() {
    return (
      <div>
        <Segment.Group>
          <Segment>
            <Header as='h1' textAlign='center' >Welcome to Happy Hour</Header>
            
            <Beer/>
          </Segment>
        </Segment.Group>
      </div>
    )
  }
}

export default Main
