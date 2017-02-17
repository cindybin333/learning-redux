import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'
import CounterContainer from './containers/CounterContainer'

const store = createStore(reducer)

render(
  <Provider store={store}>
    <CounterContainer />
  </Provider>,
  document.getElementById('root')
)
