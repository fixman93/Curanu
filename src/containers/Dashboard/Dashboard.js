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
    console.log('show all cards', this.props.Cards)
    this.setState({ showCards: this.props.Cards })
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

  toggleCollapse(i) {
    console.log('i', i)
    this.setState({
      collapsed: !this.state.collapsed,
      class: this.state.collapsed ? '' : 'collapsed',
      showCards: this.state.Cards
    });
    console.log(this.state.showCards)
  }

  render() {
    console.log('cards', this.props.Cards)
    console.log('pre push-a', this.state.showCards)
    // this.state.showCards.push('test')
    // console.log('posle push-a', this.state.showCards)
    const cardList = this.props.Cards.map((info, i) => {
      return (
        <div className={(info.open === 'true') ? 'collapsed' : ''} key={i}>
          <div className='header flex space-between'>
            <h2>{info.title}</h2>
            <span onClick={() => { this.toggleCollapse(i) }}><img src={Arrow_Down} alt='Arrow' /></span>
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