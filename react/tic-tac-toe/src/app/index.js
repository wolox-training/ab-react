import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import actionsUser from '../redux/User/actions';

import PrivateRoute from './components/PrivateRoute';
import '../scss/application.scss';
import styles from './styles.module.scss';
import Login from './screens/Login';

class App extends Component {
  componentDidMount() {
    this.props.logged();
  }

  render() {
    return (
      <div className={styles.container}>
        <Switch>
          <Route path="/" exact component={Login} />
          <PrivateRoute path="/matches" />
        </Switch>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  logged: () => dispatch(actionsUser.logged())
});

App.propTypes = {
  logged: PropTypes.func
};

export default withRouter(
  connect(
    null,
    mapDispatchToProps
  )(App)
);
