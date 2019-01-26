import React, { Component } from 'react'

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
            <li><a href='#'>Groepen	Contact</a></li>
            <li><a href='#'>FAQ</a></li>
            <li><a href='#'>Smoelenboek</a></li>
            <li><a href='#'>Microblog</a></li>
            <li><a href='#'>Over ons</a></li>
          </ul>

          <ul className='notification'>
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