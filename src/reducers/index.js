import { combineReducers } from 'redux'
import counter from './counter'
import titleSetter from './titleSetter'

const rootReducer = combineReducers({
  counter,
  titleSetter
})

export default rootReducer
