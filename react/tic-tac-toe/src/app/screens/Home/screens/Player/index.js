import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles.module.scss';

function Player({
  match: {
    params: { name }
  }
}) {
  return (
    <div>
      Información del Jugador <div className={styles.name}>{name}</div>
    </div>
  );
}
Player.propTypes = {
  match: PropTypes.objectOf(PropTypes.any)
};
export default Player;
