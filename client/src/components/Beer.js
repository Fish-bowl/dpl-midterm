import React from 'react'
import { connect } from 'react-redux'
import { Card, Container, Header, } from 'semantic-ui-react'
import axios from 'axios'

const styles = {

  constant: {
    backgroundColor: 'black'
  },

  headers: {
    color: 'white'
  },
} 


class Beers extends React.Component {
  state = { beers: [] }
  

  componentDidMount() {
    axios.get('/api/all_beers')
      .then(res => {
        this.setState({ beers: res.data.entries })
      })
  }

  render() {

    paginate = () => {
      
    }

    return (
      <Container >
        <Header textAlign='center' as='h2' >All The Beers!</Header>
        <Card.Group itemsperrow='4' textAlign='center' >
          { this.state.beers.map((beer, b) =>
            <Card key={b} color='red' >
              <Card.Content>
                {/* beer image */}
                <Card.Header>
                  {beer.name}
                </Card.Header>
                <Card.Description>
                  {beer.description}
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
  return { beers:state.beers}
}

export default connect(mapStateToProps)(Beers)
