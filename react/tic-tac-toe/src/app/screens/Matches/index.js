import React from 'react';
import PropTypes from 'prop-types';
import Spinner from 'react-spinkit';

import styles from './styles.module.scss';

function Matches({ data }) {
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

Matches.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object)
};
export default Matches;
