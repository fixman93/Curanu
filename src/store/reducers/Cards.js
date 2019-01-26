export default (state = {}, action) => {
  switch (action.type) {
    case 'FETCH_CARDS':
      return {
        result: action.payload
      }
    default:
      return state
  }
}