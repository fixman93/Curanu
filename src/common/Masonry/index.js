import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Container from '../Container/'

import './Masonry.scss'

class MasonryLayout extends Component {

  render() {
    const columnWrapper = {};
    const result = [];

    // create columns
    for (let i = 0; i < this.props.columns; i++) {
      console.log('i', i)
      columnWrapper[`column${i}`] = [];
    }
    // divide children into columns
    for (let i = 0; i < this.props.children.length; i++) {
      const columnIndex = i % this.props.columns;
      columnWrapper[`column${columnIndex}`].push(
        <div className='col card' style={{ marginBottom: `${this.props.gap}px` }}>
          {this.props.children[i]}
          {console.log('dsada', this.props.children[i])}
        </div>
      );
    }

    // wrap children in each column with a div
    for (let i = 0; i < this.props.columns; i++) {
      result.push(
        <div
          style={{
            marginLeft: `${i > 0 ? this.props.gap : 0}px`,
            flex: 1,
          }}>
          {columnWrapper[`column${i}`]}
        </div>
      );
    }
    return (
      <Container class='cards container flex'>
        {result}
      </Container>
    )
  }
}

MasonryLayout.propTypes = {
  columns: PropTypes.number.isRequired,
  gap: PropTypes.number.isRequired,
  children: PropTypes.arrayOf(PropTypes.element),
}
MasonryLayout.defaultProps = {
  columns: 2,
  gap: 20,
}

export default MasonryLayout