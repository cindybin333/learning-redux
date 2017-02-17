import {CHANGE_TITLE} from '../actions'

const initialState = {
  title: 'Hello World'
}

const titleSetter = (state = "initialState.title", action) => {
  switch (action.type) {
    case CHANGE_TITLE:
      return action.title
    default:
      return state
  }
}

export default titleSetter
