import React from 'react';
import styles from '../Modal/Modal.module.sass'
import Form from '../Form/Form'
const Modal = ({ handleModalCls }) => {
  return (
    <div className={styles.wrapper}>
      <button className={styles.closeBtn} onClick={handleModalCls}></button>
      <Form />
    </div>
  );
}

export default Modal;