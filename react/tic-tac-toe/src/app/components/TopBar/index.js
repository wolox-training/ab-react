import React from 'react';
import { Link } from 'react-router-dom';

import styles from './styles.module.scss';

function TopBar() {
  return (
    <div className={styles.topBar}>
      <div className={styles.title}>Tic Tac Toe</div>
      <div className={styles.menu}>
        <Link className={styles.link} to="/matches">
          Matches
        </Link>
        <Link className={styles.link} to="/game">
          Game
        </Link>
        <Link className={styles.link} to={{ pathname: '/', state: { logout: true } }}>
          Logout
        </Link>
      </div>
    </div>
  );
}

export default TopBar;
