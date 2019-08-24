import React from 'react';
import { Route } from 'react-router-dom';

import Login from './screens/Login';

function Unauth({ match }) {
  return (<>
    <Route path={`${match.path}/login`} component={Login} />
  </>);
}

export default Unauth;
