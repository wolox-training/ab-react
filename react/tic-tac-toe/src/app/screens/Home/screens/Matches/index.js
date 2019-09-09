import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import matchesActions from '../../../../../redux/Matches/actions';

import styles from './styles.module.scss';
import ListMatches from './components/ListMatches';

class Matches extends Component {
  componentDidMount() {
    this.props.getMatches();
  }

  render() {
    return (
      <div className={styles.table}>
        <div className={styles.head}>
          <div className={styles.headCell}>Player One</div>
          <div className={styles.headCell}>Player Two</div>
          <div className={styles.headCell}>Winner</div>
        </div>
        <div className={styles.body}>
          <ListMatches {...this.props} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({ data: state.matches.data, dataLoading: state.matches.dataLoading });

const mapDispatchToProps = dispatch => ({
  getMatches: () => {
    dispatch(matchesActions.getMatches());
  }
});

Matches.propTypes = {
  getMatches: PropTypes.func.isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Matches);
