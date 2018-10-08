import React from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import { 
  Card, 
  Header,
  Container,
} from 'semantic-ui-react'

const styles = {

  constant: {
    backgroundColor: 'black'
  },

  headers: {
    color: 'white'
  },
} 

class Breweries extends React.Component {
  state = { breweries: [] }


  componentDidMount() {
    axios.get('/api/all_breweries?page=5&per_page=9')
      .then(res => {
        this.setState({ breweries: res.data.entries })
      })
  }

  render() {
    return (
      <Container >
        <Header textAlign='center' as='h2' style={styles.headers}>All The Breweries!</Header>
        <Card.Group textAlign='center' >
          {this.state.breweries.map((brewerie, b) =>
            <Card key={b} color='red' fluid >
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
