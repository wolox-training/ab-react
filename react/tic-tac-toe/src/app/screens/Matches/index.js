import React, { Component } from 'react';
import Spinner from 'react-spinkit';

import MatchesService from '../../../services/MatchesService';

import styles from './styles.module.scss';

class Matches extends Component {
  state = {
    data: []
  }

  componentDidMount() {
    MatchesService.getMatches().then(({ data }) => {
      this.setState({ data });
    });
  }

  render() {
    const { data } = this.state;
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

export default Matches;
