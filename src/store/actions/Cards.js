export const simpleAction = () => dispatch => {
  dispatch({
    type: 'FETCH_CARDS',
    payload: 'result_of_simple_action'
  })
}