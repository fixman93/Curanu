import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Container from '../../Container/'
import Settings from '../../../assets/img/black-settings-button.svg'
import Notifications from '../../../assets/img/notification-bell.svg'

import './Topbar.scss'

class TopBar extends Component {

  render() {
    return (
      <Container class='container'>
        <div className='Topbar'>
          <ul className='nav'>
            <li><Link to='/'>Groepen	Contact</Link></li>
            <li><Link to='/'>FAQ</Link></li>
            <li><Link to='/'>Smoelenboek</Link></li>
            <li><Link to='/'>Microblog</Link></li>
            <li><Link to='/'>Over ons</Link></li>
          </ul>

          <ul className='notification'>
            <li onClick={this.props.mymenu} className='mobile-menu-btn'>Menu</li>
            <li>
              <img src={Settings} alt='Settings' />
            </li>
            <li>
              <img src={Notifications} alt='Notifications' />
            </li>
          </ul>
        </div>
      </Container>
    )
  }
}

export default TopBar