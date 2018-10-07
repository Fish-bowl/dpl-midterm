import React from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import { 
  Card, 
  Header,
  Container,
} from 'semantic-ui-react'

class Breweries extends React.Component {
  state = { breweries: [] }


  componentDidMount() {
    axios.get('/api/all_breweries')
      .then(res => {
        this.setState({ breweries: res.data.entries })
      })
  }

  render() {
    return (
      <Container >
        <Header textAlign='center' as='h2'>All The Breweries!</Header>
        <Card.Group itemsperrow='4' textAlign='center' >
          {this.state.breweries.map((brewerie, b) =>
            <Card key={b} color='red' >
              <Card.Content>
                {/* beer image */}
                <Card.Header>
                  {brewerie.name}
                </Card.Header>
                <Card.Description>
                  {brewerie.description}
                </Card.Description>
              </Card.Content>
            </Card>
          )}
        </Card.Group>
      </Container>
    )
  }
}

const mapStateToProps = state => {
  return { breweries:state.breweries}
}

export default connect(mapStateToProps)(Breweries)
