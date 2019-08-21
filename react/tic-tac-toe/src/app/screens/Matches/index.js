import React, { Component } from 'react';
import { connect } from 'react-redux';
import Spinner from 'react-spinkit';
import PropTypes from 'prop-types';

import MatchesService from '../../../services/MatchesService';
import actionsCreators from '../../../redux/Matches/actions';

import styles from './styles.module.scss';


class Matches extends Component {
  componentDidMount() {
    this.props.dispatch(this.loadData());
  }

  loadData = () => dispatch => MatchesService.getMatches().then(({ data }) => {
    dispatch(actionsCreators.getMatches(data));
  });

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
  data: PropTypes.arrayOf(PropTypes.object)
};

export default connect(mapStateToProps)(Matches);