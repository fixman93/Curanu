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
    this.setState({ showCards: this.state.Cards })
  }
  constructor(props) {
    super(props)
    this.state = {
      collapsed: true,
      class: 'collapsed',
      showCards: []
    }
    this.toggleCollapse = this.toggleCollapse.bind(this)
  }

  toggleCollapse(i, info) {
    this.setState({
      collapsed: !this.state.collapsed,
      class: this.state.collapsed ? '' : 'collapsed',
      showCards: info
    }, () => {
      /*eslint-disable */
      if (this.state.showCards.open) {
        this.setState(prevState => ({
          showCards: !prevState.showCards['open'] === false
        }))
        this.state.showCards['open'] = false
      }
      else {
        this.setState(prevState => ({
          showCards: !prevState.showCards['open'] === true
        }))
        this.state.showCards['open'] = true
      }
      /*eslint-enable */
    })
  }

  render() {
    const cardList = this.props.Cards.map((info, i) => {
      return (
        <div className={info.open ? 'collapsed' : ''} key={i}>
          <div className={info.open ? 'header flex space-between active' : 'header flex space-between'}>
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