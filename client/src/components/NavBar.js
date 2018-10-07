import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router'

class NavBar extends Component {
  activeItem = (navPath) => {
    return navPath === this.props.location.pathname;
  }

  render() {
    return (
      <div>
        <Menu pointing>
            <Link to='/beer'>
              <Menu.Item name='Beer' active={this.activeItem('/beer')} />
            </Link>
            <Link to='/breweries'>
              <Menu.Item name='Breweries' active={this.activeItem('/breweries')} />
            </Link>
            <Link to='/locations' >
              <Menu.Item name='Locations' active={this.activeItem('/locations')} />
            </Link>
            <Link to='/main'>
              <Menu.Item name='Happy Hour' active={this.activeItem('/main')} />
            </Link>
            <Link to='/beer_of_the_day'>
              <Menu.Item name='Beer Of The Day!' active={this.activeItem('/beer_of_the_day')} />
            </Link>

          <Menu.Menu position='right'>
            <Link to='/'>
              <Menu.Item name='DPS React Assessment' />
            </Link>
          </Menu.Menu>
        </Menu>
      </div>
    )
  }
}

export default withRouter(NavBar);
