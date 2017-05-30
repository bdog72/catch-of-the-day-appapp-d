import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import Redbox from 'redbox-react'
import Main from './components/Main.js'
// import { BrowserRouter, Match } from 'react-router'
// import StorePicker from './components/StorePicker'
// import App from './components/App'
// import './styles/style.css'
import './styles/screen.scss'

const root = document.getElementById('root')

const render = app => {
  ReactDOM.render(
    <AppContainer errorReporter={Redbox}>{app}</AppContainer>,
    root
  )
}

render(<Main />)

if (module.hot) {
  module.hot.accept('./components/App', () => {
    const NextApp = require('./components/App').default
    render(<NextApp />)
  })
}
