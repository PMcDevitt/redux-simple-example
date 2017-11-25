import React from 'react'
import {Provider} from 'react-redux'
import { createStore } from 'redux'

import ReduxCounter from './ReduxCounter'
import './App.css';

const initialState = {
  count: 0
}
const reducer = (state = initialState, action) => {
  switch(action.type) {
    case 'INCREMENT':
      return {
        count: state.count + 1
      }
    case 'DECREMENT':
      return {
        count: state.count - 1
      }
    default:
      return state;
  }
}

const store = createStore(reducer)

const App = () => (
  <Provider store={store}>
    <ReduxCounter />
  </Provider>
)

export default App
