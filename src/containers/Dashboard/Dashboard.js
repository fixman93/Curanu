import React, { Component } from 'react'
import { connect } from 'react-redux'
import Header from '../../common/Header/'
import Masonry from '../../common/Masonry/'

class Dashboard extends Component {
  render() {
    return (
      <div>
        <Header />
        <Masonry columns={3} gap={20}>
          {
            [...Array(13).keys()].map(key => {

              return (
                <div key={key}  >

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