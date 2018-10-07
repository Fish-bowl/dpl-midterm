import React from 'react'
import { connect } from 'react-redux'
import axios from 'axios'
import {
  Card,
  Header,
  Image,
  Segment,
  Container,
} from 'semantic-ui-react'

class RandomBeer extends React.Component{

  state = { randomBeer: [] }

  componentDidMount() {
    axios.get('/api/all_beers')
        .then(res => {
      this.setState({ randomBeer: res.data.entries })
        })
  }

  render() {
    return(
      <Container >
        <Header textAlign='center' as='h2' style={{color: 'white'}} >I dont Work yet</Header>
        <Card.Group itemsperrow='4' textAlign='center' >
            <Card color='red' >
              <Card.Content>
                {/* beer image */}
                <Card.Header>
                  {this.state.randomBeer.name}
                </Card.Header>
                <Card.Description>
                  {this.state.randomBeer.description}
                </Card.Description>
              </Card.Content>
            </Card>
        </Card.Group>
      </Container>
    )
  }
}

const mapStateToProps = state => {
  return {randomBeer:state.beer}
}

export default connect(mapStateToProps)(RandomBeer)
