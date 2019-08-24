import React from 'react';
import { Field, reduxForm } from 'redux-form';
import PropTypes from 'prop-types';

import { email, required, minLength } from '../../../../../../../utils/validations';
import Input from '../../../../../../components/form-controls/Input/Input';

import styles from './styles.module.scss';

function FormLogin({ handleSubmit }) {
  return (
    <form onSubmit={handleSubmit} method="post">
      <Field
        name="email"
        validate={[required, email]}
        component={Input}
        label="Email"
        type="text"
      />
      <Field
        name="password"
        component={Input}
        validate={[required, minLength(8)]}
        label="Password"
        type="password"
      />
      <button type="submit" className={styles.btnSubmit}>Login</button>
    </form>
  );
}


FormLogin.propTypes = {
  handleSubmit: PropTypes.func
};

export default reduxForm({ form: 'login' })(FormLogin);
