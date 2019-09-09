import React from 'react';
import Spinner from 'react-spinkit';
import PropTypes from 'prop-types';

import styles from './styles.module.scss';

function withLoading(WrappedComponent) {
  function Loading({ dataLoading, data }) {
    return dataLoading ? (
      <Spinner name="ball-scale-multiple" className={styles.spinner} />
    ) : (
      <WrappedComponent data={data} />
    );
  }
  Loading.propTypes = {
    data: PropTypes.arrayOf(PropTypes.object),
    dataLoading: PropTypes.bool
  };

  return Loading;
}

export default withLoading;
