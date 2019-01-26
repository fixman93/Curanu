import React, { Component } from 'react'
import { connect } from 'react-redux'
import Header from '../../common/Header/'
import Masonry from '../../common/Masonry/'

import Arrow_Down from '../../assets/img/arrow-down.svg'

class Dashboard extends Component {

  constructor(props) {
    super(props)
    this.state = {
      collapsed: true,
      class: 'collapsed'
    }
    this.toggleCollapse = this.toggleCollapse.bind(this);
  }

  toggleCollapse() {
    this.setState({
      collapsed: !this.state.collapsed,
      class: this.state.collapsed ? '' : 'collapsed',
    });
  }
  render() {
    return (
      <div>
        <Header />
        <Masonry columns={3} gap={20}>
          {
            [...Array(13).keys()].map(key => {
              // const height = 200 + Math.ceil(Math.random() * 300);
              // style={{ height: `${height}px` }}
              return (
                <div className={"collapsible " + this.state.class} key={key}>
                  <div className='header flex space-between'>
                    <h2>Title</h2>
                    <span onClick={this.toggleCollapse}><img src={Arrow_Down} alt='Arrow' /></span>
                  </div>
                  <div className='content'>
                    <p>Sed non urna. Donec et ante. Phasellus eu ligula. Vestibulum sit amet purus. Vivamus hendrerit, dolor at aliquet laoreet, mauris turpis porttito</p>
                  </div>
                </div>
              )
            })
          }
        </Masonry>
      </div>
    )
  }
}

export default connect()(Dashboard)