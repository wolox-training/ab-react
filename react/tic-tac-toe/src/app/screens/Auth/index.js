import React from 'react';
import { Redirect } from 'react-router-dom';

import LocalStoreServie from '../../../services/LocalStoreService';

import Game from './screens/Game';
import Matches from './screens/Matches';

function Auth() {
  return (
    LocalStoreServie.getValue('token')
      ? <>
        <Game />
        <Matches />
      </>
      : <Redirect to="/unauth/login" />

  );
}

export default Auth;
