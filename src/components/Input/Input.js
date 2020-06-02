import React from 'react';
import PropTypes from 'prop-types';
import styles from '../Input/Input.module.sass';

const Input = ({ tag: Tag, name, label, maxLength, ...props }) => (
  <div className={styles.form__item}>
    <Tag
      type="text"
      name={name}
      required={!(name === "image")}
      id={name}
      placeholder=" "
      maxLength={maxLength}
      {...props}
    />
    <label htmlFor={name}>{label}</label>
    <div className={styles.forms__item__bar}></div>
  </div>
);

Input.propTypes = {
  tag: PropTypes.string,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  maxLength: PropTypes.number,
  minLength: PropTypes.number,
}

Input.defaultProps = {
  tag: 'input',
  maxLength: 200,
}

export default Input;