import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import matchesActions from '../../../../../redux/Matches/actions';

import styles from './styles.module.scss';

class Player extends Component {
  componentDidMount() {
    if (!this.props.data.length) {
      this.getData();
    }
  }

  getData = () => {
    this.props.getMatches();
  };

  lostMatches = () => {
    const {
      match: {
        params: { name }
      },
      data
    } = this.props;
    const { won, tie, lost } = data.reduce(
      (acum, curr) => {
        if (curr.player_one === name || curr.player_two === name) {
          if (curr.winner === 'tie') {
            acum.tie = acum.tie + 1;
          } else if (curr[curr.winner] === name) {
            acum.won = acum.won + 1;
          } else {
            acum.lost = acum.lost + 1;
          }
        }
        return acum;
      },
      { won: 0, tie: 0, lost: 0 }
    );
    return (
      <>
        <div className={styles.infoBullet}>
          <span className={styles.infoTitle}>Ganados</span>: {won}
        </div>
        <div className={styles.infoBullet}>
          <span className={styles.infoTitle}>Perdidos</span>: {lost}
        </div>
        <div className={styles.infoBullet}>
          <span className={styles.infoTitle}>Empatados</span>: {tie}
        </div>
      </>
    );
  };

  render() {
    const {
      match: {
        params: { name }
      },
      history: { goBack }
    } = this.props;
    return (
      <div>
        <h1 className={styles.name}>Jugador {name}</h1>
        <div className={styles.matchesInfo}>{this.lostMatches()}</div>
        <button type="button" className={styles.btnBack} onClick={goBack}>
          Volver a la lista
        </button>
      </div>
    );
  }
}

const mapStateToProps = ({ matches: { data } }) => ({
  data
});

const mapDispatchToProps = dispatch => ({
  getMatches: () => {
    dispatch(matchesActions.fetchMatches());
  }
});

Player.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
  getMatches: PropTypes.func,
  history: PropTypes.objectOf(PropTypes.any),
  match: PropTypes.objectOf(PropTypes.any)
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Player);
