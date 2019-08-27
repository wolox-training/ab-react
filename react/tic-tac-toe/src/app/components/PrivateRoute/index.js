import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import Matches from '../../screens/Matches';
import Game from '../../screens/Game';

const PrivateComponent = () => (
  <>
    <Game />
    <Matches />
  </>
);

function PrivateRoute({ path, isLogged }) {
  return isLogged ? <Route path={`${path}`} component={PrivateComponent} /> : <Redirect to="/" />;
}

const mapStateToProps = ({ user: { isLogged } }) => ({
  isLogged
});

PrivateRoute.propTypes = {
  isLogged: PropTypes.bool,
  path: PropTypes.string
};

export default connect(mapStateToProps)(PrivateRoute);
