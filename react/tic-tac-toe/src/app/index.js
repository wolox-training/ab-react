import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Auth from './screens/Auth/index';
import Unauth from './screens/Unauth/index';
import '../scss/application.scss';
import styles from './styles.module.scss';

function App() {
  return (
    <div className={styles.container}>
      <>
        <Switch>
          <Route path="/" exact component={Auth} />
          <Route path="/unauth" component={Unauth} />
        </Switch>
      </>
    </div>
  );
}

export default App;
