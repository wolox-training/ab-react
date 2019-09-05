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
    const { tokenLoading, isLogged } = this.props;
    return (
      <>
        {!tokenLoading && isLogged ? (
          <Switch>
            {/* eslint-disable-next-line react/jsx-no-bind */}
            <Route exact path="/" render={props => <Login {...props} isLogged={isLogged} />} />
            <PrivateRoute isLogged={isLogged} />
            <Route component={NotMatch} />
          </Switch>
        ) : (
          <Spinner name="ball-scale-multiple" />
        )}
      </>
    );
  }
}

const mapStateToProps = state => ({
  tokenLoading: state.user.tokenLoading,
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
