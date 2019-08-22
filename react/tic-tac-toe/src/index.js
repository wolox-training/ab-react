import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './config/i18n';
import './scss/application.scss';

import Login from './app/screens/Login';
import App from './app';
import { register } from './serviceWorker';
import store from './redux/store';


const render = () => {
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        <Router>
          <div>
            <Route path="/" exact component={App} />
            <Route path="/login" component={Login} />
          </div>
        </Router>
      </Provider>
    </AppContainer>,
    document.getElementById('root')
  );
};

// Render once
render(App);

register();

// Webpack Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./app', () => {
    render(App);
  });
}
