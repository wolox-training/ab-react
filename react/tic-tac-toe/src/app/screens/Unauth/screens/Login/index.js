import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import userActions from '../../../../../redux/User/actions';

import FormLogin from './components/FormLogin/FormLogin';


class Login extends Component {
  handleSubmit = (values) => {
    this.props.login(values);
  }

  render() {
    return (
      <>
        <div>Welcome</div>
        <FormLogin onSubmit={this.handleSubmit} />
      </>
    );
  }
}


// const mapStateToProps = ({ matches: { data } }) => ({ data });

const mapDispatchToProps = dispatch => ({
  login: (data) => {
    dispatch(userActions.login(data));
  }
});

Login.propTypes = {
  login: PropTypes.func.isRequired
};

export default connect(null, mapDispatchToProps)(Login);

