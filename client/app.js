import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'  // eslint-disable-line

import App from './views/App'

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
  module.hot.accept('./views/App', () => {
    const NextApp = require('./views/App').default // eslint-disable-line
    render(NextApp)
  })
}
