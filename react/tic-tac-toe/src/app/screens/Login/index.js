import React, { Component } from 'react';

class Login extends Component {
  refInput = React.createRef()

  render() {
    return (
      <form>
        <input type="text" placeholder="Login" />
      </form>
    );
  }
}

export default Login;
