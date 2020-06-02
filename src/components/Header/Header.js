import React from 'react';
import HeaderNavigation from './HeaderNavigation'
import styles from '../Header/Header.module.sass'
import logoImage from '../../assets/images/NoteApp.png'
import Button from '../../components/Button/Button'
const Header = ({ handleModalOpn }) => {
  return (
    <header className={styles.wrapper}>
      <img src={logoImage} alt="logo" />
      <HeaderNavigation />
      <Button mainBtn onClick={handleModalOpn}>new item</Button>
    </header>
  );
}

export default Header;
