import React from 'react';
import { Route, Switch } from 'react-router-dom';

import configureStore from '../redux/store';
import actionsUser from '../redux/User/actions';

import Auth from './screens/Auth/index';
import Unauth from './screens/Unauth/index';
import '../scss/application.scss';
import styles from './styles.module.scss';

function App() {
  configureStore().dispatch(actionsUser.logged());
  return (
    <div className={styles.container}>
      <Switch>
        <Route path="/" exact component={Auth} />
        <Route path="/unauth" component={Unauth} />
      </Switch>
    </div>
  );
}

export default App;
