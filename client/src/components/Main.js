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

  // state = { beers: [], breweries: [], locations: [] }


  // componentDidMount() {
  //   axios.get('/api/all_breweries?page=5&per_page=9')
  //     .then(res => {
  //       this.setState({ breweries: res.data.entries })
  //     })
  //   axios.get('/api/all_beers?page=5&per_page=9')
  //     .then(res => {
  //       this.setState({ beers: res.data.entries })
  //     })
  //   axios.get('/api/all_locations?page=5&per_page=9')
  //     .then(res => {
  //       this.setState({ locations: res.data.entries })
  //     })
  // }

 
  render() {
    return (
      <Grid columns={3}>
        <Grid.Row>
          <Grid.Column>
            <Beer />
          </Grid.Column>
          <Grid.Column>
            <Breweries />
          </Grid.Column>
          <Grid.Column>
            <Locations />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    )
  }
}

{/* <Segment.Group>
  <Segment>
    <Header as='h1' textAlign='center' >Welcome to Happy Hour</Header>

    <Beer beer={this.state.beer} />
  </Segment>
</Segment.Group> */}

export default Main
