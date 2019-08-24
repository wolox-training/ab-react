import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Auth from './screens/Auth/index';
import Unauth from './screens/Unauth/index';
import '../scss/application.scss';
import styles from './styles.module.scss';

function App() {
  return (
    <div className={styles.container}>
      <Router>
        <>
          <Route path="/" exact component={Auth} />
          <Route path="/unauth" component={Unauth} />
        </>
      </Router>
    </div>
  );
}

export default App;
