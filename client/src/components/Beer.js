import React from 'react'
import axios from 'axios'
// import redux from 'react-redux'
// import Pagination from './Pagination'
import { Card, Container, Header } from 'semantic-ui-react'
 
const styles = {

  constant: {
    backgroundColor: 'black'
  },

  headers: {
    color: 'white'
  },
  
} 

// const Pagination = () => {
//   return {}
// }

class Beers extends React.Component {
  state = { beers: [], activePage: [] }

  componentDidMount() {
    axios.get('/api/all_beers?page=5&per_page=9')
      .then(res => {
        this.setState({ beers: res.data.entries })
      })
  }

  // handlePaginationChange = (e, { activePage }) => this.setState({ activePage })


  render() {

    return (
      <Container >
        <Header textAlign='center' as='h2' style={styles.headers}>All The Beers!</Header>
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
        {/* <Pagination defaultActivePage={5} totalPages={10} /> */}
      </Container>
    )
  }
}

// const mapStateToProps = state => {
//   return { beers:state.beers}
// }

// export default connect(mapStateToProps)(Beers)
export default Beers
