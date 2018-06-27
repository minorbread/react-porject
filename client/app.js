import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'  // eslint-disable-line
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'mobx-react'

import App from './views/App'
import appState from './store/app-state'

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
      <Provider appState={appState}>
        <BrowserRouter>
          <Component />
        </BrowserRouter>
      </Provider>
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
