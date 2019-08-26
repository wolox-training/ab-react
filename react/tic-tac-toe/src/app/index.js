import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import actionsUser from '../redux/User/actions';

import Auth from './screens/Auth/index';
import Unauth from './screens/Unauth/index';
import '../scss/application.scss';
import styles from './styles.module.scss';

class App extends Component {
  componentDidMount() {
    this.props.logged();
  }

  render() {
    return (
      <div className={styles.container}>
        <Switch>
          <Route path="/" exact component={Auth} />
          <Route path="/unauth" component={Unauth} />
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

export default connect(
  null,
  mapDispatchToProps
)(App);
