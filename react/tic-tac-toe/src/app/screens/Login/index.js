import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import userActions from '../../../redux/User/actions';

import FormLogin from './components/FormLogin/FormLogin';

function Login({ handleSubmit, isLogged }) {
  return isLogged ? (
    <Redirect to="/matches" />
  ) : (
    <>
      <div>Welcome</div>
      <FormLogin onSubmit={handleSubmit} />
    </>
  );
}

const mapDispatchToProps = dispatch => ({
  handleSubmit: data => dispatch(userActions.login(data))
});

Login.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  isLogged: PropTypes.bool
};

export default connect(
  null,
  mapDispatchToProps
)(Login);
