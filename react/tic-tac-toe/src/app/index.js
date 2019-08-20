import React from 'react';

import Game from './screens/Game';
import Matches from './screens/Matches';
import '../scss/application.scss';
import styles from './styles.module.scss';

function App() {
  return (
    <div className={styles.container}>
      <Game />
      <Matches />
    </div>
  );
}

export default App;
