import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import LocalStoreServie from '../../../services/LocalStoreService';
import AuthService from '../../../services/AuthService';
import actionsUser from '../../../redux/User/actions';

import Game from './screens/Game';
import Matches from './screens/Matches';


function Auth({ isLogged }) {
  const token = LocalStoreServie.getValue('token');
  AuthService.setToken(token);
  isLogged(!!token);

  return (
    token
      ? <>
        <Game />
        <Matches />
      </>
      : <Redirect to="/unauth/login" />

  );
}

const mapDispatchToProps = dispatch => ({
  isLogged: value => dispatch(actionsUser.isLogged(value))
});

Auth.propTypes = {
  isLogged: PropTypes.func
};

export default connect(null, mapDispatchToProps)(Auth);
