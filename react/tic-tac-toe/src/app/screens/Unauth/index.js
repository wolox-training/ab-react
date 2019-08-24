import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import LocalStoreServie from '../../../services/LocalStoreService';

import Login from './screens/Login';

function Unauth({ match }) {
  return (
    LocalStoreServie.getValue('token') ? <Redirect to="/" />
      : <>
        <Route path={`${match.path}/login`} component={Login} />
      </>);
}

Unauth.propTypes = {
  match: PropTypes.objectOf(PropTypes.any)
};

export default Unauth;
