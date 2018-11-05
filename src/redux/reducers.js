import { TEST_ACTION } from './actions'

const initialState = {
  test: true,
  asdf: false
}

function testReducer(state = initialState, action){
  switch(action.type){
    case TEST_ACTION:
      return Object.assign({}, state, {
        test: !state.test
      })
    default:
      return state
  }
}

export default testReducer
