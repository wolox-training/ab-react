import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles.module.scss';

function Input({ input, type, label, meta: { touched, error } }) {
  return (
    <>
      <label className={styles.label}>{label}</label>
      <input className={styles.defaultInput} type={type} {...input} />
      {touched && (error && <span>{error}</span>)}
    </>
  );
}

Input.propTypes = {
  label: PropTypes.string,
  meta: PropTypes.objectOf(PropTypes.any),
  type: PropTypes.string
};

export default Input;
