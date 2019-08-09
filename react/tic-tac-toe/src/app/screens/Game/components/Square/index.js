import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styles from './styles.module.scss';

class Square extends Component {
  handleValue = () => {
    this.props.onClick(this.props.index);
  }

  render() {
    return (
      <button type="button" className={styles.square} onClick={this.handleValue}>
        {this.props.value}
      </button>
    );
  }
}

Square.propTypes = {
  index: PropTypes.number,
  value: PropTypes.string,
  onClick: PropTypes.func
};
export default Square;
