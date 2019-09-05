import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Spinner from 'react-spinkit';

import actionsUser from '../redux/User/actions';

import PrivateRoute from './components/PrivateRoute';
import '../scss/application.scss';
import Login from './screens/Login';
import NotMatch from './components/NotMatch';

class App extends Component {
  componentDidMount() {
    this.props.logged();
  }

  render() {
    const { isLoggedLoading, isLogged } = this.props;
    return (
      <>
        {isLoggedLoading ? (
          <Spinner name="ball-scale-multiple" />
        ) : (
          <Switch>
            {/* eslint-disable-next-line react/jsx-no-bind */}
            <Route exact path="/" render={props => <Login {...props} isLogged={isLogged} />} />
            <PrivateRoute isLogged={isLogged} />
            <Route component={NotMatch} />
          </Switch>
        )}
      </>
    );
  }
}

const mapStateToProps = state => ({
  isLoggedLoading: state.user.isLoggedLoading,
  isLogged: state.user.isLogged
});

const mapDispatchToProps = dispatch => ({
  logged: () => dispatch(actionsUser.logged())
});

App.propTypes = {
  isLogged: PropTypes.bool,
  loading: PropTypes.bool,
  logged: PropTypes.func
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(App)
);
