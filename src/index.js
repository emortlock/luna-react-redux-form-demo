import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, combineReducers } from 'redux'
import { reducer as reduxFormReducer } from 'redux-form'

import { SiteWrap } from './luna-react'

import './css/styles.css'

import Example from './components/Example'

const reducer = combineReducers({
  form: reduxFormReducer, // mounted under "form"
})
const store = (window.devToolsExtension
  ? window.devToolsExtension()(createStore)
  : createStore)(reducer)

const showResults = values =>
  new Promise(resolve => {
    setTimeout(() => {
      // simulate server latency
      window.alert(`You submitted:\n\n${JSON.stringify(values, null, 2)}`)
      resolve()
    }, 500)
  })

const App = () => (
  <Provider store={store}>
    <SiteWrap padded className="ln-u-soft">
      <Example onSubmit={showResults} />
    </SiteWrap>
  </Provider>
)

render(<App />, document.getElementById('root'))
