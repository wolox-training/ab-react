import React, { Component } from 'react';
import { connect } from 'react-redux';
import Spinner from 'react-spinkit';
import PropTypes from 'prop-types';

import matchesActions from '../../../redux/Matches/actions';

import styles from './styles.module.scss';


class Matches extends Component {
  componentDidMount() {
    this.props.getMatches();
  }

  render() {
    const { data } = this.props;
    return (
      <div className={styles.table}>
        <div className={styles.head}>
          <div className={styles.headCell}>Player One</div>
          <div className={styles.headCell}>Player Two</div>
          <div className={styles.headCell}>Winner</div>
        </div>
        <div className={styles.body}>{data.length ? data.map(match => (
          <div className={styles.match} key={match.id}>
            <div className={styles.cell}>{match.player_one}</div>
            <div className={styles.cell}>{match.player_two}</div>
            <div className={styles.cell}>{match.winner}</div>
          </div>
        )) : <Spinner name="ball-scale-multiple" className={styles.spinner} />}
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ data }) => ({ data });

Matches.propTypes = {
  getMatches: PropTypes.func.isRequired,
  data: PropTypes.arrayOf(PropTypes.object)
};

const mapDispatchToProps = dispatch => ({
  getMatches: () => {
    dispatch(matchesActions.fetchMatches(dispatch));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Matches);
