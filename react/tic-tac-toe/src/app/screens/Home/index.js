import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Matches from './screens/Matches';
import Game from './screens/Game';

function Home() {
  return (
    <Switch>
      <Route component={Matches} path="/matches" />
      <Route component={Game} path="/game" />
    </Switch>
  );
}

export default Home;
