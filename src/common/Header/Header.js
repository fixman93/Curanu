import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Container from '../Container/'
import SearchBar from './SearchBar/'
import Logo from '../../assets/img/logo.png'
import TopBar from './TopBar'

import './Header.scss'

class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showMenu: false
    }
    this.toggleMenu = this.toggleMenu.bind(this)
    this.closeMenu = this.closeMenu.bind(this)
  }
  toggleMenu() {
    console.log('test')
    this.setState(prevState => {
      return { showMenu: !prevState.showMenu };
    });
  }
  closeMenu() {
    console.log('testttt')
    this.setState({ showMenu: false })
  }
  render() {
    return (
      <header>
        <TopBar mymenu={this.toggleMenu} />
        <Container class='container'>
          <div className='logo'>
            <img src={Logo} alt='CuraNu' />
            <span>Intranet</span>
          </div>
        </Container>
        <nav className={this.state.showMenu ? 'active' : ''}>
          <div className='closeMenu' onClick={this.closeMenu}>x</div>
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