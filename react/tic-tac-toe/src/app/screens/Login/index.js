import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import userActions from '../../../redux/User/actions';

import styles from './styles.module.scss';
import FormLogin from './components/FormLogin/FormLogin';

function Login({ handleSubmit, handleLogout, isLogged, location: { state } }) {
  if (state && state.logout) {
    handleLogout();
  }
  return isLogged ? (
    <Redirect to="/matches" />
  ) : (
    <div className={styles.container}>
      <div>Welcome</div>
      <FormLogin className={styles.form} onSubmit={handleSubmit} />
    </div>
  );
}

const mapDispatchToProps = dispatch => ({
  handleSubmit: data => dispatch(userActions.login(data)),
  handleLogout: () => dispatch(userActions.logout())
});

Login.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  handleLogout: PropTypes.func,
  isLogged: PropTypes.bool,
  location: PropTypes.objectOf(PropTypes.any)
};

export default connect(
  null,
  mapDispatchToProps
)(Login);
