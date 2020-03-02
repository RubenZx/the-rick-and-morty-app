import { StylesProvider } from '@material-ui/core/styles'
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

ReactDOM.render(
  <StylesProvider injectFirst>
    <App />
  </StylesProvider>,
  document.getElementById('root')
)
