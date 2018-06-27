import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'  // eslint-disable-line

import App from './App'

// ReactDOM.render(<App />, document.getElementById('root'))

const rootEle = document.getElementById('root')
// const render = Component => {
//   const renderMethod = module.hot ? 'render' : 'hydrate'
//   console.log('renderMethod', renderMethod)
//   ReactDOM[renderMethod](
//     <AppContainer>
//       <Component />
//     </AppContainer>,
//     rootEle
//   )
// }
const render = (Component) => {
  ReactDOM.hydrate(
    <AppContainer>
      <Component />
    </AppContainer>,
    rootEle,
  )
}

render(App)

if (module.hot) {
  module.hot.accept('./App.jsx', () => {
    const NextApp = require('./App.jsx').default // eslint-disable-line
    render(NextApp)
  })
}
