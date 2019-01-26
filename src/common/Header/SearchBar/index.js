import React, { Component } from 'react'
import Search from '../../../assets/img/zoeken.svg'
class SearchBar extends Component {
  render() {
    return (
      <div className='SearchBar'>
        <input type='text' />
        <button><img src={Search} alt='Search' /></button>
      </div>
    )
  }
}

export default SearchBar