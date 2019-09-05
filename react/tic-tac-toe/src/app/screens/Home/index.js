import React from 'react';
import { Route, Switch } from 'react-router-dom';

import TopBar from '../../components/TopBar';

import Matches from './screens/Matches';
import Game from './screens/Game';
import style from './style.module.scss';
import Player from './screens/Player';

function Home() {
  return (
    <>
      <TopBar />
      <div className={style.body}>
        <Switch>
          <Route component={Matches} path="/matches" />
          <Route component={Game} path="/game" />
          <Route component={Player} path="/player/:name" />
        </Switch>
      </div>
    </>
  );
}

export default Home;
