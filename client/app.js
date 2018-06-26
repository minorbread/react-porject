import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';

import App from './App.jsx';

// ReactDOM.render(<App />, document.getElementById('root'));

const rootEle = document.getElementById('root');
const render = Component => {
  const renderMethod = module.hot ? 'render' : 'hydrate';
  ReactDOM[renderMethod](
    <AppContainer>
      <Component />
    </AppContainer>,
    rootEle
  );
};
render(App);

if (module.hot) {
  module.hot.accept('./App.jsx', () => {
    const NextApp = require('./App.jsx').default;
    render(NextApp);
  });
}

