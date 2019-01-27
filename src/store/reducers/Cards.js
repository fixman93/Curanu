import { updateObject } from '../Utility'


const getCards = (state, action) => {
  return updateObject(state, { result: action.payload })
}
export default (state = {}, action) => {
  switch (action.type) {
    case 'FETCH_CARDS':
      return getCards(state, action)
    default:
      return state
  }
}