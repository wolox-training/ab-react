import React, { Component } from 'react';

import FormLogin from './components/FormLogin/FormLogin';

class Login extends Component {
  handleSubmit = (values) => {
    console.log(values);
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

export default Login;
