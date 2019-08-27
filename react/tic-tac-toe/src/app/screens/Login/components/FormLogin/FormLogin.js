import React from 'react';
import { Field, reduxForm } from 'redux-form';
import PropTypes from 'prop-types';

import { email, required, minLength } from '../../../../../utils/validations';
import Input from '../../../../components/formControls/Input/index';

import styles from './styles.module.scss';

function FormLogin({ handleSubmit, error }) {
  return (
    <>
      <form onSubmit={handleSubmit} method="post">
        <Field name="email" validate={[required, email]} component={Input} label="Email" type="text" />
        <Field
          name="password"
          component={Input}
          validate={[required, minLength]}
          label="Password"
          type="password"
        />
        <button type="submit" className={styles.btnSubmit}>
          Login
        </button>
      </form>
      {error && <span>{error}</span>}
    </>
  );
}

FormLogin.propTypes = {
  error: PropTypes.string,
  handleSubmit: PropTypes.func
};

export default reduxForm({ form: 'login' })(FormLogin);
