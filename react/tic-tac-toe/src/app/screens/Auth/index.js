import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import actionsUser from '../../../redux/User/actions';

import Game from './screens/Game';
import Matches from './screens/Matches';


function Auth({ isLogged, logged }) {
  if (!isLogged) {
    logged();
  }

  return (
    isLogged
      ? <>
        <Game />
        <Matches />
      </>
      : <Redirect to="/unauth/login" />

  );
}

const mapDispatchToProps = dispatch => ({
  logged: () => dispatch(actionsUser.logged())
});

const mapStateToProps = state => ({
  isLogged: state.user.isLogged
});

Auth.propTypes = {
  isLogged: PropTypes.bool,
  logged: PropTypes.func
};

export default connect(mapStateToProps, mapDispatchToProps)(Auth);
