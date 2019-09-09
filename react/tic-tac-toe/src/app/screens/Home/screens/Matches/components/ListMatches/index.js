import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import withLoading from '../../../../../../components/WithLoading';

import styles from './styles.module.scss';

function ListMatches({ data }) {
  return data.map(match => (
    <div className={styles.match} key={match.id}>
      <Link to={`/player/${match.player_one}`} className={styles.cell}>
        {match.player_one}
      </Link>
      <Link to={`/player/${match.player_two}`} className={styles.cell}>
        {match.player_two}
      </Link>
      <div className={styles.cell}>{match.winner}</div>
    </div>
  ));
}

ListMatches.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object)
};

export default withLoading(ListMatches);
