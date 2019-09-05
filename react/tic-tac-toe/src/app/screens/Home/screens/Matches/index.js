import React, { Component } from 'react';
import { connect } from 'react-redux';
import Spinner from 'react-spinkit';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import matchesActions from '../../../../../redux/Matches/actions';

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
        <div className={styles.body}>
          {/* eslint-disable-next-line no-extra-parens */}
          {data.length ? (
            data.map(match => (
              <div className={styles.match} key={match.id}>
                <Link to={`/player/${match.player_one}`} className={styles.cell}>
                  {match.player_one}
                </Link>
                <Link to={`/player/${match.player_two}`} className={styles.cell}>
                  {match.player_two}
                </Link>
                <div className={styles.cell}>{match.winner}</div>
              </div>
            ))
          ) : (
            <Spinner name="ball-scale-multiple" className={styles.spinner} />
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ matches: { data } }) => ({ data });

const mapDispatchToProps = dispatch => ({
  getMatches: () => {
    dispatch(matchesActions.fetchMatches());
  }
});

Matches.propTypes = {
  getMatches: PropTypes.func.isRequired,
  data: PropTypes.arrayOf(PropTypes.object)
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Matches);
