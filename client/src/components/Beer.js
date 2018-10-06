import React from 'react'
import { List, Image} from 'semantic-ui-react'

class Beer extends React.Component {
  
  state = { beers: [] }

  getBeerss = () => {
    axios.get('/api/all_beers')
      .then(res => this.setState({ beers: res.data }))
    debugger
  }

  render() {
    return (
   
      <List divided relaxed>
        (beers.map(beer =>
          <List.Item key={beer.name}>
            {/* <Image avatar src={beer.user.profile_image_url} alt="user avatar" /> */}
            <List.Content>
              <List.Header>{beer.name}</List.Header>
              <List.Description>
                <a
                  href={beer.name.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                </a>
              </List.Description>
            </List.Content>
          </List.Item>
        )
        )
      </List>
      )
    }
  }

export default Beer
