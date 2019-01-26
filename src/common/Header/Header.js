import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Container from '../Container/'
import SearchBar from './SearchBar/'
import Logo from '../../assets/img/logo.png'
import TopBar from './TopBar'

import './Header.scss'

class Header extends Component {
  render() {
    return (
      <header>
        <TopBar />
        <Container class='container'>
          <div className='logo'>
            <img src={Logo} alt='CuraNu' />
            <span>Intranet</span>
          </div>
        </Container>
        <nav>
          <Container class='container flex space-between'>
            <ul>
              <li><Link to='/'>Artikelen</Link></li>
              <li><Link to='/'>Nieuws</Link></li>
              <li><Link to='/'>Evenementen</Link></li>
              <li><Link to='/'>Kwaliteitshandboek</Link></li>
            </ul>
            <SearchBar />
          </Container>
        </nav>
      </header>
    )
  }
}

export default Header