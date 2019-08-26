import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import Login from './screens/Login';

function Unauth({ match, isLogged }) {
  return isLogged ? (
    <Redirect to="/" />
  ) : (
    <>
      <Route path={`${match.path}/login`} component={Login} />
    </>
  );
}

const mapStateToProps = ({ user: { isLogged } }) => ({
  isLogged
});

Unauth.propTypes = {
  isLogged: PropTypes.bool,
  match: PropTypes.objectOf(PropTypes.any)
};

export default connect(
  mapStateToProps,
  null
)(Unauth);
