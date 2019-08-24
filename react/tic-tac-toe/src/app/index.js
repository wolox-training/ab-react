import React from 'react';
import { Route } from 'react-router-dom';

import Auth from './screens/Auth/index';
import Unauth from './screens/Unauth/index';
import '../scss/application.scss';
import styles from './styles.module.scss';

function App() {
  return (
    <div className={styles.container}>
      <>
        <Route path="/" exact component={Auth} />
        <Route path="/unauth" component={Unauth} />
      </>
    </div>
  );
}

export default App;
