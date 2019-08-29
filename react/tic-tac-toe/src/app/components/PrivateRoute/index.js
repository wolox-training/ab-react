import React from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import Home from '../../screens/Home';

function PrivateRoute({ isLogged }) {
  return isLogged ? <Home /> : <Redirect to="/" />;
}

PrivateRoute.propTypes = {
  isLogged: PropTypes.bool
};

export default PrivateRoute;
