import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'  // eslint-disable-line
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'mobx-react'

import App from './views/App'
import AppState from './store/app-state'

// ReactDOM.render(<App />, document.getElementById('root'))

const initialState = window.__INITIAL__STATE__ || {}  // eslint-disable-line

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
      <Provider appState={new AppState(initialState.appState)}>
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
