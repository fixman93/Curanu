import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Header from '../../common/Header/'
import Masonry from '../../common/Masonry/'
import { cardAction } from '../../store/actions/Cards'
import Arrow_Down from '../../assets/img/arrow-down.svg'

class Dashboard extends Component {

  componentDidMount() {
    this.props.cardAction()
  }
  constructor(props) {
    super(props)
    this.state = {
      collapsed: true,
      class: 'collapsed',
      showCards: []
    }
    this.toggleCollapse = this.toggleCollapse.bind(this);
  }

  toggleCollapse(i, info) {
    console.log('i', info, 'iiiii', i)
    this.setState({
      ollapsed: !this.state.collapsed,
      class: this.state.collapsed ? '' : 'collapsed',
      showCards: info
    }, () => {
      // my state is updated here !
      console.log('llllll', this.state.showCards)
      if (this.state.showCards.open === 'active') {
        console.log('open')
        this.setState({
          showCards: {
            open: 'inactive',
            ...this.state.showCards
          }
        })
      }
      else {
        this.setState({
          showCards: {
            open: 'active',
            ...this.state.showCards
          }
        })
      }
      // console.log('this state', this.state)
    })
  }

  render() {
    const cardList = this.props.Cards.map((info, i) => {
      return (
        <div className={(info.open === 'active') ? 'collapsed' : ''} key={i}>
          <div className={(info.open === 'active') ? 'header flex space-between active' : 'header flex space-between'}>
            <h2>{info.title}</h2>
            <span onClick={() => { this.toggleCollapse(i, info) }}><img src={Arrow_Down} alt='Arrow' /></span>
          </div>
          <div className='content'>
            <p>{info.description}</p>
          </div>
        </div>
      )
    })
    return (
      <div>
        <Header />
        <Masonry columns={3} gap={20}>
          {cardList}
        </Masonry>
      </div>
    )
  }
}

Dashboard.defaultProps = {
  columns: 2,
  gap: 20,
  Cards: []
}
Dashboard.propTypes = {
  Cards: PropTypes.array.isRequired,
}

const mapStateToProps = state => {
  return { Cards: state.cards.result }
}

const mapDispatchToProps = dispatch => ({
  cardAction: () => dispatch(cardAction())
})
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)