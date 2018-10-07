import React from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import {
  Card,
  Container,
  Segment,
  Header,
} from 'semantic-ui-react'

class Locations extends React.Component {
  state = { locations: [] }


  componentDidMount() {
    axios.get('/api/all_locations')
      .then(res => {
        this.setState({ locations: res.data.entries })
      })
  }

  render() {
    return (
      <Segment style={{backgroundColor: 'black'}}>
        <Header textAlign='center' as='h2'>All The Locations!</Header>
        <Card.Group itemsperrow='4' textAlign='center' >
          {this.state.locations.map((location, l) =>
            <Card key={l} color='red' >
              <Card.Content>
                {/* beer image */}
                <Card.Header>
                  {location.name}
                </Card.Header>
                <Card.Description>
                  {location.description}
                </Card.Description>
              </Card.Content>
            </Card>
          )}
        </Card.Group>
      </Segment>
    )
  }
}

const mapStateToProps = state => {
  return { location:state.locations }
}

export default connect(mapStateToProps)(Locations)
