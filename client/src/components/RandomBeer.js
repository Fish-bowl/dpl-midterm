import React from 'react'
import axios from 'axios'
import {
  Card,
  Header,
  Image,
  Segment,
  Container,
} from 'semantic-ui-react'

class RandomBeer extends React.Component{

  state = { randomBeers: [], activePage: [] }

  componentDidMount() {
    axios.get('/api/beer/random_beer')
        .then(res => {
      this.setState({ randomBeers: res.data.entries })
        })
  }

  render() {
    return(
      <Container >
        <Header textAlign='center' as='h2' style={{color: 'white'}} >I dont Work yet</Header>
        <Card.Group itemsperrow='4' textAlign='center' >
          { this.state.randomBeers.map((randomBeers, r) => 
            <Card key={r} color='red' >
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
          )}
        </Card.Group>
      </Container>
    )
  }
}

export default RandomBeer
