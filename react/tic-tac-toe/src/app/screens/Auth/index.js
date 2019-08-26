import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Game from './screens/Game';
import Matches from './screens/Matches';

function Auth({ isLogged }) {
  return isLogged ? (
    <>
      <Game />
      <Matches />
    </>
  ) : (
    <Redirect to="/unauth/login" />
  );
}

const mapStateToProps = state => ({
  isLogged: state.user.isLogged
});

Auth.propTypes = {
  isLogged: PropTypes.bool
};

export default connect(
  mapStateToProps,
  null
)(Auth);
